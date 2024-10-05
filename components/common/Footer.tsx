"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';

const Footer = () => {

  const { theme } = useTheme();

  const logoSrc = theme === 'dark' ? '/icons/logo-icon-light.svg' : '/logo/logo.svg';

  return (
    <footer className="w-full border-t">
      <div className="w-full max-w-[85%] lg:max-w-[70%] mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start p-4 py-8">
        {/* Left Div */}
        <div className="w-full md:w-7/12 flex flex-col items-start text-left mb-6 md:mb-0">
          <Link href="/">
            <Image src={logoSrc} alt={'logo'} width={300} height={300} />
          </Link>
          <p className="lg:text-center text-left mt-4 font-roboto">
            © GeoName 2024, all rights reserved.
          </p>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-5/12 flex flex-col md:flex-row justify-between md:justify-end">
          {/* Pages List */}
          <div className="flex flex-col mb-6 md:mb-0 md:mr-16">
            <h4 className="font-bold text-lg mb-4">Pages</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media List */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Social Media</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-80">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
