import React from "react";
import "./style/discountForm.css";

const DiscountForm = ({onOpenPayment }) => {
  return (
    <div className="voucherPaymentContainer">
      {/* Voucher Section */}
      <div className="voucherSection">
        <h3 className="sectionTitle">
          Voucher <span className="icon">%</span>
        </h3>
        <input
          type="text"
          placeholder="Masukkan kode voucher disini"
          className="voucherInput"
        />
        <div className="discountBox">
          <span className="discountText">Diskon 20%</span>
          <button className="applyBtn">Terapkan</button>
        </div>
      </div>

      <hr className="divider" />

      {/* Payment Section */}
      <div className="paymentSection">
        <h3 className="sectionTitle">Pembayaran</h3>
        <div className="paymentBox" onClick={onOpenPayment}>
          <span className="paymentIcon">💼</span>
          <span className="paymentText">Pilih Metode Pembayaran</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
