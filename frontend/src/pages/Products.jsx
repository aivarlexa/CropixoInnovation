import React from "react";
import "./Products.css";

import product1 from "../assets/products/product.png";

const product = {
  id: 1,
  name: "Cropixo Vigora X",
  npk: "13:12:18",
  technology: "100% PGP Technology",
  category: "Water Soluble Fertilizer",
  weight: "500 gm",
  description:
    "Premium water soluble fertilizer designed to improve nutrient absorption, enhance plant growth, and increase crop yield.",
  image: product1,
};

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="page-title">Our Products</h1>

      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>

          <span className="npk-badge">NPK {product.npk}</span>

          <p className="description">{product.description}</p>

          <div className="specifications">
            <div>
              <strong>Technology:</strong> {product.technology}
            </div>

            <div>
              <strong>Category:</strong> {product.category}
            </div>

            <div>
              <strong>Weight:</strong> {product.weight}
            </div>
          </div>

          <ul className="features">
            <li>✔ 100% Water Soluble</li>
            <li>✔ Suitable for Drip Irrigation</li>
            <li>✔ Foliar Spray Compatible</li>
            <li>✔ Improves Crop Yield</li>
            <li>✔ Faster Nutrient Absorption</li>
          </ul>

          <div className="buttons">
            <button className="buy-btn">Buy Now</button>

            <button className="enquiry-btn">Enquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;