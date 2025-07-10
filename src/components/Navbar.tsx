import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/closeMenu.png";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const navlinks = document.querySelector("ul");

    setIsOpen(!isOpen);
    console.log(navlinks);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      className="flex justify-between p-4 px-8 md:px-20 lg:px-34 xl:px-40 shadow items-center bg-white fixed w-full z-100"
    >
      <h4 className="border-2 border-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
        LL
      </h4>
      {window.innerWidth < 768 && (
        <motion.img
          whileTap={{ scale: 0.8 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          id="menu"
          onClick={toggleMenu}
          width={35}
          src={isOpen ? closeIcon : menuIcon}
          alt="menu"
        />
      )}

      {/* NAV LINKS */}
      {isOpen && (
        <motion.ul
          initial={{ translateX: 50, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          className="flex md:items-center md:justify-end md:gap-6 absolute md:relative  md:flex right-0 flex-col md:flex-row top-[72px] md:top-0 bg-white md:bg-[rgba(0,0,0,0.0)] z-[100] h-[90vh] md:h-0 w-1/2 rounded-tl-xl rounded-bl-xl text-xl md:text-sm items-center gap-12 box-shadow-md"
        >
          <li className="md:ml-8 mt-10 md:mt-0 md:ml-0">
            <a href="/">Home</a>
          </li>
          <li>
            <a className="md:ml-8 md:ml-0" href="projects">
              Projects
            </a>
          </li>
          <li>
            <a className="md:ml-8 md:ml-0" href="about">
              About
            </a>
          </li>
          <li>
            <a className="md:ml-8 md:ml-0" href="contact">
              Contact
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
