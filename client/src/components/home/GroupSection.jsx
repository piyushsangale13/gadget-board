import React from 'react';
import GroupCard from './GroupCard';

const sampleGroups = [
  { id: 1, name: 'Friends Group' },
  { id: 2, name: 'Family Group' },
  { id: 3, name: 'Office Group' },
];

function GroupSection() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Your Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}

export default GroupSection;
