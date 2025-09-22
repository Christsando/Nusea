const HistoryTable = () => {
    return (
        <div>
            <table className="orderTable">
                <thead className="tableHeader">
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
                    <tr>
                        {/* order number */}
                        <td>2133</td>

                        {/* image item and name */}
                        <td>
                            <img src="kepiting.png" alt="Kepiting" /> Kepiting Rajungan
                        </td>

                        {/* Status */}
                        <td><span className="status">Dalam Proses</span></td>

                        {/* Id resi */}
                        <td><a href="#">2176413876</a></td>

                        {/* estimation */}
                        <td>01-09-2025 (Expected)</td>

                        {/* price and re-order button */}
                        <td>Rp200.000</td>

                        <td><button>Re-Order →</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;