import React from 'react';
import clsx from 'clsx';

interface GrayButtonProps {
  title: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const GrayButton: React.FC<GrayButtonProps> = ({ title, width = 'w-full max-w-[12rem]', height = 'h-[2.8rem] p-4', fontSize = 'text-[1.2rem]' }) => {
  return (
    <div
      className={clsx(
        "bg-[#d9d9d921] text-[#404040] transition-colors duration-300 hover:bg-[#d9d9d94f] text-center cursor-pointer shadow-md shadow-[#00000050] rounded-[0.5rem] flex items-center justify-center border",
        width,
        height
      )}
    >
      <h2 className={clsx(fontSize, "mx-auto font-roto font-medium")}>{title}</h2>
    </div>
  );
};

export default GrayButton;
