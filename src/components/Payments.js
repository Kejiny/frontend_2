import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function Payments() {
  const [products] = React.useState({});

  async function handleToken(token, addresses) {
    const response = await axios.post("", { token, products });
    const { status } = response.data;

    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container" style={{}}>
      <div className="product">
        <h1>{products.name}</h1>
        <h3>On Sale · ${products.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51Hg2qZHROekCPaiTd4EqtkgyxFIXLoyG0qbcZXEiqv9Wo75pNCLUlehU01nNOCvIjjaoAtg5hUMta65hXsE6xeby006gI30Et5"
        token={handleToken}
        amount={products.price * 100}
        name="MullaiThen"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Payments;