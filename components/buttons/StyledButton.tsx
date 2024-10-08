import React from 'react';
import clsx from 'clsx';

interface StyledButtonProps {
  children: React.ReactNode; // Accept any valid React node as children
  width?: string;
  height?: string;
  fontSize?: string;
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  width = 'max-w-[12rem] min-w-[8rem]', // Adjusted to prevent cutting off
  height = 'h-[2.8rem] p-4', // Removed fixed height for better flexibility
  fontSize = 'text-[1.2rem]',
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "bg-[#508D4E] text-white transition-colors duration-300 hover:bg-opacity-80 text-center cursor-pointer shadow-md shadow-[#00000050] rounded-[0.5rem] flex items-center justify-center",
        width,
        height,
        "min-w-[8rem] px-4" // Ensure there’s always some padding
      )}
      onClick={onClick}
    >
      <h2
        className={clsx(
          fontSize,
          "mx-auto font-roboto font-medium truncate"
        )}
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {children}
      </h2>
    </div>
  );
};

export default StyledButton;
