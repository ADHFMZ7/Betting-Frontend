import React from 'react';
import { ModeToggle } from '../ModeToggle';
import Navbar from '../Navbar';

const Settings = () => {
    return (
        <>
            <Navbar /> 
            <div>
                <h1>Settings</h1>
                <ModeToggle />
            </div>
        </>
    );
};

export default Settings;