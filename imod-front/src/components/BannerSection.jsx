import React from 'react';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const BannerSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Card Column */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-center mb-4">
              <p className="text-gray-500">Remains until the end of the offer</p>
              <div className="fz-hot-deal-countdown text-lg font-bold text-red-500"></div>
            </div>
            <div className="mb-4">
              <img
                src={img4}
                alt="Hot Deal"
                className="mx-auto w-3/4 rounded-lg"  // Adjust image width here
              />
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-4">
                <button className="text-gray-600 hover:text-red-500"><i className="fa-light fa-heart"></i></button>
                <button className="text-gray-600 hover:text-blue-500"><i className="fa-light fa-eye"></i></button>
                <button className="text-gray-600 hover:text-green-500"><i className="fa-light fa-repeat"></i></button>
                <button className="text-gray-600 hover:text-yellow-500"><i className="fa-light fa-cart-shopping"></i></button>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                <a href="shop-details.html">1.0mm Grey Cable - 100M</a>
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                $254.00{' '}
                <span className="line-through text-gray-400">$354.00</span>
              </p>
            </div>
          </div>

          {/* Banner Section Column */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Power Your Adventures</h1>
                <p className="text-gray-600 mb-6">
                  The benefit of an electric eCommerce shop is that it provides
                  customers with a convenient shopping experience.
                </p>
                <a
                  href="shop-details.html"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
                >
                  Shop Now
                </a>
              </div>
              <div className="text-center">
                <img
                  src={img3}
                  alt="Banner"
                  className="mx-auto w-2/3 rounded-lg"  // Adjust image width here
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
