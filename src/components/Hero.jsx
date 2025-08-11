import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="w-full bg-black text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Redefining <br />
            How <span className="text-purple-600">Business</span> <br />
            Gets Done
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            At The Heart Of Everything We Do Is A Commitment To
            Making Your Business Stronger, Faster, And More Efficient.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <div className="flex -space-x-2 overflow-hidden pt-4">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037109.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037110.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037108.jpg" alt="Team member" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="/1000037107.jpg" alt="Team member" />
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/1000037106.jpg" alt="Business professional" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>;
};
export default Hero;