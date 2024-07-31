import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface NavLink {
  title: string;
  href: string;
}

export default function Navigation({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav className='flex items-center h-28'>
        <img className='ml-28 mr-96' src="/Group 13.png" alt="logo" />
      <ul className='flex gap-24 ml-80'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button className='ml-24 border-2 border-purple-600 p-5 px-8 text-purple-600 rounded-full'>Contact us</button>
    </nav>
  );
}

