import React from 'react';
import { Link } from 'react-router-dom';

function GadgetCard({ gadget }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{gadget.name}</h3>
      <p className="text-gray-600">Group: {gadget.group}</p>
      <Link to={`/gadget/${gadget.id}`} className="text-blue-500">View Gadget</Link>
    </div>
  );
}

export default GadgetCard;
