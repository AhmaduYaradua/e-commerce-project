import { Link } from "react-router";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helper";

function ProductCard({
  product_name,
  product_image,
  product_id,
  product_price,
  product_quantity,
}) {
  return (
    <div className="border p-2 rounded-lg">
      <img
        className="rounded-md w-[500px] h-[400px] object-cover"
        src={product_image}
        alt={product_name}
      />
      <h3 className="text-base lg:text-lg my-4 text-green-800">
        {product_name}
      </h3>
      {/* <p>quantity: {product_quantity}</p> */}
      <p className="text-gray-500 mb-2">{formatCurrency(product_price)}</p>
      <Link to={`/marketplace/${product_id}`}>
        <button className="bg-green-500 text-white font-medium rounded-md p-2 w-full">
          View
        </button>
      </Link>
    </div>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  product_name: PropTypes.string,
  product_id: PropTypes.string,
  product_price: PropTypes.number,
  product_image: PropTypes.string,
  product_quantity: PropTypes.number,
};
