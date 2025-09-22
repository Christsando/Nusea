import "./component.css";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ id, name, price, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="productCard" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="productDetailsContainer">
                <div className="product-name">
                    <h3>{name}</h3>
                </div>

                <div className="priceAndButtonContainer">
                    <p className="product-price">{price}</p>
                    <a className="plusButton">
                        <Plus size={12} className="iconPlus" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;