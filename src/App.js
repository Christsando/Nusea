import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Market from "./features/marketplace/pages/Market";
import Subscription from "./features/subscription/Subscription";
import Article from "./features/article/Article";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Subscription />} />
        <Route path="/market" element={<Market />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
