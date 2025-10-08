import "./style/historyTable.css";

const historyData = [
  {
    orderNo: 2133,
    image: "kepiting.png",
    name: "Kepiting Rajungan",
    status: "Sudah Sampai",
    tracking: "Rating",
    date: "01-09-2025",
    price: "Rp200.000",
  },
  {
    orderNo: 2133,
    image: "udang.png",
    name: "Udang",
    status: "Sudah Sampai",
    tracking: "Rating",
    date: "01-09-2025",
    price: "Rp120.000",
  },
  {
    orderNo: 2133,
    image: "cumi.png",
    name: "Cumi-Cumi",
    status: "Sudah Sampai",
    tracking: "Rating",
    date: "01-09-2025",
    price: "Rp90.000",
  },
  {
    orderNo: 2133,
    image: "tuna.png",
    name: "Ikan Tuna",
    status: "Sudah Sampai",
    tracking: "Rating",
    date: "23-07-2021",
    price: "Rp100.000",
  },
];

const HistoryTable = () => {
  return (
    <div>
      <table className="historyTable">
        <thead className="historyHeader">
          <tr>
            <th>No Order</th>
            <th>Item</th>
            <th>Status</th>
            <th>ID Pelacakan</th>
            <th>Tanggal Pengiriman</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              {/* Order Number */}
              <td>{item.orderNo}</td>

              {/* Image & Name */}
              <td className="itemCell">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>

              {/* Status */}
              <td>
                <span className="status success">{item.status}</span>
              </td>

              {/* Tracking */}
              <td>
                <a href="#">{item.tracking}</a>
              </td>

              {/* Date */}
              <td>{item.date}</td>

              {/* Price */}
              <td>{item.price}</td>

              {/* Re-Order */}
              <td>
                <button className="reorderBtn">Re-Order →</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;