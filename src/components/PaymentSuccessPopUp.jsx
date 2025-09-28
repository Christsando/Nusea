import "./style/paymentSuccessPopUp.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPopUp = () => {

    const navigate = useNavigate();
    function handleBackToHome() {
        navigate('/');
    }
    function handleToDetailPage() {
        navigate('/status');
    }
    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <div className="iconWrapper">
                    <span className="checkIcon">✔</span>
                </div>
                <h2>Terima Kasih!</h2>
                <p>
                    Pesanan Anda telah berhasil dikonfirmasi & sedang diproses.
                    Silakan cek email Anda untuk detail pesanan
                </p>
                <div className="buttonGroup">
                    <button className="backBtn" onClick={handleBackToHome}>
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPopUp;