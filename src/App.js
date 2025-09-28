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


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nelayan-home" element={<NelayanHome />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/product/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />*/}

        <Route path="/market" element={<Market />} />
        <Route path="/market/cart" element={<Cart />} />
        <Route path="/market/cart/payment" element={<Payment />} />
        <Route path="/status" element={<Status />} />
        <Route path="/market/history" element={<History />} />

      </Routes>
    </Router>
  );
}

export default App;
