import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

const Item = (props) => {
  return (
    <div className="item-card">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image-container">
          <img
            className="item-image"
            src={backend_url + props.image}
            alt={props.name}
          />
        </div>
      </Link>
      <p className="item-title">{props.name}</p>
      <div className="item-prices">
        <span className="item-price-new">{currency}{props.new_price}</span>
        <span className="item-price-old">{currency}{props.old_price}</span>
      </div>
    </div>
  );
};

export default Item;
