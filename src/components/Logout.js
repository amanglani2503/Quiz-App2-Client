import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/LogOut.css'

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logged Out")
        localStorage.clear(); // Clear all items from local storage
        navigate("/student/login");
    };

    return (
        <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};