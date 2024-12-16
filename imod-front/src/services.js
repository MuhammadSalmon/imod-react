// // src/services/productService.js
// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/api/';

// export const getProducts = async () => {
//   try {
//     const response = await axios.get(API_URL + 'products/');
//     console.log(response.data)
//     return response.data; // Assuming response data is an array of products
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     throw error;
//   }
// };

// export const getCategories = async () => {
//   try {
//     const response = await axios.get(API_URL + "categories/");
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     throw error;
//   }
// };
