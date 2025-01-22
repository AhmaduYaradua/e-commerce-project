import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="border-b border-green-200 sticky top-0 bg-white">
      <section className="conainer mx-auto p-2 flex justify-between">
        <NavLink to={"/"}>
          <h2 className="text-2xl font-bold text-green-800">KOATZ</h2>
        </NavLink>

        <div className="flex gap-4 text-lg text-gray-500">
          <NavLink className="hover:text-green-500" to={"/marketplace"}>
            ARTELIER
          </NavLink>
          <NavLink className="hover:text-green-500" to={"/cart"}>
            <ShoppingCart />
            <p className="bg-green-700 text-white text-xs rounded-full text-center py-1 font-bold absolute -right-2 w-6 -top-2 h-6">
              {cartItems.length}
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  );
}
export default Navbar;
