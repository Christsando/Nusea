import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavbarLogin";
import ArticleCard from "../components/ArticleCard";
import { allArticle } from "../datas/DataArticle";

function ArticleSaved({ savedArticle }) {
    const savedArticles = allArticle.filter((article) => savedArticle.includes(article.id));

    return (
        <div>
            <Navbar />
            <div className="max-w-8xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-12 mt-20 text-center">Artikel Tersimpan</h1>

                {savedArticles.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
                        {savedArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <p>Anda belum menyimpan artikel apa pun.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ArticleSaved;
