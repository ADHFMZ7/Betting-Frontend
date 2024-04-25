import React, { useState } from 'react';
import {Form, useNavigate} from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function signup() {
        const payload = {
            username: username,
            dob: dob,
            password: password
        };

        const navigate = useNavigate();

        fetch('http://127.0.0.1:8000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                // Handle response data
                console.log(data);
                navigate('/login');
            })
            .catch(error => {
                alert('An error occurred. Please try again later.')
                // Handle error
            });
    }


    return (
        <div className="container">
            <h1>Signup</h1>
{/* 
            <Form method="post" action=>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={event => setUsername(event.target.value)} required /><br /><br />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={dob} onChange={event => setDob(event.target.value)} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} required /><br /><br />

                <input type="submit" value="Signup" />
            </Form> */}

            <form onSubmit={event => { event.preventDefault(); signup(); }}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={event => setUsername(event.target.value)} required /><br /><br />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={dob} onChange={event => setDob(event.target.value)} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} required /><br /><br />

                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Signup;
