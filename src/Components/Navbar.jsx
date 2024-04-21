import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Listen to screen resizing to hide the mobile navigation when the screen is wide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);  // Automatically close the navigation if the screen is wider than 768px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


 return (
    <div className="border border-grey-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">PORTFOLIO</h1>
      <ul className="hidden md:flex">
        <li className="">
          <a
            href="#about"
            className="px-6 py-3 w-full rounded-xl mr-4 bordre border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            About
          </a>
        </li>
        <li className="">
          <a
            href="#work-section" 
            className="px-6 py-3 w-full rounded-xl mr-4 bordre border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Work
          </a>
        </li>
        <li className="">
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 bordre border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Mohd Arif</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work-section">Work</a> 
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
 );
};

export default Navbar;
