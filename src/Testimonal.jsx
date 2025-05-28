import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonals = () => {
  const testimonials = [
    {
      id: 1,
      content: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image:"/img/testimonials/testimonials-1.jpg",
      author: "Sara Wilsson",
      role: "Designer"
    },
    {
      id: 2,
      content: "Export tempor illum tamen mails mails eram quae irure esse labore quem cillum quid mails quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image:"/img/testimonials/testimonials-2.jpg",
      author: "Jena Karlis",
      role: "Store Owner"
    },
    {
      id: 3,
      content: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image:"/img/testimonials/testimonials-3.jpg",
      author: "John Doe",
      role: "Developer"
    },
    {
      id: 4,
      content: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image:"/img/testimonials/testimonials-4.jpg",
      author: "John Doe",
      role: "Developer"
    },
    {
      id: 5,
      content: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image:"/img/testimonials/testimonials-5.jpg",
      author: "John Doe",
      role: "Developer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const nextTestimonial = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 animate-scroll">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">TESTIMONIALS</h2>
        <p className="text-gray-600 mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        
        <div className="relative overflow-hidden h-64">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
                <img src={testimonial.image} alt="" className='h-20 w-20 rounded-full mx-auto'/>
                <div className="font-bold text-lg">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-200 mr-4 transition"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-200 ml-4 transition"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
