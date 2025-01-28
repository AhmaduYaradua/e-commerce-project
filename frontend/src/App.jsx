import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/protected/Profile";
import ProtectedLayout from "./layout/ProtectedLayout";
import ProtectedAdminLayout from "./layout/ProtectedAdminLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="marketplace">
          <Route index element={<MarketPlace />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>

        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />

        <Route element={<ProtectedLayout />}>
          <Route path="admin" element={<ProtectedAdminLayout />}>
            <Route index element={<Admin />} />
            <Route path=":orderId" element={<OrderDetails />} />
          </Route>

          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
