"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function MobileMenuButton({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} navLinks={navLinks} />
    </>
  );
}
