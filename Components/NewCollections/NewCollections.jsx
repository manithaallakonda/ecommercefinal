import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = ({ data }) => {
  return (
    <section className='new-collections'>
      <div className="collections-header">
        <h1>🔥 New Arrivals for You</h1>
        <p>Discover fresh styles hand-picked for trendsetters like you.</p>
        <hr />
      </div>
      <div className="collections">
        {data.map((item, index) => (
          <div className="collection-item-wrapper" key={index}>
            {/* Optional badge */}
            {index < 3 && <span className="badge-new">NEW</span>}
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCollections;
