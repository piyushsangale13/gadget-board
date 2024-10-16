import React from 'react';
import { Link } from 'react-router-dom';
import { getTokenInfo } from './Auth';
import Avatar from '@mui/material/Avatar';

// Sample data for gadgets and recent activity
const sampleGadgets = [
  { id: 1, name: 'Sony Headphones', group: 'Friends Group' },
  { id: 2, name: 'MacBook Pro', group: 'Office Group' },
  { id: 3, name: 'iPhone 13', group: 'Family Group' },
];

const sampleActivity = [
  { id: 1, action: 'Requested to borrow iPhone 13', group: 'Family Group', gadget: 'iPhone 13' },
  { id: 2, action: 'Accepted request for MacBook Pro', group: 'Office Group', gadget: 'MacBook Pro' },
];

function ProfilePage() {
  const user = getTokenInfo();
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Profile Header */}
      <header className="bg-blue-500 text-white py-10 text-center">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <Avatar />
          <h1 className="text-4xl font-bold mt-4">{user.firstName + " " + user.lastName}</h1>
          <p className="mt-2">Gadget Enthusiast</p>
        </div>
      </header>

      {/* Gadgets Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">My Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleGadgets.map((gadget) => (
            <div key={gadget.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{gadget.name}</h3>
              <p className="text-gray-600">Group: {gadget.group}</p>
              <Link to={`/gadget/${gadget.id}`} className="text-blue-500">View Gadget</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {sampleActivity.length > 0 ? (
            sampleActivity.map((act) => (
              <div key={act.id} className="border-b border-gray-200 py-2">
                <p className="text-gray-800">
                  {act.action} - <span className="font-semibold">{act.gadget}</span> in {act.group}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No recent activity</p>
          )}
        </div>
      </section>

    </div>
  );
}

export default ProfilePage;
