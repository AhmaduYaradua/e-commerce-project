import { usePaystackPayment } from "react-paystack";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearUserCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router";
const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_TEST_KEY;
import axios from "axios";
import { BACKEND_BASE_URL } from "../../utils/helper";

const Payment = ({ checkOutFormData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userCartSummary, cartItems } = useSelector((state) => state.cart);
  const config = {
    reference: new Date().getTime().toString(),
    email: checkOutFormData.email,
    amount: userCartSummary.totalCartItemsCost * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: PAYSTACK_KEY,
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    try {
      if (reference) {
        // console.log(reference);
        // console.log(checkOutFormData);
        // console.log(userCartSummary);
        // console.log(cartItems);

        const response = await axios.post(`${BACKEND_BASE_URL}/order/create`, {
          reference,
          checkOutFormData,
          userCartSummary,
          cartItems,
        });

        console.log(response);

        dispatch(clearUserCart());
        localStorage.removeItem("cartSummary");
        localStorage.removeItem("userCart");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // you can call this function anything
  const onClose = () => {
    alert("Something happened");
    // implementation for  whatever you want to do when the Paystack dialog closed.
  };

  function handlePayment() {
    if (checkOutFormData.email.trim() === "") {
      alert("Sorry provide your email!");
      return;
    }
    if (checkOutFormData.name.trim() === "") {
      alert("Sorry provide your name!");
      return;
    }
    if (checkOutFormData.deliveryAddress === "") {
      alert("Sorry provide a delivery address!");
      return;
    }

    initializePayment({ onSuccess, onClose });
  }

  return (
    <div>
      <button
        className="bg-green-700 w-full py-2 text-lg font-semibold text-white mt-4 rounded-md border-2 border-green- hover:bg-white hover:text-green-700 transition-colors duration-300 cursor-pointer max-w-[250px] ml-28"
        onClick={handlePayment}
      >
        Pay Now!!!
      </button>
    </div>
  );
};

Payment.propTypes = {
  userEmail: PropTypes.string,
  amount: PropTypes.number,
  checkOutFormData: PropTypes.object,
};

export default Payment;
