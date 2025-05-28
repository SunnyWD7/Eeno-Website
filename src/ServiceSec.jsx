import React from 'react';

const services = [
  {
    img: '/img/electric.jpg',
    title: 'Our Services',
    desc: 'We provide modern web design, development, and marketing solutions tailored to your needs.',
  },
  {
    img: '/img/bound.jpg',
    title: 'Our Services',
    desc: 'We provide modern web design, development, and marketing solutions tailored to your needs.',
  },
  {
    img: '/img/calender.jpg',
    title: 'Our Services',
    desc: 'We provide modern web design, development, and marketing solutions tailored to your needs.',
  },
];

function ServiceSec() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap items-center justify- gap-10 my-10 px-4 max-w-[1200px] mx-auto animate-scroll'>
      {services.map((service, index) => (
        <div
        key={index}
        className="h-[251px] w-[536px] md:w-[340px] bg-[#F8F8F8] shadow-lg hover:animate-upDown rounded-lg p-6"
      >
          <img src={service.img} alt="service" className='w-10 h-10 object-contain mb-4 ' />
          <h2 className="text-2xl text-gray-600 mb-2">{service.title}</h2>
          <p className="text-gray-500 text-base">{service.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceSec;
