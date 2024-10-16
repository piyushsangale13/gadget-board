import React from 'react';
import { Link } from 'react-router-dom';

function GroupCard({ group }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{group.name}</h3>
      <Link to={`/group/${group.id}`} className="text-blue-500">View Group</Link>
    </div>
  );
}

export default GroupCard;
