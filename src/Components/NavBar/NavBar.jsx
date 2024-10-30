import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from "../../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "home", // Section ID
    },
    {
      id: 2,
      title: "Categories",
      link: "products", // Section ID
    },
    {
      id: 3,
      title: "Blog",
      link: "Blog", // Placeholder (add ID if this section exists)
    },
    {
      id: 4,
      title: "About",
      link: "banner", // Placeholder (add ID if this section exists)
    },
    {
      id: 5,
      title: "Contact",
      link: "contact", // Section ID
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white py-1 absolute top-0 w-full">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="#logo" className="max-w-[120px]" />
        </div>
        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={0} // Adjust for fixed navbar height
                  className="inline-block text-base font-semibold py-2 px-3 uppercase cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <CiMenuFries className="text-4xl" />
        </div>

        {/* Dropdown Menu for Mobile */}
        <ul
          className={`absolute bg-white shadow-lg rounded-lg mt-2 w-48 text-black text-center transition-all top-20 right-5 duration-300 z-[1000] ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                offset={0} // Adjust for fixed navbar height
                className="inline-block text-base font-semibold py-2 px-3 uppercase cursor-pointer"
                onClick={toggleMenu} // Close menu after click
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
          <button className="text-xl">
            <FaRegUser />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
