import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4 animate-scroll">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
          <p className="mb-4 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest news about our products and services!
          </p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 border border-gray-300 rounded-l w-96"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-r hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl text-gray-500 font-bold mb-4">eNno</h4>
            <address className="not-italic">
              <p>Banglore</p>
              <p>India</p>
              <p className="mt-2">Phone: +1 5599 55488 55</p>
              <p>Email: info@example.com</p>
            </address>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">About us</a></li>
              <li><a href="#" className="hover:text-blue-500">Services</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of service</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Web Design</a></li>
              <li><a href="#" className="hover:text-blue-500">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-500">Product Management</a></li>
              <li><a href="#" className="hover:text-blue-500">Marketing</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <p className="mb-4">
             follow of these platform
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p>
            © Copyright <strong>eNno</strong>. All Rights Reserved
          </p>
          <p className="mt-1">
            Designed by <a href="#" className="text-blue-500">Tailwind</a> 
            {' '}Distributed by <a href="#" className="text-blue-500">eNno Managment</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;