import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook from your authentication context

function NavBar() {
    const { loggedIn, logout } = useAuth(); // Get the loggedIn state and logout function from the authentication context

    const handleLogout = () => {
        logout(); // Call the logout function when the logout button is clicked
    };

    return (
        <div className="bg-[darkred] border-b grid grid-cols-2">
            <h3 className="text-h2 mx-[1rem] text-[beige]">FitnessGuru</h3>
            <ul className="flex justify-end my-[1rem] text-[beige] ml-[1rem]">
            <a href="/"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Home</li></a>
                {loggedIn ? (
                  <>
                    <a href="#"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Dashboard</li></a>
                    <li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all" onClick={handleLogout}>Logout</li>
                  </>
                ) : (
                    <a href="/login"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Login</li></a>
                )}
            </ul>
        </div>
    );
}

export default NavBar;
