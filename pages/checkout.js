import React from "react";
import CheckoutNav from "../components/Checkout/CheckoutNav";
import CheckoutContent from "../components/Checkout/CheckoutContent";
import PageLayout from "../components/PageLayout";

export default function checkout() {
  return (
    <PageLayout type={"PRODUCT"} Checkout={true}>
      <CheckoutContent />
    </PageLayout>
  );
}
