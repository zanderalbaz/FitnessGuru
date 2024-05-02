import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Courses() {
    const [videos, setVideos] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newVideo, setNewVideo] = useState({ title: '', url: '', role: '' });
    const [selectedRole, setSelectedRole] = useState('');
    const [editingVideo, setEditingVideo] = useState(null);

    useEffect(() => {
        axios.get('/api/videos').then(response => setVideos(response.data));
        axios.get('/api/roles').then(response => setRoles(response.data));
    }, []);

    const handleInputChange = (e) => {
        if (editingVideo) {
            setEditingVideo({ ...editingVideo, [e.target.name]: e.target.value });
        } else {
            setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
        }
    };

    const handleUploadVideo = (e) => {
        e.preventDefault();
        const endpoint = editingVideo ? '/api/update-video' : '/api/upload-video';
        const data = editingVideo || newVideo;

        axios.post(endpoint, data)
            .then(response => {
                if (editingVideo) {
                    setVideos(videos.map(v => v.id === editingVideo.id ? editingVideo : v));
                    setEditingVideo(null);
                } else {
                    setVideos([...videos, response.data]);
                    setNewVideo({ title: '', url: '', role: '' }); // Reset form
                }
                alert('Video processed successfully.');
            })
            .catch(error => console.error('Error processing video:', error));
    };

    const handleDeleteVideo = (videoId) => {
        axios.post('/api/delete-video', { id: videoId })
            .then(() => {
                setVideos(videos.filter(v => v.id !== videoId));
                alert('Video deleted successfully.');
            })
            .catch(error => console.error('Error deleting video:', error));
    };

    const startEditVideo = (video) => {
        setEditingVideo({ ...video });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Employee Training Videos</h1>

            {/* Video Form */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold">{editingVideo ? 'Update Video' : 'Upload Training Video'}</h2>
                <form onSubmit={handleUploadVideo} className="mt-4">
                    <input
                        type="text"
                        name="title"
                        value={editingVideo ? editingVideo.title : newVideo.title}
                        onChange={handleInputChange}
                        placeholder="Video Title"
                        className="block w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                    <input
                        type="text"
                        name="url"
                        value={editingVideo ? editingVideo.url : newVideo.url}
                        onChange={handleInputChange}
                        placeholder="Video URL"
                        className="block w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                    <select
                        name="role"
                        value={editingVideo ? editingVideo.role : newVideo.role}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        required
                    >
                        <option value="">Assign to Role</option>
                        {roles.map(role => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="px-4 py-2 bg-[darkred] text-white rounded hover:bg-[red]">
                        {editingVideo ? 'Update Video' : 'Upload Video'}
                    </button>
                    {editingVideo && (
                        <button onClick={() => setEditingVideo(null)} type="button" className="ml-4 px-4 py-2 bg-[darkred] text-white rounded hover:bg-[red]">
                            Cancel
                        </button>
                    )}
                </form>
            </div>

            {/* Videos List */}
            <div>
                <h2 className="text-xl font-semibold">Training Videos</h2>
                <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="">Filter by Role</option>
                    {roles.map(role => (
                        <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                </select>
                <ul>
                    {videos.filter(video => !selectedRole || video.role === selectedRole).map(video => (
                        <li key={video.id} className="mb-2 p-2 flex justify-between items-center border border-gray-300 rounded">
                            <div>
                                <strong>{video.title}</strong> - <a href={video.url} target="_blank" rel="noopener noreferrer">{video.url}</a> (Role: {video.role})
                            </div>
                            <div>
                                <button onClick={() => startEditVideo(video)} className="mr-2 px-3 py-1 text-sm text-white bg-[darkred] rounded hover:bg-[red]">Edit</button>
                                <button onClick={() => handleDeleteVideo(video.id)} className="px-3 py-1 text-sm text-white bg-[darkred] rounded hover:bg-[red]">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
