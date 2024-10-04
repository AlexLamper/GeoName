import React from 'react';
import { FaTrophy, FaPlayCircle, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Card2 } from '../Card2';

const Popular = () => {
  const cardData = [
    {
      id: 1,
      header: 'Cities in Germany',
      icon: <FaArrowRight size={30} color="#508D4E" />,
      href: '#',
    },
    {
      id: 2,
      header: 'Towns and villages in Bulgaria',
      icon: <FaArrowRight size={30} color="#508D4E" />,
      href: '#',
    },
    {
      id: 3,
      header: 'Cities in the United Kingdom',
      icon: <FaArrowRight size={30} color="#508D4E" />,
      href: '#',
    },
    {
      id: 4,
      header: 'Towns and Villages in California',
      icon: <FaPlayCircle size={30} color="#508D4E" />,
      href: '#',
    },
    {
      id: 5,
      header: 'Cities in Peru',
      icon: <FaCheckCircle size={30} color="#508D4E" />,
      href: '#',
    },
    {
      id: 6,
      header: 'Towns and villages in South-Africa',
      icon: <FaTrophy size={30} color="#508D4E" />,
      href: '#',
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-4">
        Popular<span style={{ color: '#1A5319' }}>.</span>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <Card2
            key={card.id}
            header={card.header}
            icon={card.icon} 
            href={card.href}          
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
