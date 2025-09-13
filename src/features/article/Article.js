// import "./Article.css";
import ImageArticle from "../../assets/article-main.png";
import ImageCard1 from "../../assets/articleCard1.png"
import ImageCard2 from "../../assets/articleCard2.png"
import ImageCard3 from "../../assets/articleCard3.png"
import ImageCard4 from "../../assets/articleCard4.png"
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Navbar from "../../components/Navbar";

const category = ["Perikanan", "Ekspor & Pasar Global", "Inovasi Nelayan", "Pengalaman Nelayan"];

const recentArticle = { title: "Belajar Perikanan berkelanjutan & Akses Pasar Global", date: "Jan 24, 2024", category: "Ekspor & Pasar Global", imageUrl: ImageArticle };

const latestArticle = [
    {
        id: 1,
        title: "Tips membangun kepercayaan konsumen global",
        date: "Jan 24, 2024",
        category: "Ekspor & Pasar Global",
        imageUrl: ImageCard1,
    },
    {
        id: 2,
        title: "Teknik tangkap ramah lingkungan",
        date: "Jan 24, 2024",
        category: "Inovasi Nelayan",
        imageUrl: ImageCard2,
    },
    {
        id: 3,
        title: "Strategi usaha hasil laut",
        date: "Jan 24, 2024",
        category: "Pengalaman Nelayan",
        imageUrl: ImageCard3,
    },
    {
        id: 4,
        title: "Teknik pengawetan & logistik modern",
        date: "Jan 24, 2024",
        category: "Inovasi Nelayan",
        imageUrl: ImageCard4,
    },
];

function Article() {
    const [activeCategory, setActiveCategory] = useState("Perikanan");

    return (
        <div className="bg-gray-50 min-h-screen font-sans ">
            <Navbar />
            <div className="main-content container mx-auto px-4 py-12 md:py-16">
                <section className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 leading-tight">Dari Laut Nusantara ke Pasar Dunia, Dimulai dari Pengetahuan.</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Artikel, panduan, dan edukasi praktis untuk nelayan Indonesia menuju pasar global yang berkelanjutan.</p>
                </section>

                <section className="mb-12 md:mb-16">
                    <ArticleCard article={recentArticle} isFeatured={true}/>
                </section>

                <section className="header-category flex justify-between">
                    <h2 className="text-3xl font-bold text-blue-600 mb-8">Artikel Terbaru</h2>
                    <div className="category-button flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                        {category.map((i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(i)}
                                className={`px-4 py-2 rounded-md font-semibold text-sm md:text-base transition-colors duration-300 ${
                                    activeCategory === i ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-black-500 hover:bg-blue-50"
                                }`}
                            >
                                {i}
                            </button>
                        ))}
                    </div>
                </section>
                <hr />

                <div className="article-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {latestArticle.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Article;
