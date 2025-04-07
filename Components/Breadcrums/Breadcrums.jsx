import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
  const paths = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: product.category, link: `/category/${product.category}` },
    { name: product.name, link: '#' }
  ];

  return (
    <nav className="breadcrums" aria-label="breadcrumb">
      <ol>
        {paths.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <a href={item.link}>{item.name}</a>
            {index !== paths.length - 1 && <img src={arrow_icon} alt=">" />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrums;
