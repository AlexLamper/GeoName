import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface GreenButtonProps {
  title: string;
  width?: string;
  height?: string;
  fontSize?: string;
  url?: string;
  onClick?: () => void;
}

const GreenButton: React.FC<GreenButtonProps> = ({
  title,
  width = 'w-full max-w-[12rem] min-w-[8rem]',
  height = 'h-[2.8rem] p-4',
  fontSize = 'text-[1.2rem]',
  url,
  onClick,
}) => {
  const buttonContent = (
    <div
      className={clsx(
        "bg-[#508D4E] text-white transition-colors duration-300 hover:bg-opacity-80 text-center cursor-pointer shadow-md shadow-[#00000050] rounded-[0.5rem] flex items-center justify-center",
        width,
        height
      )}
      onClick={onClick}
    >
      <h2
        className={clsx(
          fontSize,
          "mx-auto font-roboto font-medium truncate px-2"
        )}
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {title}
      </h2>
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
