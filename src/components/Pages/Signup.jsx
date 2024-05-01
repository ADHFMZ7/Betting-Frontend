import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function Signup() {
    const [input, setInput] = useState({
        username: '',
        dob: '',
        password: '',
    });
    const navigate = useNavigate();

    function signup() {
        fetch('https://ootd.aldasouqi.com:8000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: input.username,
              dob: input.dob,
              password: input.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            navigate('/login');
        })
        .catch(error => {
            alert('An error occurred. Please try again later.')
        });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
        <Card className="w-[350px]">
            <form onSubmit={(e) => { e.preventDefault(); signup(); }} className="max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>Sign up to start playing!</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={input.username}
                            onChange={handleInput}
                            placeholder="Username"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={input.dob}
                            onChange={handleInput}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={handleInput}
                            placeholder="Password"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Sign Up</Button>
                    </div>
                </CardFooter>
            </form>
        </Card>
        <p className="text-sm text-gray-700 dark:text-gray-300">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
    );
}

export default Signup;