import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    if (onClick) {
      onClick(product); // Call the onClick function with the product
    }
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p>{product.category}</p>
      <div className='cart-btn'>
      <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
        Add to Cart
      </button>
      </div>
  
    </div>
  );
};

export default ProductCard;