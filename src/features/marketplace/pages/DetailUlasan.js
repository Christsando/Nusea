import "./App.css";
import "./style/detailUlasan.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ReviewDetail from "../components/ReviewDetail.jsx";
import { useSelector } from "react-redux";

function DetailUlasan() {
    const reviews = useSelector((state) => state.reviews.list); // ✅ ambil dari Redux

    return (
        <div className="App">
            <title>Nusea | Detail Ulasan</title>
            <Navbar />

            <main>
                <h1 className="titleSection" id="productsSection">Rating dan Ulasan</h1>

                <div className="reviewContainers">
                    {reviews.length === 0 ? (
                        <p style={{ textAlign: "center" }}>Belum ada ulasan</p>
                    ) : (
                        reviews.map((r, index) => (
                            <ReviewDetail key={index} review={r} />
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DetailUlasan;
