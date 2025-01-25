// import {
//   CardElement,
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { toast } from "react-toastify";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   // Handle form submission.
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       toast.error(error.message);
//       console.log("[error]", error);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button className="bg-red-500" type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckoutForm = ({ id, email }) => {
  const { user, packagePrice } = useContext(AuthContext);
  const [plan, setPlan] = useState(null);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const [errorMessage, setErrorMessage] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [loading, setLoading] = useState(false);

  //set package
  if (packagePrice === 49) {
    setPlan("Silver");
  } else if (packagePrice === 99) {
    setPlan("Gold");
  } else if (packagePrice === 149) {
    setPlan("Platinum");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not properly initialized.");
      return;
    }

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: user?.name || "Guest User",
              email: user?.email || "guest@example.com",
            },
          },
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent?.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const contactRequest = {
          email: user.email,
          biodataId: id,
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount,
          date: new Date().toISOString(),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", contactRequest);
        // console.log(res.data);
        //store payment details in database

        //after successful payment, redirect to payment history page
        toast.success("Payment Successful");
        navigate("/dashboard/payment-history");
        if (res.data.result.insertedId) {
          console.log("Payment completed successfully");
        } else {
          setErrorMessage("Payment not completed. Please try again.");
        }
      } else {
        setErrorMessage("Payment not completed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing your payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        className="btn btn-primary w-full mt-4"
        disabled={!stripe || !elements || loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      {transactionId && (
        <div className="text-green-500 mt-2">
          Transaction ID: {transactionId}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
