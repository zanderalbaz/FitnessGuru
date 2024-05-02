import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = () => {
        axios.get('http://localhost:5000/api/staff/get-members')
            .then(response => {
                console.log(response.data);
                setMembers(response.data);
            })
            .catch(error => {
                console.error('Error fetching members:', error);
            });
    };

    const handleMembershipTypeChange = (id, value) => {
        setMembers(prevMembers => (
            prevMembers.map(member => (
                member.id === id ? { ...member, membership_type: value } : member
            ))
        ));
    };

    const handleUpdateMember = (id) => {
        const memberToUpdate = members.find(member => member.id === id);
        axios.put(`http://localhost:5000/api/staff/update-member/${id}`, { membership_type: memberToUpdate.membership_type })
            .then(response => {
                console.log('Member updated successfully:', response.data);
                fetchMembers();
            })
            .catch(error => {
                console.error('Error updating member:', error);
            });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-xl font-bold mb-6">Manage Members</h1>
            <div>
                <h2 className="text-lg font-semibold">Members List</h2>
                <ul className="mt-4">
                    {members.map(member => (
                        <li key={member.id} className="mb-2 p-2 border border-gray-300 rounded">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">{member.name}</span> - {member.email}
                                </div>
                                <div>
                                    <select
                                        value={member.membership_type}
                                        onChange={(e) => handleMembershipTypeChange(member.id, e.target.value)}
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                    >
                                        <option value="full">Full</option>
                                        <option value="restricted">restricted</option>
                                    </select>
                                    <button onClick={() => handleUpdateMember(member.id)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
