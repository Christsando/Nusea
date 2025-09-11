import './App.css';
import ProductsCard from '../components/ProductsCard';
import MarketBanner from '../components/MarketBanner';


function App() {
  return (
    <div className="App">

      {/* Title tab here */}
      <title>Nusea | Market</title>
      
      {/* Banner Header */}
      <header className='marketHeader'>
        <MarketBanner />
      </header>
      
      <main className='contentContainer'>

        {/* TODO : isi content dari carousel card */}
        <div className='productCarousel'>
        </div>

        {/* TODO : Create list, use grid untuk semua product  */}
        <div className='productGrid'>
          <ProductsCard
          // TODO : ganti dengan data dari API
            name="Udang"
            price="Rp120.000/Kg"
            image="https://upload.wikimedia.org/wikipedia/commons/0/05/Shrimp_on_white_background.jpg"/>
        </div>
      
      </main>
    </div>
  );
};

export default App;
