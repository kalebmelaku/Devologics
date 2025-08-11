import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-black text-white py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5L9 2L15 5L21 2V18L15 21L9 18L3 21V5Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Business</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
        </nav>
        <div className="hidden md:block">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center transition-colors">
            Login
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-black pt-2 pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Business</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center justify-center transition-colors">
              Login
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </nav>
        </div>}
    </header>;
};
export default Navbar;