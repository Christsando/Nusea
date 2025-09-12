import bannerImg from '../../../assets/images/market-banner.png'

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.7)), url(${bannerImg})` }}
    >
        <div className="bg-black bg-opacity-20 w-full h-full flex flex-col items-center justify-end">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            SEAFOOD SEGAR <br /><br /> DARI INDONESIA MENUJU DUNIA
          </h1>
        </div>
        <div className="px-60 bg-black bg-opacity-20 w-full h-full flex flex-col items-start justify-center">
          <button className="mt-10 px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600">
            Pelajari Selengkapnya
          </button>
        </div>
        
    </section>
  );
}
