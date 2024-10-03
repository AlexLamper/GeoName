import React from 'react';
import { FaTrophy, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

const Statistics = () => {
  const cardData = [
    {
      id: 1,
      header: 'Quizzes Played:',
      statistic: '243',
      icon: <FaPlayCircle size={30} color="#508D4E" />,
    },
    {
      id: 2,
      header: 'Quizzes Completed:',
      statistic: '143',
      icon: <FaCheckCircle size={30} color="#508D4E" />,
    },
    {
      id: 3,
      header: 'Leaderboard Placement:',
      statistic: '#20',
      icon: <FaTrophy size={30} color="#508D4E" />,
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-4">
        Your <span style={{ color: '#1A5319' }}>Statistics</span>
      </h1>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border border-gray-300 rounded-[0.5rem] p-6 h-48 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{card.header}</h3>
            <p className="text-[#1A5319] text-3xl font-bold">{card.statistic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
