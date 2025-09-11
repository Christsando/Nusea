import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Market from "./features/marketplace/pages/Market";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
