import { LogIn } from "lucide-react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedLayout() {
  const { loginUser } = useSelector((state) => state.user);
  return loginUser === null ? <Navigate to={LogIn} /> : <Outlet />;
}

export default ProtectedLayout;
