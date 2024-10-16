import React from 'react';

const sampleActivity = [
  { id: 1, action: 'Requested to borrow iPhone 13', group: 'Family Group', gadget: 'iPhone 13' },
  { id: 2, action: 'Accepted request for MacBook Pro', group: 'Office Group', gadget: 'MacBook Pro' },
];

function RecentActivitySection() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {sampleActivity.length > 0 ? (
          sampleActivity.map((activity) => (
            <div key={activity.id} className="border-b border-gray-200 py-2">
              <p className="text-gray-800">
                {activity.action} - <span className="font-semibold">{activity.gadget}</span> in {activity.group}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No recent activity</p>
        )}
      </div>
    </section>
  );
}

export default RecentActivitySection;
