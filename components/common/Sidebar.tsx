'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdHome, MdInfo } from 'react-icons/md';
import { FaGlobe, FaQuestionCircle, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen] = useState(false);


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 border-r bg-black bg-opacity-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <nav className="p-8">
          <ul>
            <li className="mb-4 hover:bg-white hover:border hover:rounded-[0.4rem] flex items-center">
              <MdHome size={23} color="black" className="mr-2 ml-4" />
              <Link href="/" className="block px-4 py-2 rounded font-medium">
                Dashboard
              </Link>
            </li>
            <li className="mb-4 hover:bg-white hover:border hover:rounded-[0.4rem] flex items-center">
              <FaGlobe size={20} color="black" className="mr-2 ml-4" />
              <Link href="/quizzes" className="block px-4 py-2 rounded font-medium">
                Quizzes
              </Link>
            </li>
            <li className="mb-4 hover:bg-white hover:border hover:rounded-[0.4rem] flex items-center">
              <FaUser size={20} color="black" className="mr-2 ml-4" />
              <Link href="/profile" className="block px-4 py-2 rounded font-medium">
                Profile
              </Link>
            </li>
            <li className="mb-4 hover:bg-white hover:border hover:rounded-[0.4rem] flex items-center">
              <MdInfo size={20} color="black" className="mr-2 ml-4" />
              <Link href="/about" className="block px-4 py-2 rounded font-medium">
                About
              </Link>
            </li>
            <li className="mb-4 hover:bg-white hover:border hover:rounded-[0.4rem] flex items-center">
              <FaQuestionCircle size={20} color="black" className="mr-2 ml-4" />
              <Link href="/help" className="block px-4 py-2 rounded font-medium">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
