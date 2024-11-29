import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import Logo from './Logo';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-24 text-center">
      <div className="max-w-2xl mx-auto">
        <Logo />
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Otta-Mind: Focus. Decide. Act.
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Combat overthinking by focusing on one thought at a time.
        </p>
        <Link
          to="/thoughts"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </main>
  );
};

export default Home;
