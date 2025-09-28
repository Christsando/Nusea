import TypeFilter from "../components/TypeFilter";
import PriceFilter from "../components/PriceFilter";
import { FaSearch } from "react-icons/fa";
import ProductsCard from '../components/ProductsCard';
import './App.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

function Products() {

    const products = [
        { id: 1, name: "Udang", price: "Rp120.000/Kg", image: "" },
        { id: 2, name: "Ikan Bandeng", price: "Rp50.000/Kg", image: "" },
        { id: 3, name: "Kepiting", price: "Rp150.000/Kg", image: "" },
        { id: 4, name: "Paus", price: "Rp100.000.000/Kg", image: "" },
        { id: 5, name: "Kerang Hijau", price: "Rp100.000/Kg", image: "" },
        { id: 6, name: "Kerang", price: "Rp30.000/Kg", image: "" },
        { id: 7, name: "Udang", price: "Rp120.000/Kg", image: "" },
        { id: 8, name: "Ikan Bandeng", price: "Rp50.000/Kg", image: "" },
        { id: 9, name: "Kepiting", price: "Rp150.000/Kg", image: "" },
        { id: 10, name: "Paus", price: "Rp100.000.000/Kg", image: "" },
        { id: 11, name: "Kerang Hijau", price: "Rp100.000/Kg", image: "" },
        { id: 12, name: "Kerang", price: "Rp30.000/Kg", image: "" },
        { id: 13, name: "Ikan Bandeng", price: "Rp50.000/Kg", image: "" },
        { id: 14, name: "Kepiting", price: "Rp150.000/Kg", image: "" },
        { id: 15, name: "Paus", price: "Rp100.000.000/Kg", image: "" },
        { id: 16, name: "Kerang Hijau", price: "Rp100.000/Kg", image: "" },
        { id: 17, name: "Kerang", price: "Rp30.000/Kg", image: "" },
    ];

    return (
        <div className="ProductsPage">
            <title>Nusea | Products</title>

            {/* Filter by Type */}
            <Navbar />
            <div className="filterSectionContainer">
                <TypeFilter />
                <PriceFilter />
            </div>
            <div className="productsSectionContainer">
                <h1>Koleksi Produk Kami</h1>
                <div className="searchBarContainer">
                    <input
                        type="text"
                        placeholder="Cari Produk"
                        className="searchInput"
                    />
                    <button className="searchButton">
                        <FaSearch />
                    </button>
                </div>

                <div className='productGrid'>
                    {products.map((product) => (
                        <ProductsCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                <div className="loadMoreContainer">
                    <button className="loadMoreButton">Muat Lebih Banyak &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Products;