import React from 'react';
import GroupCard from './GroupCard';

function GroupList({ groups }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}

export default GroupList;
