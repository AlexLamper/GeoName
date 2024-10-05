import React from 'react';

interface Link {
  title: string;
  href: string;
}

interface QuickAccessProps {
  links: Link[];
}

const QuickAccess: React.FC<QuickAccessProps> = ({ links }) => {
  return (
    <div className="my-4">
      <h3 className="text-md mb-2 opacity-75">Quick Access</h3>
      <ul className="flex flex-wrap space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block px-12"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickAccess;
