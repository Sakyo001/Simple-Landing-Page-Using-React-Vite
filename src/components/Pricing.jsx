import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Choose a Plan</h2>
          <p className="mt-2 text-lg text-gray-600">Select the plan that works best for you.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Plan Card 1 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-60 h-72 mx-auto">
            <div className="px-6 py-8 ">
              <h3 className="text-2xl font-semibold text-gray-900">Basic</h3>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-900">$10</p>
                <p className="text-gray-600">per month</p>
              </div>
            </div>
            <div className="mt-auto bg-gray-50 px-6 py-4">
              <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Select Plan
              </button>
            </div>
          </div>
          {/* Plan Card 2 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-72 h-80 mx-auto">
            <div className="px-8 py-10">
              <h3 className="text-2xl font-semibold text-gray-900">Standard</h3>
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-900">$20</p>
                <p className="text-gray-600">per month</p>
              </div>
            </div>
            <div className="mt-auto bg-gray-50 px-8 py-6">
              <button className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                Select Plan
              </button>
            </div>
          </div>
          {/* Plan Card 3 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-80 h-96 mx-auto">
            <div className="px-10 py-12">
              <h3 className="text-2xl font-semibold text-gray-900">Premium</h3>
              <div className="mt-8">
                <p className="text-lg font-semibold text-gray-900">$30</p>
                <p className="text-gray-600">per month</p>
              </div>
            </div>
            <div className="mt-auto bg-gray-50 px-10 py-8">
              <button className="w-full bg-indigo-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
