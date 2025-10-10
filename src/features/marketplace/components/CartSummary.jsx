import React from "react";
import "./style/cartSummary.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  // Hitung subtotal (pastikan harga berupa angka)
  const subtotal = items.reduce((sum, item) => {
    const priceNumber = parseInt(
      item.price.replace(/[^\d]/g, "") // hapus "Rp" dan titik
    );
    return sum + priceNumber * item.quantity;
  }, 0);

  const handleCheckout = () => {
    navigate("/market/cart/payment");
  };

  return (
    <div className="cartSummaryContainer">
      <div className="cartSummaryHeader">
        <h3>Total Keranjang</h3>
      </div>

      <div className="cartSummaryRow">
        <span>SUBTOTAL</span>
        <span>Rp{subtotal.toLocaleString("id-ID")}</span>
      </div>

      <div className="cartSummaryRow">
        <span>DISCOUNT</span>
        <span>---</span>
      </div>

      <div className="cartSummaryRow total">
        <span>TOTAL</span>
        <span>Rp{subtotal.toLocaleString("id-ID")}</span>
      </div>

      <button className="checkoutBtn" onClick={handleCheckout}>
        Lanjut ke Pembayaran
      </button>
    </div>
  );
};

export default CartSummary;
