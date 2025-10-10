import React from "react";
import bgImage from "../../../../assets/images/Auth-image.png";

const AuthImage = () => {
  return (
    <div className="hidden md:block w-full">
      <img
        src={bgImage}
        alt="Fisherman"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default AuthImage;
