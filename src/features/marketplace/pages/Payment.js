import PersonalForm from "../components/PersonalForm";
import "./style/payment.css";
import { useState } from "react";
import PaymentSummary from "../components/PaymentSummary";
import PaymentSuccessPopUp from "../../../components/PaymentSuccessPopUp";
import DiscountForm from "../components/DiscountForm";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PaymentMethod from "../../../components/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { addOrder } from "../redux/orderSlice";



function Payment() {
    const [discount, setDiscount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)

    const handlePayment = () => {
        if (cartItems.length === 0) {
            alert("Keranjang kamu kosong!");
            return;
        }

        // Buat data order baru
        const newOrder = {
            orderNo: Math.floor(Math.random() * 10000),
            date: new Date().toLocaleDateString("id-ID"),
            items: cartItems,
            total: cartItems.reduce((sum, i) => sum + parseInt(i.price) * i.quantity, 0),
        };

        dispatch(addOrder(newOrder));
        dispatch(clearCart());

        setShowPaymentMethod(true);
    };

    const closePaymentMethod = () => setShowPaymentMethod(false);
    const handlePaymentSuccess = () => {
        setShowPaymentMethod(false);
        setShowPopup(true);
    };
    const closePopup = () => setShowPopup(false);

    return (
        <div className="paymentPageContainer">
            <main className="paymentPage">
                <Navbar />
                <div className="identityAndPaymentContainer">
                    <PersonalForm onFormChange={setIsFormValid} /> {/* ✅ kirim ke child */}
                    <div className="priceAndDiscountContainer">
                        <PaymentSummary discount={discount} />
                        <DiscountForm onApplyDiscount={setDiscount} />
                    </div>
                </div>

                <div className="buttonContainer">
                    <button
                        className="payNowButton"
                        onClick={handlePayment}
                        disabled={!isFormValid}
                        style={{
                            opacity: isFormValid ? 1 : 0.6,
                            cursor: isFormValid ? "pointer" : "not-allowed",
                        }}
                    >
                        Buat Pesanan
                    </button>
                </div>

                {showPaymentMethod && (
                    <PaymentMethod
                        onClose={closePaymentMethod}
                        onSuccess={handlePaymentSuccess}
                    />
                )}
                {showPopup && <PaymentSuccessPopUp onClose={closePopup} />}
            </main>
            <Footer />
        </div>
    );
}

export default Payment;
