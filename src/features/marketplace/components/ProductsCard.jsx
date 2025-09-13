import "./component.css";
import { Plus } from "lucide-react";

const ProductsCard = ({ name, price, image }) => {
    return (
        <div className="productCard">
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