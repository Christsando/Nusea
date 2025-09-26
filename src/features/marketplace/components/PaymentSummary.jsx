import React from "react";
import "./style/paymentSummary.css";

const PaymentSummary = () => {
    const items = [
        { id: 1, name: "Kepiting Rajungan", qty: 1, price: 200000 },
        { id: 2, name: "Udang", qty: 1, price: 120000 },
        { id: 3, name: "Cumi-Cumi", qty: 1, price: 90000 },
        { id: 4, name: "Ikan Tuna", qty: 1, price: 100000 },
    ];

    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const ongkir = 0;
    const total = subtotal + ongkir;

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
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty.toString().padStart(2, "0")}</td>
                            <td>Rp{item.price.toLocaleString("id-ID")}</td>
                        </tr>
                    ))}
                    <tr className="summaryRow">
                        <td colSpan="2">SUBTOTAL</td>
                        <td>Rp{subtotal.toLocaleString("id-ID")}</td>
                    </tr>
                    <tr className="summaryRow">
                        <td colSpan="2">ONGKIR</td>
                        <td>{ongkir}</td>
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
