import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <footer className="lg:px-[8rem] px-4 text-gray-800">
  <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        {/* Brand and Social Links */}
        <div className="flex flex-col items-start md:items-start space-y-4">
          <a href="/" className="flex items-center text-2xl font-bold">
              <Image src="/vega.png" height={200} width={200} className="text-gray-700"></Image>
          </a>
          <ul className="flex space-x-4">
            <li><a href="#" className='p-3 bg-slate-200 rounded-full'><FacebookIcon className="text-gray-700 hover:text-blue-600 transition duration-300" /></a></li>
            <li><a href="#" className='p-3 bg-slate-200 rounded-full'><InstagramIcon className="text-gray-700 hover:text-pink-500 transition duration-300" /></a></li>
            <li><a href="#" className='p-3 bg-slate-200 rounded-full'><LinkedInIcon className="text-gray-700 hover:text-blue-700 transition duration-300" /></a></li>
            <li><a href="#" className='p-3 bg-slate-200 rounded-full'><XIcon className="text-gray-700 hover:text-black transition duration-300" /></a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 gap-4 text-left">
          <ul className="space-y-2 text-sm">
            <li><a href="/policies/faq" className="hover:text-green-600 transition">FAQs</a></li>
            <li><a href="/policies/privacypolicy" className="hover:text-green-600 transition">Privacy Policy</a></li>
            <li><a href="/policies/return" className="hover:text-green-600 transition">Pricing, Delivery, Return and Refund Policy</a></li>
            <li><a href="/policies/terms" className="hover:text-green-600 transition">Terms and Conditions</a></li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li><a href="/policies/about" className="hover:text-green-600 transition">About Us</a></li>
            <li><a href="/categories" className="hover:text-green-600 transition">All Categories</a></li>

            {/* <li><a href="/policies/pickup" className="hover:text-green-600 transition">Pickup Points</a></li> */}
            <li><a href="/policies/disclaimer" className="hover:text-green-600 transition">Disclaimer</a></li>
            {/* <li><a href="/policies/contact" className="hover:text-green-600 transition">Contact Us</a></li> */}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-600 p-4 my-3 bg-gray-50">
        Copyright © {currentYear} Kirana Needs Limited (KNL). All Rights Reserved.

      </p>
    </div>
  </footer>
  );
}

export default Footer;
