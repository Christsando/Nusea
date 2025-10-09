import React from "react";
import "./style/paymentSummary.css";
import { useSelector } from "react-redux";

const PaymentSummary = ({ discount = 0 }) => {
    const items = useSelector((state) => state.cart.items);

    if (items.length === 0) {
        return (
            <div className="summaryContainer">
                <div className="summaryHeader">
                    <h3>Pembayaran</h3>
                </div>
                <p style={{ textAlign: "center", padding: "20px" }}>
                    Keranjang kosong — tidak ada produk untuk dibayar.
                </p>
            </div>
        );
    }

    const subtotal = items.reduce((acc, item) => {
        const priceNumber = parseInt(item.price.toString().replace(/[^\d]/g, ""));
        return acc + priceNumber * item.quantity;
    }, 0);

    const ongkir = 0;
    const diskonNominal = (subtotal * discount) / 100;
    const total = subtotal - diskonNominal + ongkir;

    return (
        <div className="summaryContainer">
            <div className="summaryHeader">
                <h3>Pembayaran</h3>
            </div>
            <table className="summaryTable">
                <thead>
                    <tr>
                        <th>PRODUK</th>
                        <th>JUMLAH</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const priceNumber = parseInt(item.price.toString().replace(/[^\d]/g, ""));
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity.toString().padStart(2, "0")}</td>
                                <td>Rp{priceNumber.toLocaleString("id-ID")}</td>
                            </tr>
                        );
                    })}

                    <tr className="summaryRow">
                        <td colSpan="2">SUBTOTAL</td>
                        <td>Rp{subtotal.toLocaleString("id-ID")}</td>
                    </tr>

                    <tr className="summaryRow">
                        <td colSpan="2">DISKON</td>
                        <td>
                            {discount > 0
                                ? `-${discount}% (Rp${diskonNominal.toLocaleString("id-ID")})`
                                : "-"}
                        </td>
                    </tr>

                    <tr className="summaryRow">
                        <td colSpan="2">ONGKIR</td>
                        <td>{ongkir === 0 ? "Gratis" : `Rp${ongkir.toLocaleString("id-ID")}`}</td>
                    </tr>

                    <tr className="summaryRow total">
                        <td colSpan="2">TOTAL</td>
                        <td>Rp{total.toLocaleString("id-ID")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentSummary;
