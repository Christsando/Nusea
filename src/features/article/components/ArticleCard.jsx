import { useNavigate } from "react-router-dom";
import Tag from "../../../assets/images/article/Tag.svg";
import Calender from "../../../assets/images/article/Calendar.svg";

function ArticleCard({ article, isFeatured = false }) {
    const cardContainer = `bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isFeatured ? "md:flex" : ""}`;

    const navigate = useNavigate();
    function navigateArticle() {
        
        navigate(`/article/${article.id}`);
    }

    return (
        <div className={cardContainer}>
            <div className={isFeatured ? "md:w-1/2" : ""}>
                <img src={article.imageUrl} alt="article-main" className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className={isFeatured ? "md:w-1/2 p-6 md:p-8 flex flex-col justify-center" : " p-8 "}>
                <div className="flex items-center gap-16 text-sm mb-4">
                    <span className="flex items-center text-gray-500"> <img src={Calender} alt="date icon" className="h-4 w-4 mr-1.5" /> {article.date}</span>
                    <span className="flex items-center font-semibold"> <img src={Tag} alt="date icon" className="h-4 w-4 mr-1.5" /> {article.category}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">{article.title}</h3>
                <a onClick={navigateArticle} className="card-link text-gray-500 font-semibold cursor-pointer">
                    Baca →
                </a>
            </div>
        </div>
    );
}

export default ArticleCard;
