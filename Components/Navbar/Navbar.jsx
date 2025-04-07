import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    menuRef.current.classList.toggle('nav-menu-visible');
    dropdownRef.current.classList.toggle('open');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  return (
    <div className='nav'>
      <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="Trendora " />
        <p>Trendora</p>
      </Link>

      {/* Mobile Dropdown Toggle */}
      <img
        ref={dropdownRef}
        onClick={toggleDropdown}
        className='nav-dropdown'
        src={nav_dropdown}
        alt="menu toggle"
      />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link to='/about'>About</Link>
          {menu === "about" && <hr />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link to='/contact'>Contact</Link>
          {menu === "contact" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
