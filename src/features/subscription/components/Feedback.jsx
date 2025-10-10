
import user1 from "../../../assets/images/nelayan1.png"; 
import user2 from "../../../assets/images/nelayan2.png"; 
import user3 from "../../../assets/images/nelayan3.png"; 

const testimonials = [
  {
    id: 1,
    name: "Jonathan Hidayat",
    text: "Saya menyukai berbelanja seafood dan olahan seafood disini, semoga Nusea kedepannya dapat terus berkembang",
    rating: 4,
    img: user1,
    bg: "bg-blue-600 text-white",
  },
  {
    id: 2,
    name: "Syaifurrahman",
    text: "Saya seorang nelayan, merasa terbantu sekali dalam menjual hasil tangkapan saya",
    rating: 5,
    img: user2,
    bg: "bg-blue-200",
  },
  {
    id: 3,
    name: "Arabica",
    text: "Thanks Nusea, i hope Nusea can continue to develop and have a big impact",
    rating: 5,
    img: user3,
    bg: "bg-blue-200",
  },
  {
    id: 3,
    name: "Adit",
    text: "Thanks Nusea, i hope Nusea can continue to develop and have a big impact",
    rating: 5,
    img: user1,
    bg: "bg-blue-200",
  },
  {
    id: 3,
    name: "Denis",
    text: "Thanks Nusea, i hope Nusea can continue to develop and have a big impact",
    rating: 5,
    img: user2,
    bg: "bg-blue-200",
  },
];

const Feedback = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-10">
          Apa Kata Mereka?
        </h2>

        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 gap-12">
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-[80%] md:min-w-[45%] lg:min-w-[30%] snap-center text-white font-semibold p-6 mb-10 rounded-lg shadow-md bg-[#8FB2E6] hover:bg-blue-600 duration-200">

              <div className="flex mb-4 text-yellow-400">
                {Array.from({ length: item.rating }).map((i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((i) => (
                  <span key={i}>☆</span>
                ))}
              </div>

              <p className="mb-6 leading-relaxed">{item.text}</p>

              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-white object-cover"/>
                <h4 className="font-bold">{item.name}</h4>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;