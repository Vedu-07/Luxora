import { useState, useEffect } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { Link as ScrollLink } from "react-scroll";
import { LINKS } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="border-b-2 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={900}
            offset={-80}
            className="font-semibold text-2xl cursor-pointer"
          >
            L U X O R A
          </ScrollLink>
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>


        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.link.replace("#", "")}
              smooth={true} 
              duration={900}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold underline underline-offset-4"
              className="uppercase text-sm font-medium text-neutral-600 cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

 
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden fixed top-20 left-0 z-50 bg-neutral-50 w-full py-5 px-4 border-b-2`}
        >
          {LINKS.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.link.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="uppercase text-lg font-medium block py-2 tracking-wide cursor-pointer text-neutral-800"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
