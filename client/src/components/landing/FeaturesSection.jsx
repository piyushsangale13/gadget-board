import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Gadget Board?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureItem
            title="Create Groups"
            description="Easily create groups with your friends, family, or colleagues to share and manage gadgets."
          />
          <FeatureItem
            title="Compare Gadgets"
            description="See which gadgets your friends own and compare features before making your next purchase."
          />
          <FeatureItem
            title="Borrow Gadgets"
            description="Request to borrow gadgets from your friends and try them before you buy!"
          />
        </div>
      </div>
    </section>
  );
};

// A simple reusable component for each feature item
const FeatureItem = ({ title, description }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
