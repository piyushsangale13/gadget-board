import React from 'react';
import GroupList from './GroupList';
import { Link } from 'react-router-dom';

// Sample data for groups
const sampleGroups = [
    { id: 1, name: 'Friends Group', members: 10, gadgetsCount: 5 },
    { id: 2, name: 'Family Group', members: 6, gadgetsCount: 8 },
    { id: 3, name: 'Office Group', members: 15, gadgetsCount: 12 },
];

function GroupsPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Page Header */}
            <header className="bg-blue-500 text-white py-6 text-center">
                <h1 className="text-4xl font-bold">Your Groups</h1>
            </header>

            {/* Group List Section */}
            <section className="container mx-auto py-10 px-4">
                <h2 className="text-2xl font-semibold mb-4">Groups You Are Part Of</h2>
                <GroupList groups={sampleGroups} />
                <div className="mt-6 text-center">
                    <Link to="/create-group" className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg">
                        Create New Group
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default GroupsPage;
