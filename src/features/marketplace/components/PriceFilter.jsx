import "./component.css";

const PriceFilter = ({ type, isActive, onClick }) => {
    const priceRanges = [
        { id: "p1", label: "Rp20.000 - Rp50.000" },
        { id: "p2", label: "Rp50.000 - Rp100.000" },
        { id: "p3", label: "Rp100.000 - Rp200.000" },
        { id: "p4", label: "Rp200.000+" }
    ];

    return (
        <div className="filterContainer">
            <div className="sectionContainer">
                <p>Price Range</p>
            </div>
            <div className="typeFilterContainer">
                {priceRanges.map((range) => (
                    <div key={range.id} className="priceFilterItem">
                        <input type="checkbox" id={range.id} />
                        <label htmlFor={range.id}>{range.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceFilter;