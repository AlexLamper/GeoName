import React from 'react';
import { FaTrophy, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import { Card } from "@/components/Card"

const Statistics = () => {
  const cardData = [
    {
      id: 1,
      header: 'Quizzes Played:',
      statistic: '243',
      icon: <FaPlayCircle size={30} />,
      href: '#',
    },
    {
      id: 2,
      header: 'Quizzes Completed:',
      statistic: '143',
      icon: <FaCheckCircle size={30} />,
      href: '#',
    },
    {
      id: 3,
      header: 'Leaderboard Placement:',
      statistic: '#20',
      icon: <FaTrophy size={30} />,
      href: '#',
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-4">
        Your <span style={{ color: '#1A5319' }}>Statistics</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            header={card.header}
            statistic={card.statistic}
            icon={card.icon} 
            href={card.href}          
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
