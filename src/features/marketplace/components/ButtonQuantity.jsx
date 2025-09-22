import { useState } from "react";
import "./component.css";

function ButtonQuantity() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="ButtonQuantity">
      <button onClick={handleDecrease}>−</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default ButtonQuantity;