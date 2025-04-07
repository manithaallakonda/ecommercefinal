import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className='navpanel'>
      <h2 className="navpanel-title">ShopControl</h2>

      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className={`navlink ${location.pathname === '/addproduct' ? 'active' : ''}`}>
          <FaPlusCircle className="navlink-icon" />
          <span className="navlink-text">Add Product</span>
        </div>
      </Link>

      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className={`navlink ${location.pathname === '/listproduct' ? 'active' : ''}`}>
          <FaListAlt className="navlink-icon" />
          <span className="navlink-text">Product List</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
