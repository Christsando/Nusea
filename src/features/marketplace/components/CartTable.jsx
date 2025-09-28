import "./style/cartTable.css";
import ButtonQuantity from "./ButtonQuantity";

const CartTable = () => {
    const items = [
        {
            id: 1,
            name: "Kepiting Rajungan",
            price: 150000,
            quantity: 2,
            image: "kepiting.png"
        },
        {
            id: 2,
            name: "Udang Windu",
            price: 120000,
            quantity: 1,
            image: "udang.png",
        },
        {
            id: 3,
            name: "Ikan Kembung",
            price: 100000,
            quantity: 3,
            image: "ikan.png",
        },
    ];
    return (
        <div className="cartTableContainer">
            <table className="cartTable">
                <thead className="cartHeader">
                    <tr>
                        <th>Item</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            {/* Kolom Item (gambar + nama) */}
                            <td className="imageColumn">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="productImg"
                                />{" "}
                                {item.name}
                            </td>

                            {/* Harga */}
                            <td className="priceCell">Rp{item.price.toLocaleString("id-ID")}</td>

                            {/* Jumlah */}
                            <td className="quantityCell"><ButtonQuantity className="buttonQuantity"/></td>

                            {/* Total Harga */}
                            <td className="totalCell">
                                Rp{(item.price * item.quantity).toLocaleString("id-ID")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;