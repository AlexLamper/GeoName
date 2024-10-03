import React from 'react';

const QuickAccess = () => {
  return (
    <div className="my-4">
        <h3 className="text-md mb-2 opacity-75">Quick Access</h3>
        <ul className="flex flex-wrap space-x-4">
            <li>
                <a
                    href="#"
                    className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block px-12"
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block px-12"
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block px-12"
                >
                    Dashboard
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block px-12"
                >
                    Contact
                </a>
            </li>
        </ul>
    </div>
  );
};

export default QuickAccess;
