import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthProvider } from '../../context/AuthContext';

export default function MyCourses() {
    const [videos, setVideos] = useState([]);
    const { user } = useContext(AuthProvider); // Assuming 'user' has a 'role' property

    useEffect(() => {
        if (user && user.role) {
            axios.get(`/api/videos/${user.role}`)
                .then(response => setVideos(response.data))
                .catch(error => console.error('Error fetching videos for role:', error));
        }
    }, [user]);

    if (!user) {
        return <div>Loading user information...</div>;
    }

    return (  
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-xl font-bold mb-4">Training Courses for {user.role}</h1>
            <ul>
                {videos.length > 0 ? videos.map(video => (
                    <li key={video.id} className="mb-2 p-2 border border-gray-300 rounded">
                        <strong>{video.title}</strong>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-[darkred] hover:[red]">
                            Watch Video
                        </a>
                    </li>
                )) : <p>No videos available for your role. Get with your Manager!</p>}
            </ul>
        </div>
    );
}
