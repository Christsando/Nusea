import { useState } from "react";
import "./style/paymentMethod.css";
import Qris from "../assets/images/qr-nusea.jpg";
import Paypal from "../assets/images/paypal.png";
import Debit from "../assets/images/debit.png";
import Visa from "../assets/images/visa.png";

const PaymentMethod = ({ onClose, onSuccess }) => {
  const [method, setMethod] = useState("qris");

  const handlePay = () => {
    // Tutup PaymentMethod dan buka popup sukses
    onSuccess();
  };

  return (
    <div className="popupOverlay">
      <div className="popupBox">
        <h2>Pembayaran</h2>

        {/* Credit Card */}
        <div
          className={`paymentOption ${method === "card" ? "active" : ""}`}
          onClick={() => setMethod("card")}
        >
          <input
            type="radio"
            name="payment"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <label>Credit Card</label>
          <div className="icons">
            <img src={Visa} alt="Visa" />
            <img src={Debit} alt="Mastercard" />
            <img src={Paypal} alt="Paypal" />
          </div>
        </div>

        {method === "card" && (
          <div className="cardForm">
            <input type="text" placeholder="Nama di Kartu" />
            <input type="text" placeholder="Nomor Kartu" />
            <input type="text" placeholder="Tanggal kadaluarsa (MM/YY)" />
            <input type="text" placeholder="Kode keamanan" />
          </div>
        )}

        {/* Qris */}
        <div
          className={`paymentOption ${method === "qris" ? "active" : ""}`}
          onClick={() => setMethod("qris")}
        >
          <input
            type="radio"
            name="payment"
            checked={method === "qris"}
            onChange={() => setMethod("qris")}
          />
          <label>Qris</label>
        </div>

        {method === "qris" && (
          <div className="qrisBox">
            <img src={Qris} alt="QR Code" className="qrisImage" />
          </div>
        )}

        {/* Button */}
        <div className="actions">
          <button className="payBtn" onClick={handlePay}>
            Bayar Sekarang
          </button>
          <button className="closeBtn" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
