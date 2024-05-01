import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageStaff() {
    const [staff, setStaff] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null); // For updates
    const [newStaff, setNewStaff] = useState({ name: '', email: '', status: '' }); // For new additions

    // Fetch staff on component mount
    useEffect(() => {
        axios.get('/api/staff')
            .then(response => setStaff(response.data))
            .catch(error => console.error('Error fetching staff:', error));
    }, []);

    // Handle input changes for existing staff
    const handleInputChange = (e) => {
        setSelectedStaff({ ...selectedStaff, [e.target.name]: e.target.value });
    };

    // Handle input changes for new staff
    const handleNewStaffChange = (e) => {
        setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
    };

    // Update staff member
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.post('/api/update-staff', selectedStaff)
            .then(response => {
                alert('Staff member updated successfully.');
                setStaff(staff.map(item => item.id === selectedStaff.id ? selectedStaff : item));
                setSelectedStaff(null); // Reset selected staff
            })
            .catch(error => console.error('Error updating staff:', error));
    };

    // Add new staff member
    const handleAdd = (e) => {
        e.preventDefault();
        axios.post('/api/add-staff', newStaff)
            .then(response => {
                alert('New staff member added successfully.');
                setStaff([...staff, response.data]);
                setNewStaff({ name: '', email: '', status: '' }); // Reset form
            })
            .catch(error => console.error('Error adding new staff:', error));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Manage Staff</h1>

            <div className="grid grid-cols-2 gap-8">
                {/* Update Existing Staff Member */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Update Existing Staff Member</h2>
                    <select
                        onChange={e => setSelectedStaff(staff.find(member => member.id === e.target.value))}
                        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Staff Member</option>
                        {staff.map(member => (
                            <option key={member.id} value={member.id}>{member.name}</option>
                        ))}
                    </select>
                    {selectedStaff && (
                        <form onSubmit={handleUpdate}>
                            <input
                                type="text"
                                name="name"
                                value={selectedStaff.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={selectedStaff.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <input
                                type="text"
                                name="status"
                                value={selectedStaff.status}
                                onChange={handleInputChange}
                                placeholder="Status"
                                className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update Staff</button>
                        </form>
                    )}
                </div>

                {/* Add New Staff Member */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Add New Staff Member</h2>
                    <form onSubmit={handleAdd}>
                        <input
                            type="text"
                            name="name"
                            value={newStaff.name}
                            onChange={handleNewStaffChange}
                            placeholder="Name"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={newStaff.email}
                            onChange={handleNewStaffChange}
                            placeholder="Email"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <input
                            type="text"
                            name="status"
                            value={newStaff.status}
                            onChange={handleNewStaffChange}
                            placeholder="Status"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button type="submit" className="px-4 py-2 bg-[darkred] text-white rounded hover:bg-[red]">Add New Staff</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
