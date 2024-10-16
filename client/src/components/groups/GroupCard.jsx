import React from 'react';
import { Link } from 'react-router-dom';

function GroupCard({ group }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{group.name}</h3>
      <p className="text-gray-600">Members: {group.members}</p>
      <p className="text-gray-600">Gadgets: {group.gadgetsCount}</p>
      <Link to={`/group/${group.id}`} className="text-blue-500 mt-2 block">View Group</Link>
    </div>
  );
}

export default GroupCard;
