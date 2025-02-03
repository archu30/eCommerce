import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products ,onClick}) => {
  return (
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onClick}/>
      ))}
    </div>
  );
};

export default ProductGrid;