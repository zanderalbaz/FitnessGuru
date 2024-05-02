import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageStaff() {
    const [staff, setStaff] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null); // For updates
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('Toronto, CA');
    const [role, setRole] = useState('');


    // Fetch staff on component mount
    useEffect(() => {
// PULL ALL STAFF AND POPULATE
        // axios.get('/api/staff')
        //     .then(response => setStaff(response.data))
        //     .catch(error => console.error('Error fetching staff:', error));
    }, []);

    // Handle input changes for existing staff
    const handleInputChange = (e) => {
        setSelectedStaff({ ...selectedStaff, [e.target.name]: e.target.value });
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


    
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/manager/create-staff', {
        username,
        password,
        email,
        location,
        role
      });
      setUsername('');
      setPassword('');
      setLocation('');
      setEmail('');
      setRole('');

      console.log('Account created successfully.');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Username Already Exists');
      } else {
        console.error('Error submitting login:', error);
        alert('An error occurred. Please try again later.');
      }
    }
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
                    <form onSubmit={handleSubmitCreate}>
                        <input
                            type="text"
                            name="name"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value);}}
                            placeholder="Username"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value);}}
                            placeholder="Email"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                         <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value);}}
                            placeholder="Password"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                         <select
                        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value);}}
                        >
                            <option defaultValue>Toronto, CA</option>
                            <option>Denver, CO</option>
                    </select>
                        <input
                            type="text"
                            name="role"
                            value={role}
                            onChange={(e) => { setRole(e.target.value);}}
                            placeholder="Role"
                            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button type="submit" className="px-4 py-2 bg-[darkred] text-white rounded hover:bg-[red]">Add New Staff</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
