// import React from "react";
import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import googleIcon from "../../../../assets/Google-icon.png"

const SignupForm = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [role, setRole] = useState(null);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowPopup(true); 
  };


  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8">
        <a href="/">
          <img src={logo} alt="Logo" className="mx-auto mb-6 w-24" />
        </a>
        <h2 className="text-center text-xl font-semibold mb-6">
          Dari Nelayan Lokal ke Dunia, Dimulai di Sini.
        </h2>
        <form onSubmit={handleSignupClick} className="space-y-4 flex flex-col gap-0">
            <label className="">Sign Up</label>
            <input type="email" placeholder="Email or phone number" className="w-full border p-3 rounded-md"/>
            
            <label>Password</label>
            <input type="password" placeholder="Enter password" className="w-full border p-3 rounded-md"/>

            <label>Confirm Passsword</label>
            <input type="password" placeholder="Confirm password" className="w-full border p-3 rounded-md"/>

            <label className="text-sm">
                <input type="checkbox" className="mr-1" /> Remember me
            </label>

            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold">
                Sign up
            </button>

            <button
                type="submit" className="w-full border flex bg-[#333333] text-white justify-center items-center gap-2 p-3 rounded-md">
                <span><img src={googleIcon}></img></span> Or sign up with Google
            </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-bold">
            Sign in now
          </a>
        </p>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-8 rounded-lg shadow-lg text-center relative max-w-md w-full">
            <h2 className="text-xl font-semibold mb-6 text-white">Sign Up Sebagai?</h2>
            <div className="flex justify-center gap-6">
              <a href="/nelayan-home" className="px-6 py-3 bg-white border rounded-md shadow hover:bg-gray-100">
                Nelayan
              </a>
              <a href="/" className="px-6 py-3 bg-white border rounded-md shadow hover:bg-gray-100">
                Pelanggan
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
