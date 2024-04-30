import React from 'react';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';

function NavBar() {
    const { loggedIn, logout, isMember, isManager, isStaff } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="bg-[darkred] border-b grid grid-cols-2">
            <div className="flex pl-[0.5rem]">
                <a href="/" className='p-0 my-auto'>
                    <div className="w-[3rem] p-0 my-auto mr-[-1rem] rotate-[135deg]">
                        <img src={logo} alt="logo" />
                    </div>
                </a>
                <a href="/" className='p-0 my-auto'>
                    <h3 className="text-h2 my-auto mx-[1rem] text-[beige] tracking-tighter">FitnessGuru</h3>
                </a>
            </div>


            <ul className="flex justify-end my-auto text-[beige] ml-[1rem]">
                <a href="/"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Home</li></a>
                {isManager() && loggedIn && (
                    <>
                        <a href="/manage-staff"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Manage Staff</li></a>
                        <a href="/manage-courses"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Manage Courses</li></a>
                    </>
                )}
                {isStaff() && loggedIn && (
                    <>
                        <a href="/manage-members"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Manage Members</li></a>
                        <a href="/courses"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Courses</li></a>
                    </>
                )}
                {loggedIn ? (
                    <>
                        <a href="/dashboard"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Dashboard</li></a>
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
