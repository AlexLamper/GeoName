import React from 'react';

const Statistics = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'This is a description of the first card. Include any relevant stats or info here.',
    },
    {
      id: 2,
      title: 'Card Title 2',
      description: 'This is a description of the second card. Include any relevant stats or info here.',
    },
    {
      id: 3,
      title: 'Card Title 3',
      description: 'This is a description of the third card. Include any relevant stats or info here.',
    },
  ];

  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-8">
        Your <span style={{ color: '#1A5319' }}>Statistics</span>
      </h1>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div key={card.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
