import React from "react";
import TopImage from "../../../assets/images/Fitur.png"; // gambar latar belakang
import BottomImage from "../../../assets/images/Map.png"; 

const FeaturesBackground = () => {
  return (
    <div className="flex flex-col w-full">

      <div className="w-full flex items-center flex-col ">
        <div className="flex flex-col items-center py-10">
            <h1 className="font-bold text-blue-600 md:text-2xl lg:text-4xl">Fitur Kami</h1>
            <p className="font-semibold md:text-xl lg:text-2xl">Kamu siap membawa seafood anda ke kancah <span className="text-orange-500 font-semibold">Global</span>!</p>
        </div>
        <img src={TopImage} alt="Fitur Atas" className="w-full object-cover"/>
      </div>

      <div className="w-full relative">
        <img src={BottomImage} alt="Fitur Bawah" className="w-full object-cover"/>
        <div className="absolute lg:bottom-1/4 lg:left-20 bottom-1 left-1 flex flex-col justify-center items-center gap-3">
          <p className="lg:text-2xl text-sm">Ayok! segera setor tangkapanmu disini!</p>
          <a className="py-3 px-10 bg-[#FE6647] lg:text-2xl text-sm text-white font-bold rounded-full hover:bg-[#ff876f] cursor-pointer">Setor Tangkapan</a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBackground;
