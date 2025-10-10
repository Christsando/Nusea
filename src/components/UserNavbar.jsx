import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/Customer.png";
import emailDrop from "../assets/email_drop.png";

const UserNavbar = () => {
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
        <nav className="flex items-center justify-between px-8 py-2 shadow-sm bg-white">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>

            <ul className="flex items-center gap-8 text-gray-700 font-medium">
                <li>
                    <a href="/nelayan-home" className="hover:text-blue-600">
                        Home
                    </a>
                </li>
                <li className="relative" ref={dropdownRef}>
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="hover:text-blue-600 flex items-center gap-1">
                        Article
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg border z-20">
                            <a href="/article" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                                Article
                            </a>
                            {/* Pastikan Anda memiliki rute untuk /saved-article di App.js */}
                            <a href="/saved-article" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                                Saved Article
                            </a>
                        </div>
                    )}
                </li>
                <li>
                    <a href="/edupage" className="hover:text-blue-600">
                        Education
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </li>
            </ul>

            <input type="text" placeholder="Search" className="px-3 py-2 border lg:w-1/4 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />

            <div className="flex items-center gap-6">
                <a href="">
                    <img src={emailDrop} />
                </a>
                <div className="flex flex-col items-center">
                    <span className="text-blue-600 font-semibold">Marpuah</span>
                    <span className="text-orange-500 font-medium">Nelayan</span>
                </div>
                <img src={profile} alt="User" className="w-10 h-10 rounded-full" />
            </div>
        </nav>
    );
};

export default UserNavbar;
