import TypeFilter from "../components/TypeFilter";
import PriceFilter from "../components/PriceFilter";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProductsCard from '../components/ProductsCard';
import './App.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { allProducts } from "../data/products";

function Products() {
    useEffect(() => {
        document.title = "Nusea | Products";
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // 🔥 Fungsi konversi harga string jadi angka murni (misal: "Rp200.000/Kg" -> 200000)
    const parsePrice = (price) => {
        if (!price) return 0;
        return parseInt(price.replace(/[^\d]/g, ""), 10) || 0;
    };

    // 🔥 Filter presisi
    const filteredProducts = allProducts.filter((product) => {
        const name = product.name?.toLowerCase() || "";
        const category = product.category || "";
        const price = parsePrice(product.price);

        // --- Search Filter ---
        const matchSearch = name.includes(searchTerm.toLowerCase());

        // --- Category Filter ---
        const matchCategory = !selectedCategory || category === selectedCategory;

        // --- Price Filter ---
        let matchPrice = true;
        if (selectedPrice === "p1") matchPrice = price >= 20000 && price <= 50000;
        if (selectedPrice === "p2") matchPrice = price > 50000 && price <= 100000;
        if (selectedPrice === "p3") matchPrice = price > 100000 && price <= 200000;
        if (selectedPrice === "p4") matchPrice = price > 200000;

        // 🔥 Semua harus terpenuhi
        return matchSearch && matchCategory && matchPrice;
    });

    return (
        <div className="ProductsPage">
            <Navbar />

            <div className="filterSectionContainer">
                <TypeFilter
                    activeCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                />
                <PriceFilter
                    selectedPrice={selectedPrice}
                    onPriceSelect={setSelectedPrice}
                />
            </div>

            <div className="productsSectionContainer">
                <h1>Koleksi Produk Kami</h1>

                <div className="searchBarContainer">
                    <input
                        type="text"
                        placeholder="Cari Produk"
                        className="searchInput"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="searchButton">
                        <FaSearch />
                    </button>
                </div>

                <div className="productGrid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductsCard
                                key={product.id}
                                id={product.id}
                                category={product.category}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))
                    ) : (
                        <p style={{ textAlign: "center", width: "100%" }}>
                            Tidak ada produk yang cocok dengan filter
                        </p>
                    )}
                </div>

                <div className="loadMoreContainer">
                    <button className="loadMoreButton">Muat Lebih Banyak &gt;</button>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default Products;
