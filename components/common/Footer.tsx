import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start py-8 max-w-[70%] mx-auto border-t border-t-gray-600">
      <div className="w-7/12 flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Link href="/">
            <Image src={'/logo/logo.svg'} alt={'logo'} width={300} height={300} />
        </Link>
        <p className="text-center md:text-left mt-8 font-roboto">
          © GeoName 2024, all rights reserved.
        </p>
      </div>

      <div className="w-5/12 flex">
        <div className="flex flex-col mr-32">
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

        <div className="flex flex-col first-line:ml-6">
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
    </footer>
  );
};

export default Footer;
