import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatarImage from "../assets/images/profil.png";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-auto">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-14" />
                    <div className="flex items-center gap-3 px-10">
                        <Link to="/" className="pt-5 pb-5 pl-5 pr-5 text-gray-800 hover:text-blue-500 text-sm">
                            Home
                        </Link>
                        <div className="relative pt-5 pb-5 pl-5 pr-5" ref={dropdownRef}>
                            <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="hover:text-blue-500 flex items-center gap-1 text-sm text-gray-800">
                                Article
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg border z-20">
                                    <Link to="/article" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                                        Article
                                    </Link>
                                    <Link to="/saved-article" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                                        Saved Article
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/edupage" className="pt-5 pb-5 pl-5 pr-5 text-gray-800 hover:text-blue-500 text-sm">
                            Education
                        </Link>
                        <Link to="/" className="pt-5 pb-5 pl-5 pr-5 text-gray-800 hover:text-blue-500 text-sm">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block flex-1 max-w-md mx-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-semibold text-blue-500">Marpuah</span>
                    <img src={avatarImage} alt="User Avatar" className="h-10 w-10 rounded-full object-cover" />
                </div>
            </div>
        </nav>
    );
}
