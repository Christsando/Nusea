import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../../../components/NavbarLogin";
import { latestArticle, recentArticle } from "../datas/DataArticle";

const category = ["Perikanan", "Ekspor & Pasar Global", "Inovasi Nelayan", "Pengalaman Nelayan"];

function Article() {
    const [activeCategory, setActiveCategory] = useState("Perikanan");
    const filteredCategory = latestArticle.filter((article) => article.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-40 py-16 md:py-20 mt-10">
                <section className="text-center mb-12 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 leading-tight">Dari Laut Nusantara ke Pasar Dunia, Dimulai dari Pengetahuan.</h1>
                    <p className="text-gray-800 font-semibold">Artikel, panduan, dan edukasi praktis untuk nelayan Indonesia menuju pasar global yang berkelanjutan.</p>
                </section>

                <section className="mb-12 flex">
                    <ArticleCard article={recentArticle} isFeatured={true} />
                </section>

                <section className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-8">Artikel Terbaru</h2>
                    <div className="flex flex-wrap justify-start md:justify-end gap-2 md:gap-4 mb-8">
                        {category.map((i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(i)}
                                className={`px-4 py-2 rounded-md font-bold text-sm md:text-base transition-colors duration-300 ${activeCategory === i ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
                            >
                                {i}
                            </button>
                        ))}
                    </div>
                </section>
                <hr className="mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredCategory.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Article;
