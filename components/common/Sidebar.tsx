'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MdHome, MdInfo, MdLeaderboard } from 'react-icons/md';
import { FaBookOpen, FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 h-auto`}>
      <nav className="p-8 h-full">
        <ul>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname === '/dashboard' ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <MdHome size={23} className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname.startsWith('/quizzes') ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/quizzes" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <FaGlobe size={20} className="mr-2" />
              Places
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname.startsWith('/flags') ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/flags" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <FaFlag size={20} className="mr-2" />
              Flags
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname.startsWith('/geographical-facts') ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/geographical-facts" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <FaBookOpen size={20} className="mr-2" />
              Geo Facts
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname === '/leaderboard' ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/leaderboard" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <MdLeaderboard size={20} className="mr-2" />
              Leaderboard
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname === '/profile' ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/profile" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <IoPersonSharp size={20} className="mr-2" />
              Profile
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname === '/about' ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/about" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <MdInfo size={20} className="mr-2" />
              About
            </Link>
          </li>
          <li className={`mb-4 flex items-center cursor-pointer ${pathname === '/help' ? 'bg-[#508D4E] text-white dark:bg-[#508D4E] rounded-[0.4rem]' : ''}`}>
            <Link href="/help" className="flex items-center w-full px-4 py-2 rounded font-medium hover:bg-opacity-10 transition-colors duration-200">
              <FaQuestionCircle size={20} className="mr-2" />
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
