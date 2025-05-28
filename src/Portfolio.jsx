import React from "react";

const Portfolio = () => {
  const images = [
    "/img/portfolio/app-1.jpg",
    "/img/portfolio/app-2.jpg",
    "/img/portfolio/app-3.jpg",
    "/img/portfolio/books-1.jpg",
    "/img/portfolio/books-2.jpg",
    "/img/portfolio/books-3.jpg",
    "/img/portfolio/branding-1.jpg",
    "/img/portfolio/branding-2.jpg",
    "/img/portfolio/branding-3.jpg",
    "/img/portfolio/product-1.jpg",
    "/img/portfolio/product-2.jpg",
    "/img/portfolio/product-3.jpg",
  ];

  return (
    <section id="portfolio" className="py-16 bg-white animate-scroll">
      <div className="text-center mb-12 relative">
        <h2 className="text-6xl font-extrabold text-gray-200 absolute inset-x-0 top-0 opacity-10 pointer-events-none select-none">
          PORTFOLIO
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 relative z-10">
          PORTFOLIO
        </h3>
        <p className="text-gray-600 mt-2 max-w-md mx-auto text-sm md:text-base">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* Filter Tabs UI only for now */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
        <button className="text-green-600 font-bold underline">ALL</button>
        <button className="text-gray-700 hover:text-green-500 transition">APP</button>
        <button className="text-gray-700 hover:text-green-500 transition">PRODUCT</button>
        <button className="text-gray-700 hover:text-green-500 transition">BRANDING</button>
        <button className="text-gray-700 hover:text-green-500 transition">BOOKS</button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow-sm hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


