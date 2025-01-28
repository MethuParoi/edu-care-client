import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    //set package
    if (packagePrice === 49) {
      setPlan("Silver");
    } else if (packagePrice === 99) {
      setPlan("Gold");
    } else if (packagePrice === 149) {
      setPlan("Platinum");
    }
  }, [packagePrice]);

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

        const paymentInfo = {
          email: user.email,
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount,
          date: new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }),
          status: "succeeded",
        };

        // console.log(res.data);
        //store payment details in database
        const [res, res2] = await Promise.all([
          axiosSecure.post(`/user/add-payment-history/${user.email}`, {
            payment: paymentInfo,
          }),
          axiosSecure.patch(`/user/update-plan/${user.email}`, { plan }),
        ]);
        console.log("res1:", res.data);
        console.log("res2:", res2.data);

        //after successful payment, redirect to payment history page
        if (res.data.acknowledged === true && res2.data.acknowledged === true) {
          toast.success("Payment Successful");
          navigate("/apply-scholarship");
          console.log("Payment completed successfully");
        } else {
          setErrorMessage("Payment not completed. Please try again.");
        }
      } else {
        setErrorMessage("Payment not completed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing your payment.");
      setTimeout(() => {
        toast.error("An error occurred while processing your payment.");
      }, 5000);
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

      {/* {transactionId && (
        <div className="text-green-500 mt-2">
          Transaction ID: {transactionId}
        </div>
      )} */}
    </form>
  );
};

export default CheckoutForm;

