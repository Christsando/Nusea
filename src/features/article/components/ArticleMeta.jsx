import Tag from "../../../assets/images/article/Tag.svg";
import Calender from "../../../assets/images/article/Calendar.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function ArticleMeta({ date, category, onClickComment, article, savedArticle, toggleBookmark }) {
    const isBookmarked = savedArticle.includes(article);

    return (
        <div className="flex justify-between mt-8">
            <div className="flex item-center gap-16 text-sm">
                <span className="flex items-center text-gray-500">
                    <img src={Calender} alt="date icon" className="h-4 w-4 mr-1.5" /> {date}
                </span>
                <span className="flex items-center font-semibold">
                    <img src={Tag} alt="date icon" className="h-4 w-4 mr-1.5" /> {category}
                </span>
            </div>
            <div className="meta-right flex ">
                <div onClick={() => toggleBookmark(article)} className="cursor-pointer">
                    {isBookmarked ? (
                        <FaBookmark className="h-6 w-6 mr-1.5"/>
                        // <img src={Save} alt="date icon" className="h-6 w-6 mr-1.5" />
                    ) : (
                        <FaRegBookmark className="hover:text-blue-500 h-6 w-6 mr-1.5" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArticleMeta;
