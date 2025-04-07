import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      {/* LEFT SIDE IMAGES */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src={backend_url + product.image}
              alt={`thumbnail-${index}`}
            />
          ))}
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={backend_url + product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        {/* RATING STARS */}
        <div className="productdisplay-right-stars">
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star dull" />
          <p>(122 Reviews)</p>
        </div>

        {/* PRICES */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {currency}
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {currency}
            {product.new_price}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="productdisplay-right-description">
          <p>📝 {product.description}</p>
        </div>

        {/* SIZE SELECTOR */}
        <div className="productdisplay-right-size">
          <h1>👕 Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button onClick={() => addToCart(product.id)}>🛒 Add to Cart</button>

        {/* CATEGORY & TAGS */}
        <p className="productdisplay-right-category">
          <span>📦 Category :</span> Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>🏷️ Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
