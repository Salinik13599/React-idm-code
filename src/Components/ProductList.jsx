import React from "react";


const products = [
  {
    logo:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70",
    name: "Apple iPhone 15 (Black, 128 GB)",
    price: "₹58,249",
    originalPrice: "₹69,900",
    discount: "16% off",
    features: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A16 Bionic Chip, 6 Core Processor",
    ],
    badge: "Bestseller",
    rating: "4.6",
    reviews: "2,17,502 Ratings & 7,700 Reviews",
  },
  {
    name: "Apple iPhone 15 (Pink, 128 GB)",
    price: "₹58,249",
    originalPrice: "₹69,900",
    discount: "16% off",
    features: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A16 Bionic Chip, 6 Core Processor",
    ],
    badge: "Bestseller",
    rating: "4.6",
    reviews: "2,17,502 Ratings & 7,700 Reviews",
  },
];

function ProductList() {
  return (
    <div className="product-list">
      <h3>Showing 1–2 of 8,753 results for "mobile 5g"</h3>
      <div className="sort-options">
        <span>Sort By:</span>
        <button>Relevance</button>
        <button>Popularity</button>
        <button>Price -- Low to High</button>
        <button>Price -- High to Low</button>
        <button>Newest First</button>
      </div>
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <div>
            <img src={product.logo} alt="" />
          </div>
          <div className="product-badge">{product.badge}</div>
          <h4>{product.name}</h4>
          <p>{product.features.join(", ")}</p>
          <p>
            <strong>{product.price}</strong> <s>{product.originalPrice}</s> {product.discount}
          </p>
          <p>Rating: {product.rating} | {product.reviews}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
