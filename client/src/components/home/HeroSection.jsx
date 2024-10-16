import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Gadget Board</h1>
        <p className="mt-4 text-lg">Share, Compare, and Borrow Gadgets with Your Friends!</p>
        <Link to="/create-group" className="mt-6 inline-block bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg">
          Create a Group
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
