import React, { useState } from "react";
import checkIcon from "../../../assets/check_icon.png";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "explorer",
      name: "Paket Eksplorer",
      price: "$5.9/Month",
      features: [
        "Akses marketplace produk laut Indonesia",
        "Update harga komoditas real-time",
        "Artikel & edukasi tentang sustainability",
        "Support via email",
      ],
    },
    {
      id: "premium",
      name: "Paket Premium",
      price: "$10.5/Month",
      features: [
        "Semua fitur paket Eksplorer",
        "Akses produk eksklusif (premium seafood)",
        "Subscription box hasil laut pilihan/bulanan",
        "Forum interaktif dengan komunitas pecinta seafood & nelayan",
      ],
    },
    {
      id: "global",
      name: "Paket Global Partner",
      price: "$15.3/Month",
      features: [
        "Semua fitur Premium",
        "Akses bulk order (20 ton/ekspor global)",
        "Konsultasi langsung dengan tim sourcing",
        "Prioritas pengiriman internasional",
      ],
    },
  ];

  // const handleBuy = () => {
  //   if (selectedPlan) {
  //     alert(`Kamu memilih: ${selectedPlan.name}`);
  //     // di sini bisa diarahkan ke halaman checkout atau API call
  //   } else {
  //     alert("Silakan pilih paket dulu sebelum membeli 😊");
  //   }
  // };

  return (
    <section className="w-full py-16 mt-20 bg-gradient-to-b from-[#0259DE] to-[#1294D4] text-white">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <h2 className="text-2xl md:text-3xl font-normal mb-12">
          Kami Punya,{" "}
          <span className="text-white font-bold">
            Paket Pelayanan Premium Siap Kami Layani
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto my-20">
          {plans.map((plan) => (
            <div key={plan.id} onClick={() => setSelectedPlan(plan)}
              className={`group cursor-pointer group p-6 rounded-xl shadow-lg flex flex-col justify-between hover:scale-y-110 
                ${
                  selectedPlan?.id === plan.id
                    ? "bg-white text-gray-800"
                    : "bg-gradient-to-b from-blue-400 to-blue-500 text-white"
                }`}
            >
              <h3 className={`text-xl font-bold mb-6 transition-colors  ${selectedPlan?.id === plan.id ? "text-blue-600" : "text-white"}`}>
                {plan.name}
              </h3>

              <ul className="text-left space-y-4 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img src={checkIcon} alt="fitur" className="w-6 h-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-semibold">{plan.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">

          {/* <button onClick={handleBuy} className="px-8 py-3 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 transition">
            Beli Paket
          </button> */}

          <a href="/payment" className="px-8 py-3 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 transition">
            Beli Paket
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;