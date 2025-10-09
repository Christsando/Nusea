// PaymentPage.jsx
import React, { useState } from "react";
import PaymentMethod from "../../../components/PaymentMethod";
import PaymentSuccessPopUp from "../../../components/PaymentSuccessPopUp";

const PaymentPage = () => {
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePaymentClick = () => {
    setShowPaymentMethod(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md border">
          <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-t-lg">
            Paket Premium
          </div>

          <form className="p-6 space-y-4 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Nama Depan*</label>
                <input type="text" className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Nama Belakang*</label>
                <input type="text" className="w-full border p-2 rounded-md" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input type="email" className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Nomor Handphone*</label>
                <input type="text" className="w-full border p-2 rounded-md" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Pilihan Periode</label>
              <select className="w-full border p-2 rounded-md" defaultValue="3 Bulan">
                <option>1 Bulan</option>
                <option>2 Bulan</option>
                <option>3 Bulan</option>
                <option>4 Bulan</option>
                <option>6 Bulan</option>
                <option>7 Bulan</option>
                <option>8 Bulan</option>
                <option>9 Bulan</option>
                <option>10 Bulan</option>
                <option>11 Bulan</option>
                <option>12 Bulan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Total</label>
              <input type="text" disabled value="Rp 600.1500" className="w-full border p-2 rounded-md bg-gray-100"/>
            </div>

            <div>
              <label className="block text-sm font-medium">Pembayaran</label>
              <select className="w-full border p-2 rounded-md">
                <option>QRISPay</option>
                <option>Transfer Bank</option>
                <option>PayPal</option>
              </select>
            </div>

            {/* <div className="flex justify-center">
              <button type="button" onClick={handlePaymentClick} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold m-10">
                Bayar Sekarang
              </button>
            </div> */}

            <div className="flex justify-center">
              <button
                type="button"
                onClick={handlePaymentClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold m-10"
              >
                Bayar Sekarang
              </button>
            </div>
          </form>
        </div>
      </main>

      {showPaymentMethod && (
        <PaymentMethod
          onClose={() => setShowPaymentMethod(false)}
          onSuccess={() => {
            setShowPaymentMethod(false);
            setShowSuccessPopup(true);
          }}
        />
      )}

      {showSuccessPopup && (
        <PaymentSuccessPopUp onClose={() => setShowSuccessPopup(false)} />
      )}
    </div>
  );
};

export default PaymentPage;
