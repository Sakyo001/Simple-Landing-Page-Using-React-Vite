// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Privacy Policy
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 15.793V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.2M15.6 3H21a2 2 0 0 1 2 2v5.2M21 9.8V3a2 2 0 0 0-2-2h-5.2"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 3.055A9.001 9.001 0 0 1 12 21.95 9.001 9.001 0 0 1 8 3.055 9.001 9.001 0 0 1 16 3.055zM12 14V7l-4 5 4 5v-7z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M15 13v4m0 0v4m0-4h-6m6 0h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
