// ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Discover the services we offer to our customers.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Design</h3>
              <p className="text-gray-600">We create beautiful and responsive websites tailored to your needs.</p>
            </div>
            <div className="bg-indigo-500 px-6 py-4">
              <a href="#" className="text-white font-semibold hover:text-indigo-900">Learn More</a>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
              <p className="text-gray-600">Build custom mobile applications for iOS and Android platforms.</p>
            </div>
            <div className="bg-indigo-500 px-6 py-4">
              <a href="#" className="text-white font-semibold hover:text-indigo-500">Learn More</a>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Drive growth and engagement with our digital marketing strategies.</p>
            </div>
            <div className="bg-indigo-500 px-6 py-4">
              <a href="#" className="text-white font-semibold hover:text-indigo-500">Learn More</a>
            </div>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
