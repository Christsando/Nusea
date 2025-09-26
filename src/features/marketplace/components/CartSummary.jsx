import React from "react";
import "./style/cartSummary.css";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
    const navigate = useNavigate();

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
                <span>Rp510.000</span>
            </div>

            <div className="cartSummaryRow">
                <span>DISCOUNT</span>
                <span>---</span>
            </div>

            <div className="cartSummaryRow total">
                <span>TOTAL</span>
                <span>Rp510.000</span>
            </div>

            <button className="checkoutBtn" onClick={handleCheckout}>Lanjut ke Pembayaran</button>
        </div>
    );
};

export default CartSummary;