import "./App.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Star, Heart, Truck, Package } from "lucide-react";
import { products, productsUnggulan } from "../data/products";
import Button from "@mui/material/Button";
import ButtonQuantity from "../components/ButtonQuantity";
import Review from "../components/Review";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Ambil produk berdasarkan ID
    useEffect(() => {
        const allProducts = [...productsUnggulan, ...products];
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    // Ubah title browser sesuai produk
    useEffect(() => {
        if (product) {
            document.title = `Nusea | ${product.name}`;
        } else {
            document.title = "Nusea | Product - Loading...";
        }
    }, [product]);

    // Jika produk belum ketemu
    if (!product) {
        return (
            <div className="DetailApp">
                <Navbar />
                <div style={{ textAlign: "center", padding: "50px" }}>
                    <p>Loading...</p>
                </div>
                <Footer />
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity }));
        navigate("/market/cart");
    };

    const handleClick = () => {
        navigate(`/market/product/${id}/ulasan`);
    };

    const handleBuyClick = () => {
        dispatch(addToCart({ product, quantity }));
        navigate(`/market/cart/payment`);
    };

    return (
        <div className="DetailApp">
            <main>
                <Navbar />
                <div className="upperContainer">
                    {/* image section */}
                    <div className="imageContainer">
                        <img src={product.image} alt={product.name} />
                    </div>

                    {/* detail section */}
                    <div className="detailContainer">
                        <div className="productNameContainer">
                            <h2>{product.name}</h2>
                        </div>

                        <div>
                            <div className="priceAndRatingContainer">
                                <p>{product.price} | </p>

                                <div className="ratingContainer">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="starIcon" />
                                    ))}
                                    <span className="ratingNumber">(32 ulasan)</span>
                                </div>
                            </div>

                            <hr className="lineSeparator" />
                        </div>

                        <div className="separatorDescAndButton">
                            {/* description section */}
                            <div className="descriptionContainer">
                                <p>{product.description}</p>

                                <p className="keunggulanProduk">
                                    Keunggulan Produk : <br />
                                    <ul className="list-disc list-inside">
                                        {product.keunggulan?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>

                            {/* pengiriman */}
                            <div className="couponContainer">
                                <span>
                                    <Truck size={24} className="couponIcon" /> Gratis Ongkir untuk
                                    pembelian di atas Rp500.000
                                </span>
                                <span>
                                    <Package size={24} className="couponIcon" /> Estimasi
                                    pengiriman: 6-8 hari kerja
                                </span>
                            </div>

                            {/* tombol */}
                            <div className="buttonsContainer">
                                <div className="addToCartContainer">
                                    <ButtonQuantity value={quantity} onChange={setQuantity} />
                                    <Button
                                        variant="contained"
                                        onClick={handleAddToCart}
                                        color="error"
                                        sx={{ borderRadius: 20 }}
                                        className="addToCartButton"
                                    >
                                        Tambah ke Keranjang
                                    </Button>
                                </div>
                                <Button
                                    variant="outlined"
                                    sx={{ borderRadius: 20 }}
                                    className="buyNowButton"
                                    onClick={handleBuyClick}
                                >
                                    Beli Sekarang
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ulasan user */}
                <div className="ulasanContainer">
                    <h3>Rating dan Ulasan</h3>
                    <div className="listUlasanContainer">
                        <Review />
                        <Review />
                        <a onClick={handleClick}>Lihat lebih banyak ulasan &gt;</a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Detail;