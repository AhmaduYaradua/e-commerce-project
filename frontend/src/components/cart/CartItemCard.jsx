import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";
import { formatCurrency } from "../../utils/helper";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQty,
  deleteCartItem,
  increaseCartItemQty,
} from "../../features/cart/cartSlice";

function CartItemCard({
  product_id,
  product_image,
  product_name,
  product_quantity,
  product_price,
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-6 lg:justify-between items-center border-b border-green-700">
      <img className="w-24" src={product_image} alt={product_name} />
      <div>
        <div>
          <h2 className="text-sm lg:text-xl font-semibold text-green-800 mb-4">
            {product_name}
          </h2>
          <p className="text-gray-500 font-light text-lg">
            <span>{formatCurrency(product_price)}</span>X
            <span>{product_quantity}</span>
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-4 bg-white p-2 rounded-md border">
            <button
              onClick={() => dispatch(decreaseCartItemQty(product_id))}
              className="hover:text-green-700 cursor-pointer"
            >
              <Minus />
            </button>
            <span>{product_quantity}</span>
            <button
              onClick={() => dispatch(increaseCartItemQty(product_id))}
              className="hover:text-green-700 cursor-pointer"
            >
              <Plus />
            </button>
          </div>
          <button
            onClick={() => dispatch(deleteCartItem(product_id))}
            className="underline underline-offset-[10px] text-gray-500 font-medium hover:text-green-700 cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;

CartItemCard.propTypes = {
  product_id: PropTypes.string,
  product_image: PropTypes.string,
  product_quntity: PropTypes.number,
  product_price: PropTypes.number,
  product_name: PropTypes.string,
};
