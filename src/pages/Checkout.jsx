import CheckoutForm from "../components/checkout/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
// import useCart from './../../hooks/useCart';
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/ui/Loader/Loader";
import { AuthContext } from "../provider/AuthProvider";

// Load Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();
  //   const [cart] = useCart();
  //   const packagePrice = cart.reduce((acc, item) => acc + item.price, 0);
  const { packagePrice } = useContext(AuthContext);

  useEffect(() => {
    if (packagePrice > 0) {
      const roundedPrice = Math.round(packagePrice * 100); // Convert to cents and round to nearest integer
      axiosSecure
        .post("/payment/create-payment-intent", { price: roundedPrice })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch(() => console.error("Failed to fetch payment intent"));
    }
  }, [axiosSecure, packagePrice]);

  const appearance = { theme: "stripe" };
  const options = { clientSecret, appearance };

  return (
    <div>
      {/* <SectionTitle heading="Payment" subHeading="Please pay to eat" /> */}
      <div className="max-w-3xl sm:mx-auto my-24 mx-2">
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="absolute top-1/2 left-1/2">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

