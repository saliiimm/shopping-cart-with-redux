import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;
