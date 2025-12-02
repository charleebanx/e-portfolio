import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbCircleDashedLetterC } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="shadow-lg fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#ffffff" }} // Card white
    >
      <div className="flex items-center justify-between py-2 px-4 md:px-8">
        <NavLink to="/" onClick={closeMenu}>
          <span className='font-semibold text-lg flex items-center gap-2' style={{ color: "#d9466c" }}> {/* primary muted rose */}
            <TbCircleDashedLetterC className='text-4xl' />
          </span>
        </NavLink>

        <div className='md:hidden'>
          <button onClick={toggleMenu} style={{ color: "#1e293b", fontSize: "1.5rem" }}> {/* neutral dark */}
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/contact", label: "Contact" }
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="py-1 px-3 text-lg font-light rounded-md transition duration-300"
              style={{
                color: "#1e293b", // neutral dark
              }}
              activeStyle={{
                color: "#d9466c", // primary muted rose
              }}
              onMouseEnter={e => e.target.style.color = "#b73354"} // primary dark on hover
              onMouseLeave={e => e.target.style.color = "#1e293b"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-start px-6 pb-4 space-y-2"
          style={{ backgroundColor: "#ffffff" }} // Card white
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/contact", label: "Contact" }
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="block py-2 transition duration-300"
              style={{ color: "#1e293b" }} // neutral dark
              onMouseEnter={e => e.target.style.color = "#b73354"} // primary dark on hover
              onMouseLeave={e => e.target.style.color = "#1e293b"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
