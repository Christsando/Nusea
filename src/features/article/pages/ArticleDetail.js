import Navbar from "../../../components/NavbarLogin";
import ArticleMeta from "../components/ArticleMeta";
import CommentSection from "../components/CommentSection";
import CommentButton from "../components/CommentButton";
import { useState, useRef } from "react";
import { allArticle } from "../datas/DataArticle";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";

const commentsData = [
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
    { name: "Hasan", location: "Nelayan, Sulawesi Selatan", comment: "Saya biasanya jual ikan ke tengkulak, jadi belum pernah coba ekspor. Kalau mau menjaga kualitas ikan gimana ya caranya biar bertahan dengan es balok biasa di kapal?" },
];

function ArticleDetail({ savedArticle, toggleBookmark }) {
    const linkRef = useRef(null);
    const { articleId } = useParams();
    const article = allArticle.find((art) => art.id.toString() === articleId);
    const [comments, setComments] = useState(commentsData);

    const handleAddComment = (newComment) => {
        setComments([newComment, ...comments]);
    };

    const goto = () => {
        linkRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <section className="container mx-auto px-40 py-10 mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="w-full h-96 flex justify-center items-center overflow-hidden">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <ArticleMeta date={article.date} category={article.category} onClickComment={goto} article={article.id} savedArticle={savedArticle} toggleBookmark={toggleBookmark} />
                </div>
            </section>
            <section className="bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <article className="prose prose-lg max-w-none py-12">
                        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 text-center">{article.title}</h1>
                        <div className="font-medium text-m px-14" dangerouslySetInnerHTML={{ __html: article.content }} />
                    </article>
                </div>
            </section>
            <section className="max-w-6xl mx-auto scroll-m-16" ref={linkRef}>
                <CommentSection comments={comments} onAddComment={handleAddComment} />
            </section>
            <CommentButton onClick={goto} />
            <Footer />
        </div>
    );
}

export default ArticleDetail;
