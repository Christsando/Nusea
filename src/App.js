import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Market from "./features/marketplace/pages/Market";
import Detail from "./features/marketplace/pages/Detail";
import Products from "./features/marketplace/pages/Products";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
