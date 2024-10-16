import React from 'react';
import GadgetCard from './GadgetCard';

const sampleGadgets = [
  { id: 1, name: 'Sony Headphones', group: 'Friends Group' },
  { id: 2, name: 'MacBook Pro', group: 'Office Group' },
  { id: 3, name: 'iPhone 13', group: 'Family Group' },
];

function GadgetsSection() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">My Gadgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleGadgets.map((gadget) => (
          <GadgetCard key={gadget.id} gadget={gadget} />
        ))}
      </div>
    </section>
  );
}

export default GadgetsSection;
