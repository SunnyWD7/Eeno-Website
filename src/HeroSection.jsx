import React from 'react';

export default function HeroSection() {
  return (
    <div className="pt-20 md:flex flex-row-reverse items-center justify-around min-h-screen font-poppins animate-scroll">
      {/* Image */}
      <div className="h-full flex items-center justify-center">
        <img
          src="/img/hero-img.png"
          alt="hero banner"
          className="h-[400px] sm:h-[500px] object-contain animate-upDown"
        />
      </div>

      {/* Text */}
      <div className="max-w-[600px] p-3 flex flex-col sm:mx-20 text-start md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-500 text-start">
          Elegant and creative solutions
        </h1>
        <p className="text-xl my-4 text-gray-500">
          We are team of talented designers making websites with Tailwind
        </p>
        <div className="flex gap-6 items-center justify-start">
          <a
            href="#getstarted"
            className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-500"
          >
            Get Started
          </a>
          <a
            href="#watch"
            className="flex items-center gap-2 text-green-500 font-semibold"
          >
            <i className="fa-solid fa-circle-play text-2xl"></i> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
}
