import React from 'react';
import { ModeToggle } from '../ModeToggle';
import Navbar from '../Navbar';
import { useAuth } from '../AuthProvider';

const Settings = () => {
    const { token } = useAuth();

    return (
        <>
            <Navbar /> 
            <div>
                <h1>Settings</h1>
                <button onClick={
                    () => {
                        fetch('https://ootd.aldasouqi.com:8000/game/daily-login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                            }
                        }).then(response => response.json()).then(data => {
                            console.log(data);
                        }
                        );
                    }
                }></button>
            </div>
        </>
    );
};

export default Settings;