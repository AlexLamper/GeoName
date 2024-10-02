'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen] = useState(false);


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 border-r bg-black bg-opacity-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <nav className="p-8">
          <ul>
            <li className="mb-4">
              <Link href="/home" className="block px-4 py-2 rounded font-medium">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/about" className="block px-4 py-2 rounded font-medium">
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/services" className="block px-4 py-2 rounded font-medium">
                Services
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="block px-4 py-2 rounded font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
