import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { backend_url } from "../../App";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const AddProduct = async () => {
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    try {
      const uploadRes = await fetch(`${backend_url}/upload`, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const uploadData = await uploadRes.json();
      if (uploadData.success) {
        product.image = uploadData.image_url;

        const saveRes = await fetch(`${backend_url}/addproduct`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        });

        const saveData = await saveRes.json();
        alert(saveData.success ? "✅ Product Added!" : "❌ Failed to Add Product");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="addproduct">
      <h2 className="form-title">Add New Product</h2>

      <div className="addproduct-grid">

        <div className="addproduct-form-group">
          <label className="addproduct-label">Product Title</label>
          <input
            type="text"
            name="name"
            className="addproduct-input"
            placeholder="Enter product name"
            value={productDetails.name}
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-form-group">
          <label className="addproduct-label">Product Description</label>
          <input
            type="text"
            name="description"
            className="addproduct-input"
            placeholder="Enter product description"
            value={productDetails.description}
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-form-group">
          <label className="addproduct-label">Original Price</label>
          <input
            type="number"
            name="old_price"
            className="addproduct-input"
            placeholder="e.g. 999"
            value={productDetails.old_price}
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-form-group">
          <label className="addproduct-label">Offer Price</label>
          <input
            type="number"
            name="new_price"
            className="addproduct-input"
            placeholder="e.g. 799"
            value={productDetails.new_price}
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-form-group">
          <label className="addproduct-label">Category</label>
          <select
            name="category"
            className="addproduct-select"
            value={productDetails.category}
            onChange={changeHandler}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="addproduct-form-group">
          <label className="addproduct-label">Upload Product Image</label>
          <label htmlFor="file-input" className="addproduct-thumbnail">
            <img
              className="addproduct-thumbnail-img"
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="upload thumbnail"
            />
            <span className="addproduct-upload-btn">Upload</span>
          </label>
          <input
            type="file"
            id="file-input"
            name="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

      </div>

      <div className="submit-section">
        <button className="addproduct-btn" onClick={AddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
