// Portfolio.js

import React from 'react';
import img1 from '../assets/images/qcu.jpeg'
import img2 from '../assets/images/e-commerce.jpeg'
import img3 from '../assets/images/movie.jpeg'
import img4 from '../assets/images/maloi.jpeg'

const projects = [
  {
    id: 1,
    title: 'QCU Clone Website',
    imageUrl: img1,
    description: 'Description of Project 1',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    imageUrl: img2,
    description: 'Description of Project 2',
  },
  {
    id: 3,
    title: 'Movie Website',
    imageUrl: img3,
    description: 'Description of Project 3',
  },
  {
    id: 4,
    title: 'Bayonetta Glasses Shop',
    imageUrl: img4,
    description: 'Description of Project 4',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Portfolio</h2>
          <p className="mt-4 text-lg text-gray-600">Check out some of our projects below.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <img className="w-full h-auto object-cover rounded-lg" src={project.imageUrl} alt={project.title} />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="absolute inset-x-0 bottom-0 px-4 py-2 text-center text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
