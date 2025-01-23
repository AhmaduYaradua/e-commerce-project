import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="marketplace">
          <Route index element={<MarketPlace />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path=":orderId" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
