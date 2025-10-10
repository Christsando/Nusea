import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/Customer.png";
import emailDrop from "../assets/email_drop.png"

const UserNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-2 shadow-sm bg-white">

        <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/article" className="hover:text-blue-600">Article</a></li>
            <li><a href="/edupage" className="hover:text-blue-600">Education</a></li>
            <li><a href="/#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <input type="text" placeholder="Search" className="px-3 py-2 border lg:w-1/4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>

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
