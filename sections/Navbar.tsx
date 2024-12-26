import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-2 border border-white/20 rounded-lg bg-white/30 backdrop-blur-md shadow-lg">
        <a
          href="#"
          className="navbar-item  bg-black text-white hover:bg-black/70 hover:text-white"
        >
          Home
        </a>
        <a href="#" className="navbar-item">
          Portfolio
        </a>
        <a href="#" className="navbar-item">
          About
        </a>
        <a href="#" className="navbar-item">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
