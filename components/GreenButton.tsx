import React from 'react';

interface GreenButtonProps {
  title: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ title }) => {
  return (
    <div className="bg-[#508D4E] text-white transition-colors duration-300 hover:bg-[#6AA060] p-4 sm:p-5 md:p-6 lg:p-8 lg:rounded-xl text-center cursor-pointer shadow-lg shadow-[#80AF81] w-full max-w-[12rem] sm:max-w-[12rem] md:max-w-[12rem] lg:max-w-[16rem] lg:max-h-[3.5rem] md:max-h-[2.8] max-h-[2.8rem] rounded-[0.5rem] flex items-center justify-center">
      <h2 className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] mx-auto font-roboto font-medium">{title}</h2>
    </div>
  );
};

export default GreenButton;
