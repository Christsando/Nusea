import React from "react";
import aboutImg from "../../../assets/images/about-image.png";

const AboutSection = () => {
  return (
    <section className="w-full py-0 pt-20 bg-white" id="about">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-0">
        
        <div>
          <h3 className="text-orange-500 font-bold text-3xl mb-2">Tentang Kami</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
            Apakah kamu tahu?
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Nusea adalah Startup Digital yang menghubungkan nelayan Indonesia 
            dengan pasar global melalui sistem berbasis komunitas dan teknologi. 
            Nusea menghadirkan fitur ekspor hasil laut, edukasi, dan forum interaktif, 
            serta mendukung perikanan berkelanjutan mendukung SDGs 14 dan 17.
          </p>
        </div>

        <div className="relative flex justify-end items-end">
          <img 
            src={aboutImg} 
            alt="Tentang Kami" 
            className="w-full object-contain"
          />

          <a className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-orange-500 text-white lg:text-2xl md:text-xl font-bold rounded-full shadow-lg shadow-white/50 hover:bg-orange-600 cursor-pointer">
            Belanja Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
