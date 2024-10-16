import React from 'react';
import { Link } from 'react-router-dom';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-6">
          <DevicesOtherIcon className="text-white" style={{ fontSize: '64px' }} />
          <h1 className="text-5xl font-bold ml-4">Gadget Board</h1>
        </div>
        <p className="text-xl mt-4 max-w-2xl">
          Share, Compare, and Borrow Gadgets with Friends and Groups. Manage your gadgets, explore your friends' tech collections, and request to borrow devices.
        </p>
        <div className="mt-8">
          <Link to="/login" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
