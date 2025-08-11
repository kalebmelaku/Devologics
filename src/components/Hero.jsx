import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="relative w-full">
      {/* Hero section with curved corners */}
      <div className="w-full bg-black text-white rounded-[40px] overflow-hidden">
        {/* Navigation bar integrated in hero */}
        <div className="container mx-auto flex justify-between items-center pt-4 px-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5L9 2L15 5L21 2V18L15 21L9 18L3 21V5Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Business</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
          </nav>
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center transition-colors">
              Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          {/* Mobile menu button would go here */}
        </div>
        {/* Hero content */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 px-4 md:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Redefining <br />
              How <span className="text-purple-600">Business</span> <br />
              Gets Done
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              At The Heart Of Everything We Do Is A Commitment To
              Making Your Business Stronger, Faster, And More Efficient.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="hidden lg:block relative">
            {/* Circular background gradient */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-gray-800 to-transparent opacity-20"></div>
            <img src="/1000037106.jpg" alt="Business professional" className="w-full h-auto rounded-lg relative z-10" />
          </div>
        </div>
        {/* Team avatars positioned at bottom left */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-8">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037109.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037110.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037108.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037107.jpg" alt="Team member" />
          </div>
        </div>
      </div>
      {/* Partners section directly below the hero */}
      <div className="w-full py-8 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl font-semibold">Amsterdam</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl italic font-semibold">venice.</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl font-light italic">thea</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl font-bold">ob</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl font-semibold">M MILANO</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;