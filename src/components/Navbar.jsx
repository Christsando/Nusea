import logo from "../assets/logo.png";
import { Search, ShoppingCart, History, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/market/cart");
  };
  const handleHistory = () => {
    navigate("/market/history");
  };
  const handleMarket = () => {
    navigate("/market");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white/60 shadow-md fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14" />
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <a
            onClick={handleHome}
            className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={handleMarket}
            className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Shop
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Search box */}
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-56">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Icons + User */}
        <div className="flex items-center space-x-5">
          <button className="text-gray-700 hover:text-blue-500" onClick={handleHistory}>
            <History className="w-6 h-6" />
          </button>
          <button className="text-gray-700 hover:text-blue-500" onClick={handleCart}>
            <ShoppingCart className="w-6 h-6" />
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div>
              <p className="text-blue-700 font-semibold leading-tight">Dania</p>
              <p className="text-orange-500 text-xs leading-tight">Pelanggan</p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-gray-100">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
