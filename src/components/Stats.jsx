import React from 'react';
import { ArrowRight } from 'lucide-react';
const Stats = () => {
  return <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            25,000+ Trusted <br />
            Partnerships built <br />
            on Results
          </h2>
          <div className="h-1 w-48 bg-purple-600 mb-6"></div>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Trusted by over 25,000 of the world's most successful
            companies, we deliver reliable, high-performance
            solutions that drive real business results.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center transition-colors mb-12">
            Discover more
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600 mb-1">90%</h3>
              <p className="text-sm text-gray-600">Repeated Customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600 mb-1">390+</h3>
              <p className="text-sm text-gray-600">Expert Support Team</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600 mb-1">24k+</h3>
              <p className="text-sm text-gray-600">Project completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600 mb-1">99%</h3>
              <p className="text-sm text-gray-600">Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Stats;