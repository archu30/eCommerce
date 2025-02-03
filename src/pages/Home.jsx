import React, { useState, useEffect, useContext } from 'react';
import { fetchProducts, fetchCategories } from '../utils/api';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
    fetchCategories().then((data) => setCategories(data));
  }, []);

  const handleCategorySelect = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="app-container home-sec">
        <Sidebar categories={categories} onCategorySelect={handleCategorySelect} />
        <div className="main-content">
          <SearchBar onSearch={handleSearch} />
          <ProductGrid
          products={currentProducts}
          onClick={(product) => setSelectedProduct(product)} // Pass onClick prop
        />
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Home;