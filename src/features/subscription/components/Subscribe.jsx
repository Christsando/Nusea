import React from "react";
import teamImage from "../../../assets/images/Subscribe.png"; 

const SubscribeSection = () => {
  return (
    <section className="w-full [background:linear-gradient(to_bottom,#ff5b44_0%,#ff5b44_20%,#2563eb_20%,#2563eb_80%,#ff5b44_80%,#ff5b44_100%)] py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img src={teamImage} alt="Tim Nusea" className="rounded-lg max-h-[250px] object-cover"/>
        </div>

        <div className="w-full md:w-1/2 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-bold leading-relaxed">
            Subscibe untuk mendapat berita dan layanan terbaru kami….
          </p>
        </div>

        <div className="w-full md:w-1/2 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-end gap-6">
          <a href="/subscription" className="bg-[#ff5b44] hover:bg-[#e64a34] transition px-6 py-3 rounded-full font-bold shadow-md">
            Subscribe
          </a>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;
