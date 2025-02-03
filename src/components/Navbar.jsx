import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { Link } from 'react-router-dom'; // Correct import for Link
import AuthButton from './AuthButton';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext); // Access cart state

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div><h1>E-Commerce App</h1></div>
      <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
      <Link to="/cart">Cart ({cart.length})</Link> 
      <AuthButton />
      </div>
       

    </div>
  );
};

export default Navbar;