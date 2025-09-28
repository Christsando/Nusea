import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/pages/Login";
import Register from "./features/auth/pages/pages/Register";
// import Market from "./features/marketplace/pages/Market";
// import Detail from "./features/marketplace/pages/Detail";
// import Products from "./features/marketplace/pages/Products";
import Home from "./features/subscription/pages/Home";
import NelayanHome from "./features/subscription/pages/NelayanHome";
import Subscription from "./features/subscription/pages/Subscription";
import Payment from "./features/subscription/pages/Payment"

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
        <Route path="/products" element={<Products />} />
        <Route path="/market" element={<Market />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
