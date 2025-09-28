import CartTable from '../components/CartTable';
import CartSummary from '../components/CartSummary';
import './App.css';
import ProductsCard from '../components/ProductsCard';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

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
                        {/* TODO : Create list, use grid untuk semua product  */}
                        <ProductsCard name={"Udang"} price={"Rp120.000/Kg"} image={""} />
                        <ProductsCard name={"Ikan Bandeng"} price={"Rp50.000/Kg"} image={""} />
                        <ProductsCard name={"Kepiting"} price={"Rp150.000/Kg"} image={""} />
                        <ProductsCard name={"Paus"} price={"Rp100.000.000/Kg"} image={""} />
                        <ProductsCard name={"Kerang Hijau"} price={"Rp100.000/Kg"} image={""} />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Cart;