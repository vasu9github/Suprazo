import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl backdrop-blur-md px-4 py-2 z-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img height={36} width={36} src="/logo.png" alt="logo" />
          <h1 className="text-xl font-custom font-semibold">Suprazo</h1>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a className="hover:text-purple-600" href="home">
            Home
          </a>
          <a className="hover:text-purple-600" href="about">
            About
          </a>
          <a className="hover:text-purple-600" href="services">
            Services
          </a>
          <a className="hover:text-purple-600" href="products">
            Products
          </a>
          <a className="hover:text-purple-600" href="contact">
            Contact
          </a>
        </nav>
        <button className="hidden md:flex items-center bg-gradient-to-bl from-purple-700 to-sky-500 text-white px-4 py-2 rounded active:scale-90 hover:bg-gradient-to-br hover:from-sky-500 hover:to-purple-500 transition-all duration-300">
          Get Started
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center bg-linear-to-l from-black to-gray-500 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <a className="hover:text-purple-600" href="home">
            Home
          </a>
          <a className="hover:text-purple-600" href="about">
            About
          </a>
          <a className="hover:text-purple-600" href="services">
            Services
          </a>
          <a className="hover:text-purple-600" href="products">
            Products
          </a>
          <a className="hover:text-purple-600" href="contact">
            Contact
          </a>
          <button className="w-full bg-gradient-to-bl from-purple-700 to-sky-500 text-white px-4 py-2 rounded active:scale-90 hover:bg-gradient-to-br hover:from-sky-500 hover:to-purple-500 transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
