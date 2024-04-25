import React, { useState } from 'react';
import { useAuth } from '../AuthProvider.jsx';
import { parseJwt } from '../../utility.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { logout, token } = useAuth();
    let user = null;
    const navigate = useNavigate();


    if (token !== null) {
        user = parseJwt(token);
    }

    const handleLogout = () => {
        logout(); 
        navigate('/'); 
    };

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <strong>ID:</strong> {user === null ? null : user.id}
            </div>
            <div>
                <strong>Username:</strong> {user === null ? null : user.username}
            </div>
            <div>
                <strong>Date of Birth:</strong> {user === null ? null : user.dob}
            </div>
            <div>
                <strong>Credits:</strong> {user === null ? null : user.Credits}
            </div>

            <div> 
                <button onClick={handleLogout}>Sign Out</button>

            </div>
        </div>
    );
};

export default Profile;