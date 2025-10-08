import PersonalForm from "../components/PersonalForm";
import "./style/payment.css";
import { useState } from "react";
import PaymentSummary from "../components/PaymentSummary";
import PaymentSuccessPopUp from "../../../components/PaymentSuccessPopUp";
import DiscountForm from "../components/DiscountForm";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PaymentMethod from "../../../components/PaymentMethod";

function Payment() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const handlePayment = () => {
        setShowPopup(true);
    };
    const closePopup = () => {
        setShowPopup(false);
    };


    return (
        <div className="paymentPageContainer">
            <main className="paymentPage">
                <Navbar />
                <div className="identityAndPaymentContainer">
                    <PersonalForm />
                    <div className="priceAndDiscountContainer">
                        <PaymentSummary />
                        <DiscountForm onOpenPayment={() => setShowPaymentMethod(true)} />
                    </div>
                </div>

                <div className="buttonContainer">
                    <button className="payNowButton" onClick={handlePayment}>
                        Buat Pesanan
                    </button>
                </div>

                {showPaymentMethod && (<PaymentMethod onClose={() => setShowPaymentMethod(false)} />)}
                {showPopup && <PaymentSuccessPopUp onClose={closePopup} />}
            </main>
            <Footer />
        </div>
    );
};

export default Payment;