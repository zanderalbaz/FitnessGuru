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
