import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-1 flex items-center justify-between h-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14"/>
        </div>

        {/* Menu */}
        <div className="flex items-center">
          <a href="#home" className="pt-5 pb-5 pl-5 pr-5 text-blue-500 hover:text-blue-600 hover:bg-gray-200">Home</a>
          <a href="#about" className="pt-5 pb-5 pl-5 pr-5 text-blue-500 hover:text-blue-600 hover:bg-gray-200">About</a>
          <a href="#contact" className="pt-5 pb-5 pl-5 pr-5 text-blue-500 hover:text-blue-600 hover:bg-gray-200">Contact</a>
          <button className="ml-5 mr-3 px-4 py-2 border-2 border-black-200 bg-white text-blue-500 rounded hover:bg-gray-200">Login</button>
          <button className="ml-3 mr-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Register</button>
        </div>
      </div>
    </nav>
  );
}
