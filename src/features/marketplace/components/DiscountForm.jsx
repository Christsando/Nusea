import React, { useState } from "react";
import "./style/discountForm.css";

const DiscountForm = ({ onApplyDiscount }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if (!applied) {
      onApplyDiscount(20); // aktifkan diskon 20%
      setApplied(true);
    } else {
      onApplyDiscount(0); // batalkan diskon
      setApplied(false);
    }
  };

  const handleApplyInputVoc = () => {
    if (voucherCode.trim().toLowerCase() === "nusea20") {
      onApplyDiscount(20); // kirim diskon 20% ke Payment.js
      alert("Voucher berhasil diterapkan! Diskon 20%");
      setApplied(true);
    } else {
      alert("Kode voucher tidak valid");
      onApplyDiscount(0); // reset diskon ke 0
      setApplied(false);
    }
  };

  const [voucherCode, setVoucherCode] = useState();
  return (
    <div className="voucherPaymentContainer">
      <div className="voucherSection">
        <h3 className="sectionTitle">
          Voucher <span className="icon">%</span>
        </h3>

        <input
          type="text"
          placeholder="Masukkan kode voucher disini"
          className="voucherInput"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          disabled={applied}
        />

        <div className="discountBox">
          <span className="discountText">
            {applied ? "Voucher dipakai (20%)" : "Voucher Diskon (20%)"}
          </span>
          <button className="applyBtn" onClick={handleApply}>
            {applied ? "Batalkan" : "Terapkan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;