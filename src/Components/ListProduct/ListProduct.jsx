import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import { backend_url } from "../../App";
import { MdDelete } from "react-icons/md";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${backend_url}/allproducts`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backend_url}/deleteproduct/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        setAllProducts(allProducts.filter(product => product._id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="listproduct">
      <h2>Product Management</h2>
      <div className="listproduct-format-main">
        <p>Image</p>
        <p>Name</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Delete</p>
      </div>

      <div className="listproduct-allproducts">
        {allProducts.map((product) => (
          <div className="listproduct-format" key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              className="listproduct-product-icon"
            />
            <p>{product.name}</p>
            <p>₹{product.old_price}</p>
            <p>₹{product.new_price}</p>
            <p>{product.category}</p>
            <MdDelete
              className="listproduct-remove-icon"
              onClick={() => handleDelete(product._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
