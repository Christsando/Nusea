// PaymentMethod.jsx
import { useState } from "react";
import "./style/paymentMethod.css";

const PaymentMethod = ({ onClose ,  onSuccess }) => {
  const [method, setMethod] = useState("qris"); // default Qris

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
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="Mastercard" />
            <img src="paypal.png" alt="Paypal" />
          </div>
        </div>
        {method === "card" && (
          <div className="cardForm">
            <input type="text" placeholder="Nama di Kartu" defaultValue="Dania Lestari" />
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
            <img src="qris.png" alt="QR Code" className="qrisImage" />
          </div>
        )}

        {/* Button */}
        <div className="actions">
          {method === "card" && <button className="payBtn" onClick={onSuccess}>Pay Now</button>}
          <button className="closeBtn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
