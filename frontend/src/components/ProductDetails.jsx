// // ProductDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../assets/data';
// // Sample products data (in real cases, you might fetch this data from a server)
// // const products = [
// //   { id: 1, name: 'Smartphone', category: 'Electronics', description: 'A high-end smartphone', imageUrl: 'https://via.placeholder.com/150/0000FF/808080?text=Smartphone', details: 'Full details about the Smartphone...' },
// //   { id: 2, name: 'T-Shirt', category: 'Clothing', description: 'A comfortable cotton T-shirt', imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=T-Shirt', details: 'Full details about the T-Shirt...' },
// //   { id: 3, name: 'Microwave', category: 'Home Appliances', description: 'Compact and powerful microwave', imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Microwave', details: 'Full details about the Microwave...' },
// //   { id: 4, name: 'Running Shoes', category: 'Sports', description: 'Lightweight running shoes', imageUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=Running+Shoes', details: 'Full details about the Running Shoes...' },
// //   { id: 5, name: 'Science Book', category: 'Books', description: 'An educational science book', imageUrl: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Science+Book', details: 'Full details about the Science Book...' },
// //   { id: 6, name: 'Smartwatch', category: 'Electronics', description: 'Track your health and fitness', imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Smartwatch', details: 'Full details about the Smartwatch...' },
// // ];

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find((product) => product.id === parseInt(productId));
//   console.log(product.imageUrl)
//   if (!product) {
//     return <div className="container mx-auto p-4">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-64 object-cover rounded mb-4"
//         />
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <p className="text-lg mb-2">Category: <span className="font-semibold">{product.category}</span></p>
//         <p className="text-gray-700 mb-4">{product.description}</p>
//         <p className="text-gray-600">{product.details}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
