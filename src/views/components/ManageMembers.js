import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageMembers() {
    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState({ name: '', email: '' });

    useEffect(() => {
        axios.get('/api/members')
            .then(response => setMembers(response.data))
            .catch(error => console.error('Error fetching members:', error));
    }, []);

    const handleInputChange = (e) => {
        setNewMember({ ...newMember, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/members', newMember)
            .then(response => {
                setMembers([...members, response.data]);
                setNewMember({ name: '', email: '' });
            })
            .catch(error => console.error('Error adding member:', error));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-xl font-bold mb-6">Manage Members</h1>
            <div className="mb-8">
                <h2 className="text-lg font-semibold">Add New Member</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newMember.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={newMember.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[darkred] text-white rounded hover:bg-[red]">Add Member</button>
                </form>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Members List</h2>
                <ul className="mt-4">
                    {members.map(member => (
                        <li key={member.id} className="mb-2 p-2 border border-gray-300 rounded">
                            {member.name} - {member.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
