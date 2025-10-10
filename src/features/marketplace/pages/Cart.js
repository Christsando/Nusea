import CartTable from '../components/CartTable';
import CartSummary from '../components/CartSummary';
import './App.css';
import ProductsCard from '../components/ProductsCard';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { productsUnggulan, products } from "../data/products";

function Cart() {
    return (
        <div>
            <title>
                Nusea | Cart
            </title>

            <main>
                <Navbar />
                <div className='cartPage'>
                    <CartTable />
                    <CartSummary />
                </div>
                <div className="recommendationSection">
                    <h1 className="titleSection">Rekomendasi Produk</h1>
                    <div className='productGrid'>
                        {productsUnggulan.map((product) => (
                            <ProductsCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;