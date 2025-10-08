import './style/detailStatus.css';

const DetailStatus = () => {
    const trackingData = [
        {
            date: "15 Sep 2025 15:00",
            title: "Paket Anda Telah Diterima [Dania Lestari]",
            description: "",
        },
        {
            date: "15 Sep 2025 14:00",
            title: "Paket Sedang Dikirim Oleh Kurir",
            description: "[Asep Suryanto]",
        },
        {
            date: "15 Sep 2025 11:00",
            title: "Paket Telah Diterima Oleh Pusat Sortir Kota Bandung",
            description: "",
        },
        {
            date: "14 Sep 2025 08:30",
            title: "Paket Dalam Perjalanan Ke Kota Bandung",
            description: "",
        },
        {
            date: "13 Sep 2025 16:00",
            title: "Paket Telah Diterima Oleh Pusat Sortir Kota Bogor",
            description: "",
        },
        {
            date: "13 Sep 2025 09:00",
            title: "Paket Telah Diterima Oleh Pick-Up Hub Kota Bogor",
            description: "",
        },
        {
            date: "12 Sep 2025 10:00",
            title: "Nomor Resi Telah Dibuat",
            description: "9932009432",
        },
    ];

    return (
        <div className="timeline-container">
            {trackingData.map((item, index) => (
                <div
                    className={`timeline-item ${index === 0 ? "active" : ""}`}
                    key={index}>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-content">
                        <div className="timeline-title">{item.title}</div>
                        <div className="timeline-desc">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailStatus;