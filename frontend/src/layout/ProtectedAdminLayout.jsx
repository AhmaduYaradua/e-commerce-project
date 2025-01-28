import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedAdminLayout() {
  const { loginUser } = useSelector((state) => state.user);

  return loginUser && loginUser.userTpe !== "admin" ? (
    <Navigate to={"/marketplace"} />
  ) : (
    <Outlet />
  );
}

export default ProtectedAdminLayout;
