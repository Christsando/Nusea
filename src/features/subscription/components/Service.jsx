import React from "react";
import exportImg from "../../../assets/export.png";
import subscriptionImg from "../../../assets/subscription.png";
import forumImg from "../../../assets/forum.png";
import educationImg from "../../../assets/education.png";

const Service = () => {
  return (
    <section className="w-full py-0 pt-0 bg-white" id="service">
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

export default Service;
