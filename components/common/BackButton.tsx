import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block w-full md:w-auto px-6 md:px-12"
    >
      Back
    </button>
  );
};

export default BackButton;
