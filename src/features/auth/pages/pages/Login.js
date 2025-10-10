import React from "react";
import AuthImage from "../components/AuthImage";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <AuthImage />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
