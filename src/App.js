import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Market from "./features/marketplace/pages/Market";
import Detail from "./features/marketplace/pages/Detail";
import Products from "./features/marketplace/pages/Products";
import Cart from "./features/marketplace/pages/Cart";
import Subscription from "./features/subscription/Subscription";
import Payment from "./features/marketplace/pages/Payment";
import Status from "./features/marketplace/pages/Status";
import History from "./features/marketplace/pages/History";
import DetailUlasan from "./features/marketplace/pages/DetailUlasan"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Subscription />} />
        <Route path="/market/product/:id" element={<Detail />} />
        <Route path="/market/products" element={<Products />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/cart" element={<Cart />} />
        <Route path="/market/cart/payment" element={<Payment />} />
        <Route path="/market/status" element={<Status />} />
        <Route path="/market/history" element={<History />} />
        <Route path="/market/product/:id/ulasan" element={<DetailUlasan />} />
      </Routes>
    </Router>
  );
}

export default App;
