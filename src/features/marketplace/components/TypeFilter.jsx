import "./style/component.css";

const TypeFilter = ({ type, isActive, onClick }) => {
    const categories = [
        "Cumi-Cumi",
        "Ikan",
        "Udang",
        "Kepiting",
        "Kerang",
        "Lobster"
    ];

    return (
        <div className="filterContainer">
            <div className="sectionContainer">
                <p>Category</p>
            </div>
            <div className="typeFilterContainer">
                <ul class="categoryList">
                    {categories.map((category, index) => (
                        <li key={index}>
                            {category} <i className="fas fa-chevron-down"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TypeFilter;