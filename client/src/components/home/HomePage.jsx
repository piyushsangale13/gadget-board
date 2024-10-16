import React from 'react';
import HeroSection from './HeroSection';
import GroupSection from './GroupSection';
import GadgetsSection from './GadgetsSection';
import RecentActivitySection from './RecentActivitySection';

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <GroupSection />
      <GadgetsSection />
      <RecentActivitySection />
    </div>
  );
}

export default Homepage;
