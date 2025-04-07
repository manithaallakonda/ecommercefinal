import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
import { Route, Routes, Navigate } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Navigate to="/addproduct" />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
