// note this component used at the moment - no customers api

import Profile from "./Profile";
import OrderHistory from "./OrderHistory";

export default function CustomerDetail() {
  return (
    <>
      <Profile />
      <OrderHistory />
    </>
  );
}
