import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from "./features/auth/pages/pages/Register";
import Login from "./features/auth/pages/pages/Login";
import Market from "./features/marketplace/pages/Market";
import Home from "./features/subscription/pages/Home"
import NelayanHome from "./features/subscription/pages/NelayanHome"
import Detail from "./features/marketplace/pages/Detail";
import Products from "./features/marketplace/pages/Products";
import Cart from "./features/marketplace/pages/Cart";

import Subscription from "./features/subscription/pages/Subscription";
import SubscriptionPayment from "./features/subscription/pages/Payment";
import Article from "./features/article/pages/Article";
import ArticleDetail from "./features/article/pages/ArticleDetail";
import EduPage from "./features/article/pages/EduPage";
import EduCourse from "./features/article/pages/EduCourse";
import ArticleSaved from "./features/article/pages/ArticleSaved";

import Payment from "./features/marketplace/pages/Payment";
import Status from "./features/marketplace/pages/Status";
import History from "./features/marketplace/pages/History";


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

                <Route path="/" element={<Home />} />
                <Route path="/nelayan-home" element={<NelayanHome />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/subscription/payment" element={<SubscriptionPayment />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/products" element={<Products />} />
                <Route path="/market" element={<Market />} />
                <Route path="/market/cart" element={<Cart />} />
                <Route path="/market/cart/payment" element={<Payment />} />
                <Route path="/status" element={<Status />} />
                <Route path="/market/history" element={<History />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:articleId" element={<ArticleDetail savedArticle={savedArticle} toggleBookmark={toggleBookmark} />} />
                <Route path="/saved-article" element={<ArticleSaved savedArticle={savedArticle} />} />
                <Route path="/edupage" element={<EduPage />} />
                <Route path="/educourse/:courseId" element={<EduCourse />} />
            </Routes>
        </Router>
    );
}

export default App;
