import React from "react";


function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">
      <h2>Flipkart</h2>
      <span className="explore">Explore <b>Plus</b></span>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search for products, brands and more" />
      <button onclick="search()">🔍</button>
    </div>
    <div className="nav-links">
    <button class="login-btn" onclick="login()">Login</button>
      <button onclick="becomeSeller()">Become a Seller</button>
      <button onclick="showMore()">More</button>
      <button onclick="viewCart()">Cart</button>
    </div>
    <div className="categories">
    <a href="#">Electronics</a>
    <a href="#">TVs & Appliances</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Baby & Kids</a>
    <a href="#">Home & Furniture</a>
    <a href="#">Sports, Books & More</a>
    <a href="#">Flights</a>
    <a href="#">Offer Zone</a>
    </div>
  </div>
  );
}

export default Navbar;
