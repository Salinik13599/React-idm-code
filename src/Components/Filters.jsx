import React from "react";

function Filters() {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div>
        <h4>Categories</h4>
        <p>Mobiles & Accessories</p>
        <p>Mobiles</p>
      </div>
      <div>
        <h4>Price</h4>
        <input type="range" min="0" max="30000" />
        <div>
          <input type="text" placeholder="Min" />
          <input type="text" placeholder="Max" />
        </div>
      </div>
      <div>
        <h4>Brand</h4>
          <input type="checkbox" /> Apple 
          
<label>
          <input type="checkbox" /> Assured
        </label>
      </div>
      <div>
        <h4>Customer Ratings</h4>
        <p>4★ & above</p>
      </div>
      <div>
        <h4>GST Invoice Available</h4>
        <p>Yes</p>
      </div>
    </div>
  );
}

export default Filters;
