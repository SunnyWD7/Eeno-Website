import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div id='contact' className="px-4 py-10 bg-gray-50 animate-scroll font-poppins">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-700">CONTACT</h1>
        <p className="text-gray-600 mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint <br />
          consectetur velit
        </p>
      </div>

      {/* Contact Info and Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Section - Contact Info */}
        <div className="bg-white shadow-xl p-8 rounded-lg">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot text-xl text-blue-500 mt-1"></i>
              <div>
                <h2 className="font-semibold text-gray-700">Address</h2>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fa-solid fa-phone text-xl text-green-500 mt-1"></i>
              <div>
                <h2 className="font-semibold text-gray-700">Phone</h2>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fa-solid fa-envelope text-xl text-red-500 mt-1"></i>
              <div>
                <h2 className="font-semibold text-gray-700">Email</h2>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.901979474594!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-xl p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
