import React ,{ useContext, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar'
import Cart from './pages/Cart';
import { AuthProvider } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';
import './App.css'
import './index.css'

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  // Add/remove dark-mode class to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;