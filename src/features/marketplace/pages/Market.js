import './App.css';
import ProductsCard from '../components/ProductsCard';
import MarketBanner from '../components/MarketBanner';
import ExportIcon from '../../../assets/icon/box.png';
import FreshIcon from '../../../assets/icon/car_box.png';
import SatisfactionIcon from '../../../assets/icon/hand_box.png';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  const productsUnggulan = [
    { id: 1, name: "Udang", price: "Rp120.000/Kg", image: "" },
    { id: 2, name: "Ikan Bandeng", price: "Rp50.000/Kg", image: "" },
    { id: 3, name: "Kepiting", price: "Rp150.000/Kg", image: "" },
    { id: 4, name: "Paus", price: "Rp100.000.000/Kg", image: "" },
    { id: 5, name: "Kerang Hijau", price: "Rp100.000/Kg", image: "" },
    // { id: 6, name: "Kerang", price: "Rp30.000/Kg", image: "" },
  ];

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
  ];

  return (
    <div className="App">

      {/* Title tab here */}
      <title>Nusea | Market</title>

      {/* Banner Header */}
      <header>
        <MarketBanner />
      </header>

      <main>

        {/* TODO : isi content dari carousel card */}
        <div className='productCarousel'>
        </div>

        {/* this is separator */}
        <h1 className="titleSection">Produk Unggulan</h1>

        {/* TODO : Create list, use grid untuk semua product  */}
        <div className='productGrid'>
          {productsUnggulan.map((product) => (
            <ProductsCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* this is separator */}
        <h1 className="titleSection">Keunggulan Kami</h1>

        {/* TODO : Create grid for keunggulan kami */}
        <div className='keunggulanGrid'>
          <div className='keunggulanCard'>
            <img src={ExportIcon} alt='icon' />
            <div>
              <h2>Kualitas Ekspor</h2>
              <p>Produk berkualitas tingggi dengan sertifikasi internasional</p>
            </div>
          </div>
          <div className='keunggulanCard'>
            <img src={FreshIcon} alt='icon' />
            <div>
              <h2>Dikirim Segar</h2>
              <p>Pengiriman cepat dengan kemasan pendingin agar segar</p>
            </div>
          </div>
          <div className='keunggulanCard'>
            <img src={SatisfactionIcon} alt='icon' />
            <div>
              <h2>Jaminan Kepuasan</h2>
              <p>Garansi produk aman dan sesuai pesanan</p>
            </div>
          </div>
        </div>

        {/* this is separator */}
        <div className="produkSectionTitleContainer">
          <h1 className="titleSection">List Produk</h1>
          <button className='seeAllButton' onClick={() => navigate("/products")}>View All &gt;</button>
        </div>

        {/* TODO : Create list, use grid untuk semua product  */}
        <div className='productGrid'>
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

      </main>
    </div>
  );
};

export default App;
