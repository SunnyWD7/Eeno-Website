import React from "react";
import {
  FaHeartbeat,
  FaBroadcastTower,
  FaChalkboardTeacher,
  FaVectorSquare,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHeartbeat size={30} />,
    title: "Nesciunt Mete",
    desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: <FaBroadcastTower size={30} />,
    title: "Eosle Commodi",
    desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: "Ledo Markt",
    desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: <FaVectorSquare size={30} />,
    title: "Asperiores Commodit",
    desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    icon: <FaCalendarAlt size={30} />,
    title: "Velit Doloremque",
    desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    icon: <FaCommentDots size={30} />,
    title: "Dolori Architecto",
    desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

function Services() {
  return (
    <section id="service" className="bg-gray-50 py-16 px-4 animate-scroll">
      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <h2 className="text-6xl font-extrabold text-gray-200 absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10 pointer-events-none">
          SERVICES
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 relative z-10">SERVICES</h3>
        <p className="text-gray-600 mt-2 max-w-md mx-auto text-sm md:text-base">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 p-8 rounded-lg text-center shadow-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 p-4 rounded-md text-white inline-block">
                {service.icon}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
