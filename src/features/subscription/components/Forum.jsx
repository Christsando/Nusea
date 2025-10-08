import React, { useState } from "react";

const faqData = [
  {
    question: "Apakah saya bisa mendapatkan diskon harga jika saya membeli lebih dari 10 kg?",
    answer:
      "Ya, anda dapat membeli bahkan lebih dari minimal 7kg untuk mendapat potongan harga, ayok! segera pesan dan berbelanja lebih banyak.",
  },
  {
    question: "Apakah Nusea bisa membantu saya untuk mengekspor ke Belanda?",
    answer:
      "Tentu, Nusea hadir sebagai solusi inovatif nelayan nusantara. Kami siap membantumu, untuk mengirim ke Belanda dengan harga ongkos kirim yang efisien, segera daftar agar dapat mengakses layanan kami.",
  },
  {
    question: "Seafood Nusea apakah terjamin sampai ke tangan konsumen dengan cepat?",
    answer:
      "Kami selalu berupaya memberikan pengalaman terbaik kepada konsumen, kami juga selalu mengusahakan agar pengiriman kami cepat dan tepat waktu.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">

        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
          <span className="text-blue-600">Masih bingung?</span>{" "}
          <span className="text-[#ff5b44]">Tenang, kami siap membantumu</span>
        </h2>
        <p className="text-center text-gray-800 mb-8 font-bold text-xl">
          Jika ada pertanyaan lain, bisa ajukan di sini
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-2 border-blue-600 rounded-lg p-4 cursor-pointer transition" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center font-semibold text-gray-800">
                {item.question}

                <span className={`inline-block  ${openIndex === index ? "rotate-90" : "rotate-90"}`}>
                  {openIndex === index ? "<" : ">"}
                </span>
              </div>
              
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 mx-auto lg:w-1/2 md:w-full flex items-center border-2 border-blue-600 rounded-lg overflow-hidden ">
          <input type="text" placeholder="Ajukan pertanyaan, ketik disini…." className="flex-1 px-4 py-3 font-semibold focus:outline-none text-gray-700"/>

          <button className="bg-[#ff5b44] hover:bg-[#e64a34] text-white px-6 py-0 font-semibold transition rounded-xl mx-10">
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
