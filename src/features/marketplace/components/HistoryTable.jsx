import { useSelector } from "react-redux";
import AddReview from "./AddReview";
import "./style/historyTable.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ tambahkan ini

const HistoryTable = () => {
  const orders = useSelector((state) => state.orders.list);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // ✅ hook untuk navigasi

  const handleRatingClick = (item) => {
    setSelectedProduct(item);
    setIsReviewOpen(true);
  };

  // ✅ fungsi buat Re-Order (ke halaman detail produk)
  const handleReorder = (productId) => {
    navigate(`/market/product/${productId}`);
  };

  return (
    <div>
      <table className="historyTable">
        <thead className="historyHeader">
          <tr>
            <th>No Order</th>
            <th>Item</th>
            <th>Status</th>
            <th>Ulasan</th>
            <th>Tanggal</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                Belum ada pesanan
              </td>
            </tr>
          ) : (
            orders.map((order) =>
              order.items.map((item, index) => (
                <tr key={`${order.orderNo}-${index}`}>
                  <td>{order.orderNo}</td>
                  <td className="itemCell">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span className="status success">Sudah Sampai</span>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRatingClick(item);
                      }}
                    >
                      Rating
                    </a>
                  </td>
                  <td>{order.date}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="reorderBtn"
                      onClick={() => handleReorder(item.id)} // ✅ arahkan ke produk sesuai ID
                    >
                      Re-Order →
                    </button>
                  </td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>

      <AddReview
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default HistoryTable;
