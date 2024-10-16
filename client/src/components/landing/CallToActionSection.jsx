import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Gadget Board Today</h2>
        <p className="text-lg mb-8">Start sharing, comparing, and borrowing gadgets with your friends and family.</p>
        <Link to="/signup" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100">
          Sign Up Now
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
