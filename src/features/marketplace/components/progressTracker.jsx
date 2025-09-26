// ProgressTracker.jsx
import React from "react";
import "./style/progressTracker.css";
import { Check, Package, Truck, FileText, Pencil } from "lucide-react";

const ProgressTracker = () => {
  const steps = [
    { label: "Order Create", icon: <Pencil size={24} color="#ff5722" /> },
    { label: "Picked Up", icon: <FileText size={24} color="#ff5722" /> },
    { label: "Shorting", icon: <Package size={24} color="#ff5722" /> },
    { label: "Courier Delivery", icon: <Truck size={24} color="#ff5722" /> },
    { label: "Delivered", icon: <Check size={24} color="#ff5722" /> },
  ];

  return (
    <div className="progressContainer">
      {steps.map((step, index) => (
        <div className="progressStep" key={index}>
          <div className="circleWrapper">
            {step.icon}
          </div>
          <p className="stepLabel">{step.label}</p>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;