import "./style/component.css";

const TypeFilter = ({ activeCategory, onCategorySelect }) => {
    const categories = [
        "Cumi-Cumi",
        "Ikan",
        "Udang",
        "Kepiting",
        "Kerang",
        "Lobster"
    ];

    const handleSelect = (category) => {
        // kalau klik ulang kategori yang sama → hapus filter
        if (activeCategory === category) {
            onCategorySelect(null);
        } else {
            onCategorySelect(category);
        }
    };

    return (
        <div className="filterContainer">
            <div className="sectionContainer">
                <p>Category</p>
            </div>
            <div className="typeFilterContainer">
                <ul className="categoryList">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={activeCategory === category ? "active" : ""}
                            onClick={() => handleSelect(category)}
                        >
                            {category} <i className="fas fa-chevron-down"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TypeFilter;
