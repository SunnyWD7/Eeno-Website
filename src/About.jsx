import React from 'react';
import { CheckCircle } from 'lucide-react';

function About() {
  return (
    <section id="about" className="w-full px-4 py-10 bg-white animate-scroll">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 -mt-6">ABOUT</h1>
        <p className="text-gray-600 text-xl mt-4 max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

    
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-10 px-4">
        
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/img/about.png"
            alt="About"
            className="w-full h-auto rounded-md"
          />
          
          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full opacity-90 hover:scale-105 transition-transform cursor-pointer mx-auto"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </button>
        </div>

        <div className="text-center sm:text-left w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
          </h2>
          <p className="italic text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 mt-1" size={20} />
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 mt-1" size={20} />
              <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 mt-1" size={20} />
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </li>
          </ul>
          <p className="text-gray-700">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
