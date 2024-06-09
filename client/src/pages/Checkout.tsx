import React from "react";
import PaymentDetails from "../components/checkout/PaymentDetails";
import Summary from "../components/checkout/Summary";

export default function Checkout() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-accent pb-2 text-center">
        Checkout
      </h2>
      <div className="flex flex-col md:flex-row">
        <PaymentDetails />
        <Summary />
      </div>
    </div>
  );
}
