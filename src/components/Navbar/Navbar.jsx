/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import  {HiOutlineMenu, HiMenuAlt1}  from "react-icons/hi";
// import  BiMenuAltRight  from "react-icons/bi";
// import { GrMenu, BiMenuAltRight } from "react-icons/hi";
export const NavbarLinks = [
  { name: "Home", link: "/", id: "home" },
  { name: "Features", link: "/features" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-screen z-50 bg-white backdrop-blur-sm shadow-md border-b-2 border-gray-200">
        <div className="container mx-auto px-4 sm:px-8 py-3">
          <div className="flex justify-between items-center">
          
            <div className="flex items-center gap-4 font-bold text-[1.30rem] sm:text-[1.50rem] md:text-[1.50rem] lg:text-[1.50rem] xl:text-[1.50rem] text-blue-800 -ml-5 ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-20 w-20 ml-3 hover:scale-105"
                />
              </Link>
              <span className="main">Azul Corp</span>
            </div>

            <div className="hidden md:flex">
              <ul className="flex items-center gap-16 font-bold text-lg">
                {NavbarLinks.map((data) => (
                  <li key={data.name}>
                    <NavLink
                      to={data.link}
                      activeClassName="active"
                      className="hover:text-primary transition-colors duration-300">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiOutlineMenu
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        {/* Responsive Menu */}
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
    </>
  );
};

export default Navbar;
