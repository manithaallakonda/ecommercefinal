import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">📝 Description</div>
        <div className="descriptionbox-nav-box fade">⭐ Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          ✨ Welcome to the future of online shopping! Our platform isn’t just an eCommerce website — it’s your personal gateway to a seamless and enjoyable shopping experience. Whether you're browsing at midnight or on a coffee break, your next great find is just a click away.
        </p>

        <p>
          🛍️ We bring you a carefully curated selection of products with detailed descriptions, high-resolution images, and live pricing updates. Explore a variety of sizes, colors, and styles tailored just for you — all on one dynamic, responsive page.
        </p>

        <p>
          🌍 From global brands to hidden gems, our marketplace connects you with trusted sellers and exclusive deals you won’t find elsewhere. With easy checkout, fast shipping, and secure payment options, you can shop confidently from anywhere in the world.
        </p>

        <p>
          💬 Got questions or feedback? Dive into our reviews section to hear from real customers — or leave your own insights to help the community!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
