import React from "react";
import instagramIcon from "../assets/mdi_instagram.png";
import tiktokIcon from "../assets/ic_baseline-tiktok.png";
import linkedinIcon from "../assets/line-md_linkedin.png";
import facebookIcon from "../assets/icon-park-outline_facebook.png";
import whatsappIcon from "../assets/ic_baseline-whatsapp.png";


const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-gray-100 py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start px-6 md:px-0">
        
        <div>
          <h3 className="text-blue-600 font-bold text-3xl mb-3">Tentang Nusea</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Nusea adalah Startup Digital yang menghubungkan nelayan 
            Indonesia dengan pasar global melalui sistem berbasis 
            komunitas dan teknologi.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center lg:justify-center w-1/2 sm:justify-start">    
                <h3 className="text-blue-600 font-bold text-3xl mb-3">Media Sosial</h3>
            </div>
            <div className="flex gap-5 w-1/2 items-center justify-center">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 hover:opacity-80 transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-8 h-8 hover:opacity-80 transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 hover:opacity-80 transition" />
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
