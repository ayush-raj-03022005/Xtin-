import React from 'react';
import ReturnCard from './ReturnCard';

const Hero = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Advanced Trading <span className="text-green-600">Algorithms</span><br />
            for Modern Markets
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Leverage cutting-edge AI and machine learning algorithms to optimize your trading strategies.
            Access professional-grade tools used by institutional traders.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition">
              Start Trading Now
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Return Card */}
        <div className="w-full max-w-sm">
          <ReturnCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
