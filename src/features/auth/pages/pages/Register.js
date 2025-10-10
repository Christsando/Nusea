import React from "react";
import AuthImage from "../components/AuthImage";
import SignupForm from "../components/RegisterForm";

const SignupPage = () => {
  return (
    <div className="flex h-screen">
      <AuthImage />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
