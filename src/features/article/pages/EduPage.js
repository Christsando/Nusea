import Navbar from "../../../components/NavbarLogin";
import icon1 from "../../../assets/images/article/Circle Avatar.png";
import icon2 from "../../../assets/images/article/Circle Avatar1.png";
import icon3 from "../../../assets/images/article/Circle Avatar2.png";
import icon4 from "../../../assets/images/article/Circle Avatar3.png";
import { useNavigate } from "react-router-dom";
import { courseData } from "../datas/DataEdu";
import Footer from "../../../components/Footer";

const educateData = [
    { icon: icon1, title: "Ekspor & Pasar Global", caption: "Belajar langkah demi langkah untuk menembus pasar internasional" },
    { icon: icon2, title: "Inovasi & Teknologi Nelayan", caption: "Belajar langkah demi langkah untuk menembus pasar internasional" },
    { icon: icon3, title: "Perikanan Berkelanjutan", caption: "Belajar langkah demi langkah untuk menembus pasar internasional" },
    { icon: icon4, title: "Kesejahteraan & Usaha Nelayan", caption: "Belajar langkah demi langkah untuk menembus pasar internasional" },
];

function EduPage() {
    const navigate = useNavigate();
    function navigateCourse(courseId) {
        navigate(`/educourse/${courseId}`);
    }

    return (
        <div className="bg-white text-gray-800 h-full">
            <Navbar />
            <main className="mt-10">
                <section className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl font-extrabold text-blue-600 mb-10">Nuseaducation</h1>
                        <div className="flex flex-wrap justify-center items-start gap-12">
                            {educateData.map((educate, index) => (
                                <div key={index} className="flex flex-col items-center w-3/12">
                                    <img src={educate.icon} className="mb-5" />
                                    <h1 className="text-m font-semibold text-blue-600 mb-2">{educate.title}</h1>
                                    <p className="text-sm text-gray-500 leading-relaxed">{educate.caption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h1 className="text-4xl font-extrabold text-blue-600 mb-5">Belajar Bersama Nusea: Dari Nelayan Lokal Ke Pasar Global</h1>
                        <p className="text-sm text-gray-600 mb-10">Temukan kelas singkat dan modul praktis ntuk meningkatkan pengetahuan tentang perikanan berkelanjutan ekspor, dan usaha nelayan.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {courseData.map((course) => (
                            <div
                                key={course.id}
                                className="relative rounded-xl overflow-hidden shadow-lg w-[30%] max-w-sm
                                min-h-[450px] bg-cover bg-center flex flex-col justify-end text-left p-6 group hover:-translate-y-2 transition-transform duration-300"
                                style={{ backgroundImage: `url(${course.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                                <div className="relative z-10 text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                                    <p className="text-sm mb-4 opacity-90 text-gray-200">{course.description}</p>
                                    <button onClick={() => navigateCourse(course.id)} className="bg-orange-500 text-white font-semibold py-2 px-5 rounded-md inline-block group-hover:bg-orange-600 transition-colors cursor-pointer">
                                        Pelajari ➔
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default EduPage;
