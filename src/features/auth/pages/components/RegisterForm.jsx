import React from "react";
import logo from "../../../../assets/logo.png";
import googleIcon from "../../../../assets/Google-icon.png"

const SignupForm = () => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8">
        <img src={logo} alt="Logo" className="mx-auto mb-6 w-24" />
        <h2 className="text-center text-xl font-semibold mb-6">
          Dari Nelayan Lokal ke Dunia, Dimulai di Sini.
        </h2>
        <form className="space-y-4 flex flex-col gap-0">
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
                type="button" className="w-full border flex bg-[#333333] text-white justify-center items-center gap-2 p-3 rounded-md">
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
    </div>
  );
};

export default SignupForm;
