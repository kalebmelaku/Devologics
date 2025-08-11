import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
const Hero = () => {
  return <div className="w-full">
      {/* Hero section with distinctive curved corners */}
      <div className="relative w-full bg-black text-white" style={{
      borderRadius: '40px',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 15% 0%, 8% 8%, 0% 15%)'
    }}>
        {/* Top navigation bar */}
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L24 8L36 16L24 24L12 16Z" fill="#7C3AED" />
              <path d="M12 32L24 24L36 32L24 40L12 32Z" fill="#7C3AED" opacity="0.7" />
              <path d="M24 24L36 16L36 32L24 24Z" fill="#7C3AED" opacity="0.4" />
              <path d="M12 16L12 32L24 24L12 16Z" fill="#7C3AED" opacity="0.4" />
            </svg>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-white hover:text-purple-400 transition-colors border-b-2 border-purple-600 pb-1">Business</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
          </nav>
          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center transition-colors">
              Login
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        {/* Hero content */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 px-6">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Redefining<br />
              How <span className="text-purple-600">Business</span><br />
              Gets Done
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              At The Heart Of Everything We Do Is A Commitment To
              Making Your Business Stronger, Faster, And More Efficient.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center transition-colors">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
          {/* Image */}
          <div className="hidden lg:block relative">
            {/* Circular background gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-transparent opacity-20" style={{
            width: '80%',
            height: '80%',
            top: '10%',
            right: '10%'
          }}></div>
            <img src="/1000037106.jpg" alt="Business professional" className="w-full h-auto rounded-lg relative z-10" />
          </div>
        </div>
        {/* Team avatars positioned at bottom left */}
        <div className="container mx-auto px-6 pb-8">
          <div className="flex -space-x-3 overflow-hidden">
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="/1000037109.jpg" alt="Team member" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="/1000037110.jpg" alt="Team member" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="/1000037108.jpg" alt="Team member" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="/1000037107.jpg" alt="Team member" />
          </div>
        </div>
      </div>
      {/* Partners section directly below the hero */}
      <div className="w-full py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
            <div className="grayscale opacity-70 hover:opacity-100 transition-all">
              <span className="text-xl font-light">Amsterdam</span>
            </div>
            <div className="grayscale opacity-70 hover:opacity-100 transition-all">
              <span className="text-xl italic font-medium">venice.</span>
            </div>
            <div className="grayscale opacity-70 hover:opacity-100 transition-all">
              <span className="text-xl font-light italic">thea</span>
            </div>
            <div className="grayscale opacity-70 hover:opacity-100 transition-all">
              <span className="text-xl font-bold">ob</span>
            </div>
            <div className="grayscale opacity-70 hover:opacity-100 transition-all">
              <span className="text-xl font-medium">M MILANO</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;