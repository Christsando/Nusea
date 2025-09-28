import React, { useState } from "react";
import QRIS from "../../../assets/images/QRIS.jpeg";
import SuccessfulIcon from "../../../assets/Successful.png"

const PaymentPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // tampilkan popup QR
  };

  const handleQRClick = () => {
    setShowPopup(false);       // tutup popup QR
    setPaymentSuccess(true);   // buka popup "berhasil"
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

            <div className="flex justify-center">
              <button type="button" onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold m-10">
                Bayar Sekarang
              </button>
            </div>
          </form>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-[400px] flex flex-col items-center justify-center gap-5">
            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-4">Scan QR Berikut!</h2>
            <img src={QRIS} alt="QR Code" className="mx-auto" onClick={handleQRClick}/>
          </div>
        </div>
      )}

      {paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg px-36 py-6 relative w-[670px] h-[400px] flex flex-col items-center justify-center gap-5">
            <button onClick={() => setPaymentSuccess(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              ✖
            </button>
            <img src={SuccessfulIcon}></img>
            <h2 className="text-3xl font-bold text-[#3D3D3D]">
              Pembelian Paket Berhasil!
            </h2>
            <p className="text-gray-400 ">
                Paket Premium anda sudah dapat diakses! nikmati fitur-fitur menarik dari Paket Premium!
            </p>
            <a className="bg-blue-600 text-white my-5 p-3 w-[60%] flex justify-center align-center rounded-3xl cursor-pointer hover:bg-blue-500">Kembali ke Beranda</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
