import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => {
  return axios.get(`${API_BASE_URL}/products`).then((response) => response.data);
};

export const fetchCategories = () => {
  return axios.get(`${API_BASE_URL}/products/categories`).then((response) => response.data);
};

export const fetchProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`).then((response) => response.data);
};