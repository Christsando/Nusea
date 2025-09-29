import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Market from "./features/marketplace/pages/Market";
import Subscription from "./features/subscription/Subscription";
import Article from "./features/article/pages/Article";
import ArticleDetail from "./features/article/pages/ArticleDetail";
import EduPage from "./features/article/pages/EduPage";
import EduCourse from "./features/article/pages/EduCourse";
import ArticleSaved from "./features/article/pages/ArticleSaved";

function App() {
    const [savedArticle, setSavedArticle] = useState([1]);

    const toggleBookmark = (articleId) => {
        setSavedArticle((prevIds) => {
            if (prevIds.includes(articleId)) {
                return prevIds.filter((id) => id !== articleId);
            } else {
                return [...prevIds, articleId];
            }
        });
    };
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/market" element={<Market />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:articleId" element={<ArticleDetail savedArticle={savedArticle} toggleBookmark={toggleBookmark} />} />
                <Route path="/saved-article" element={<ArticleSaved savedArticle={savedArticle}/>} />
                <Route path="/edupage" element={<EduPage />} />
                <Route path="/educourse/:courseId" element={<EduCourse />} />
            </Routes>
        </Router>
    );
}

export default App;
