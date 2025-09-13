function ArticleCard( {article, isFeatured=false} ) {
    const cardContainer = `bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isFeatured ? "md:flex" : ""}`

    return (
        <div className={cardContainer}>
            <div className={isFeatured ? "md:w-1/2" : ""}>
                <img src={article.imageUrl} alt="article-main" className="w-full h-48 md:h-full object-cover"/>
            </div>
            <div className="card-content m:-1/2 p-6 md:p-8 content-center">
                <div className="card-meta flex space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">{article.date}</span>
                    <span className="flex items-center">{article.category}</span>
                </div>
                <h3 className="card-title text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">{article.title}</h3>
                <a href="#" className="card-link text-black-500 font-semibold">
                    Baca →
                </a>
            </div>
        </div>
    );
}

export default ArticleCard;
