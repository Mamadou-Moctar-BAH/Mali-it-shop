// Library
import React from "react";
// Css External
import "./Products.css";

// Products List
const products = [
  {
    title: "MacBook Air M2 Silver",
    description:
      "This exclusive mockup set features a pair of Apple MacBook Air M2 laptops in sleek silver finish. With a half side view, the devices' thin design and vibrant display are highlighted, making it the perfect showcase for any computer or laptop-related project.",
    imageName: "MacBook.png", // Image name in Assets/Images folder
  },
  {
    title: "Hp Color Laserjet Pro Mfp M479Dw",
    description:
      "A solution designed to keep you and your business moving forward Modern businesses are always on the move, always connected. Choose a high-performance multifunction printer that adapts to the pace of your work and collaboration.",
    imageName: "Printer.png",
  },
  {
    title: "Hikvision 5 MP kit 8ch ",
    description:
      "Hikvision, the world's leading supplier of innovative video surveillance products and solutions is further advancing surveillance camera technology.",
    imageName: "Hikvision.png",
  },
  {
    title: "Starlink Satellite Internet Service",
    description:
      "Getting high-speed Internet to rural and remote areas is tricky at best. Starlink, SpaceX's satellite service, is out to change that. It provides data speeds between 100 Mb/s and 200 Mb/s and latency as low as 20ms in most locations, and those numbers are expected to improve in the future. ",
    imageName: "Starlink.png",
  },
];

const Products = () => {
  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product, index) => {
          // Load image locally from Images folder
          const imageSrc = require(`./Assets/Images/${product.imageName}`);

          return (
            <div className="product-card" key={index}>
              <img
                src={imageSrc}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
