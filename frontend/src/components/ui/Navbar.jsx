import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import { Tooltip } from "antd";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { loginUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(updateUser(null));
    navigate("/login");
  }
  return (
    <nav className="border-b border-green-200 sticky top-0 bg-white">
      <section className="conainer mx-auto p-2 flex justify-between">
        <NavLink to={"/"}>
          <h2 className="text-2xl font-bold text-green-800">KOATZ</h2>
        </NavLink>

        <div className="flex gap-4 items-center text-lg text-gray-500">
          <NavLink className="hover:text-green-500" to={"/marketplace"}>
            ARTELIER
          </NavLink>
          {loginUser === null ? (
            <NavLink
              className="text-green-800 hover:text-black hover:underline"
              to={"/login"}
            >
              Login
            </NavLink>
          ) : (
            <div>
              <p>{loginUser.name}</p>
            </div>
          )}

          {loginUser !== null && loginUser.userType === "admin" ? (
            <NavLink className="border p-1" to={"/admin"}>
              <Tooltip title="admin dashboard">
                <User size={16} />
              </Tooltip>
            </NavLink>
          ) : (
            <NavLink className="hover:text-green-500 relative" to={"/cart"}>
              <ShoppingCart />
              <p className="bg-green-700 text-white text-xs rounded-full text-center py-1 font-bold absolute -right-3 w-6 -top-2 h-6">
                {cartItems.length}
              </p>
            </NavLink>
          )}

          {loginUser !== null && (
            <button
              onClick={handleLogout}
              className="border p-1 rounded-md text-red-500 border-red-600"
            >
              <Tooltip title="Logout">
                <LogOut size={16} />
              </Tooltip>
            </button>
          )}
        </div>
      </section>
    </nav>
  );
}
export default Navbar;
