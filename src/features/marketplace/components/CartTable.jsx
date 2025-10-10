import "./style/cartTable.css";
import ButtonQuantity from "./ButtonQuantity";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";

const CartTable = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cartTableContainer">
      <table className="cartTable">
        <thead className="cartHeader">
          <tr>
            <th>Item</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                Keranjang kamu kosong
              </td>
            </tr>
          ) : (
            items.map((item) => {
              const priceNumber = parseInt(
                item.price.toString().replace(/[^\d]/g, "") // kalau harga masih dalam format "Rp120.000"
              );
              return (
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
                  <td className="priceCell">
                    Rp{priceNumber.toLocaleString("id-ID")}
                  </td>

                  {/* Jumlah */}
                  <td className="quantityCell">
                    <ButtonQuantity
                      value={item.quantity}
                      onChange={(qty) =>
                        dispatch(updateQuantity({ id: item.id, quantity: qty }))
                      }
                      className="buttonQuantity"
                    />
                  </td>

                  {/* Total Harga */}
                  <td className="totalCell">
                    Rp{(priceNumber * item.quantity).toLocaleString("id-ID")}
                  </td>

                  {/* Tombol hapus opsional (kalau kamu mau tambahin) */}
                  <td>
                    <button
                      className="deleteBtn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
