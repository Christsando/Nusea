import bannerImg from '../../../assets/images/market-banner.png'

export default function Hero() {
  return (
    <section id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.7)), url(${bannerImg})` }}
    >
        <div className="bg-black bg-opacity-10 w-full h-full flex flex-col items-center justify-end">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            SEAFOOD SEGAR <br /><br /> DARI INDONESIA MENUJU DUNIA
          </h1>
        </div>
        <div className="px-20 md:px-10 lg:px-60 bg-black bg-opacity-10 w-full h-screen flex flex-col md:items-center lg:items-start justify-center">
          <a className="mt-10 px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 cursor-pointer">
            Pelajari Selengkapnya
          </a>
        </div>
        
    </section>
  );
}
