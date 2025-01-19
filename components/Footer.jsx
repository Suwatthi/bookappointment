import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        {/* ----------Left Column -------- */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-4" />
          <p className="w-full md:w-2/3  text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            praesentium ab assumenda porro dolorum libero, qui deleniti quasi
            quae possimus laborum omnis suscipit incidunt optio tempore,
            deserunt eligendi culpa sequi.
          </p>
        </div>

        {/* ----------Center Column -------- */}
        <div>
          <p className="font-bold text-lg mb-4 text-gray-900">COMPANY</p>
          <ul className="text-gray-600 space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----------Right Column -------- */}
        <div>
          <p className="font-bold text-lg mb-4 text-gray-900">GET IN TOUCH</p>
          <ul className="text-gray-600 space-y-2">
            <li>000 000 0000</li>
            <li>aaaa@12gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------- Copyright Text -------- */}
      <div className="mt-10">
        <hr className="border-gray-300 mb-4" />
        <p className="text-center text-gray-600 text-xs">
          Copyright 2024 © WellHealth - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
