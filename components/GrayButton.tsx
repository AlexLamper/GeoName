import React from 'react';

interface GrayButtonProps {
  title: string;
}

const GrayButton: React.FC<GrayButtonProps> = ({ title }) => {
  return (
    <div className="bg-[#d9d9d921] text-[#404040] transition-colors duration-300 hover:bg-[#d9d9d9af] mx-auto p-4 sm:p-5 md:p-6 lg:p-8 lg:rounded-xl text-center cursor-pointer shadow-lg shadow-[#00000050] w-full max-w-[12rem] sm:max-w-[12rem] md:max-w-[12rem] lg:max-w-[16rem] lg:max-h-[3.5rem] md:max-h-[2.8] max-h-[2.8rem] rounded-[0.5rem] flex items-center justify-center border-[#0000001f] border-[1px] border-solid">
      <h2 className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] mx-auto font-roboto font-medium">{title}</h2>
    </div>
  );
};

export default GrayButton;
