import React from 'react';
import './Product.css';
const Product = ({ product }) => {
  const productStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    padding: '20px',
  };

  return (
    <div className="product-card" style={productStyle}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <span>{product.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
