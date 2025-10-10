import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import googleIcon from "../../../../assets/Google-icon.png";

const LoginForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  const users = [
    {
      email: "admin@gmail.com",
      password: "12345678",
      role: "admin",
    },
    {
      email: "user@gmail.com",
      password: "12345678",
      role: "user",
    },
    {
      email: "nelayan@gmail.com",
      password: "1234678",
      role: "nelayan",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setLoggedUser(foundUser);
      setShowPopup(true);
    } else {
      alert("Email atau password salah!");
    }
  };

  const handleGoogleLogin = () => {
    const googleUser = {
      email: "googleuser@gmail.com",
      role: "googleUser",
    };
    setLoggedUser(googleUser);
    setShowPopup(true);
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8">
        <a href="/">
          <img src={logo} alt="Logo" className="mx-auto mb-6 w-24" />
        </a>
        <h2 className="text-center text-xl font-semibold mb-6">
          Selamat datang kembali!
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 flex flex-col">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md bg-gray-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md bg-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-blue-600">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border bg-[#333333] text-white flex justify-center items-center gap-2 p-3 rounded-md"
          >
            <span>
              <img src={googleIcon} alt="Google" />
            </span>
            Or sign in with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 font-bold">
            Sign up now
          </a>
        </p>
      </div>

      {showPopup && loggedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-8 rounded-lg shadow-lg text-center relative max-w-md w-full">
            <h2 className="text-xl font-semibold mb-6 text-white">
              Sign In Sebagai?
            </h2>
            <div className="flex justify-center flex-wrap gap-6">
              <a href="/nelayan-home" className="px-6 py-3 bg-white border rounded-md shadow hover:bg-gray-100">
                Nelayan
              </a>
              <a href="/market" className="px-6 py-3 bg-white border rounded-md shadow hover:bg-gray-100">
                Pelanggan
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
