import "./component.css";
import { Plus } from "lucide-react";

const ProductsCard = ({ name, price, image }) => {
  return (
    <div className="productCard hover:shadow-lg transition">
        <img 
            src={image} 
            alt={name} 
            className="product-image" 
        />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <div className="flex justify-end mt-2">
            <button className="p-2 rounded-full hover:bg-gray-200">
                <Plus size={18} />
            </button>
        </div>
    </div>
  );
};

export default ProductsCard;