import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface GreenButtonProps {
  title: string;
  width?: string;
  height?: string;
  fontSize?: string;
  url?: string;
  onClick?: () => void; // Optional onClick prop
}

const GreenButton: React.FC<GreenButtonProps> = ({
  title,
  width = 'w-full max-w-[12rem]',
  height = 'h-[2.8rem] p-4',
  fontSize = 'text-[1.2rem]',
  url,
  onClick, // Destructure onClick
}) => {
  const buttonContent = (
    <div
      className={clsx(
        "bg-[#508D4E] text-white transition-colors duration-300 hover:bg-[#6AA060] text-center cursor-pointer shadow-md shadow-[#80AF81] rounded-[0.5rem] flex items-center justify-center",
        width,
        height
      )}
      onClick={onClick} // Add onClick to the div
    >
      <h2 className={clsx(fontSize, "mx-auto font-roboto font-medium")}>{title}</h2>
    </div>
  );

  return url ? (
    <Link href={url} passHref>
      <div className="block w-full">
        {buttonContent}
      </div>
    </Link>
  ) : (
    buttonContent
  );
};

export default GreenButton;
