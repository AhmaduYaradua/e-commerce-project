import { Input } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Payment from "./Payment";

function CheckoutForm() {
  const [checkoutFormData, setCheckoutFormData] = useState({
    name: "",
    email: "",
    deliveryAddress: "",
  });

  const { cartItems, userCartSummary } = useSelector((state) => state.cart);

  console.log("My cart items", cartItems);
  console.log("My order summary", userCartSummary);

  if (cartItems.length < 1 || userCartSummary < 0) {
    return <Navigate to={"/marketplace"} />;
  }
  return (
    <>
      <form className="grid gap-5">
        <Input
          onChange={(e) =>
            setCheckoutFormData({ ...checkoutFormData, name: e.target.value })
          }
          placeholder="Enter your name"
          size="large"
        />
        <Input
          onChange={(e) =>
            setCheckoutFormData({ ...checkoutFormData, email: e.target.value })
          }
          placeholder="Enter your email"
          size="large"
        />
        <Input
          onChange={(e) =>
            setCheckoutFormData({
              ...checkoutFormData,
              deliveryAddress: e.target.value,
            })
          }
          placeholder="Enter your Delivery address"
          size="large"
        />
      </form>
      <Payment checkOutFormData={checkoutFormData} />
    </>
  );
}
export default CheckoutForm;
