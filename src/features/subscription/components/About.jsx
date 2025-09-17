import React from "react";
import aboutImg from "../../../assets/images/about-image.png";
import exportImg from "../../../assets/export.png";
import subscriptionImg from "../../../assets/subscription.png";
import forumImg from "../../../assets/forum.png";
import educationImg from "../../../assets/education.png";

const AboutSection = () => {
  return (
    <section className="w-full py-0 pt-20 bg-white" id="about">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-0">
        
        <div>
          <h3 className="text-orange-500 font-bold text-3xl mb-2">Tentang Kami</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
            Apakah kamu tahu?
          </h2>
          <p className="text-gray-700 lg:text-xl md:text-base leading-relaxed">
            Nusea adalah Startup Digital yang menghubungkan nelayan Indonesia 
            dengan pasar global melalui sistem berbasis komunitas dan teknologi. 
            Nusea menghadirkan fitur ekspor hasil laut, edukasi, dan forum interaktif, 
            serta mendukung perikanan berkelanjutan mendukung SDGs 14 dan 17.
          </p>
        </div>

        <div className="relative flex justify-end items-end">
          <img src={aboutImg} alt="Tentang Kami" className="w-full object-contain" />

          <a className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-orange-500 text-white lg:text-2xl md:text-xl font-bold rounded-full shadow-lg shadow-white/50 hover:bg-orange-600 cursor-pointer">
            Belanja Sekarang
          </a>
        </div>
      </div>



      <div className="w-full py-20 bg-blue-600 text-white">

        <div className="container mx-auto px-6 md:px-0 text-center">

          <h3 className="text-orange-400 font-bold text-2xl mb-2">Pelayanan Kami</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Kami Melayani Nelayan Indonesia dan Costumer Global dengan Sepenuh Hati
          </h2>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-40">

            <div className="bg-white text-black rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-16 h-16  flex items-center justify-center">
                <div className="absolute transform bg-white text-white rounded-full w-14 h-14 p-2 flex items-center justify-center">
                  <img src={exportImg}></img>
                </div>
              </div>
              <h4 className="text-orange-500 font-bold text-lg mt-6 mb-2">
                Ekspor Mudah & Transparan
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nelayan bisa mengirim hasil laut langsung ke pasar global dengan
                sistem yang adil dan harga transparan.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-8 w-16 h-16  flex items-center justify-center">
                <div className="absolute transform bg-white text-white rounded-full w-14 h-14 p-2 flex items-center justify-center">
                  <img src={subscriptionImg}></img>
                </div>
              </div>
              <h4 className="text-orange-500 font-bold text-lg mt-6 mb-2">
                Subscription Global Buyer
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Konsumen internasional dapat berlangganan produk perikanan Indonesia
                secara rutin, menjaga pasokan stabil.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-8 w-16 h-16  flex items-center justify-center">
                <div className="absolute transform bg-white text-white rounded-full w-14 h-14 p-2 flex items-center justify-center">
                  <img src={forumImg}></img>
                </div>
              </div>
              <h4 className="text-orange-500 font-bold text-lg mt-6 mb-2">
                Forum & QnA
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ruang interaksi antara nelayan dan pembeli global untuk diskusi,
                klarifikasi, dan membangun kepercayaan.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-8 w-16 h-16  flex items-center justify-center">
                <div className="absolute transform bg-white text-white rounded-full w-14 h-14 p-2 flex items-center justify-center">
                  <img src={educationImg}></img>
                </div>
              </div>
              <h4 className="text-orange-500 font-bold text-lg mt-6 mb-2">
                Edukasi & Artikel
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Konten berkala seputar praktik perikanan berkelanjutan, standar
                ekspor, hingga tren global seafood.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
