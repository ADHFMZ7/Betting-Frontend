import { useState } from 'react'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import { useAuth } from '../AuthProvider.jsx'
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Navbar from '../Navbar.jsx';

function Index() {

    const { token } = useAuth();

    return (
      <>
      <Navbar />


      <div id="root" className="min-h-screen bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-300 mb-2">Welcome to BuffyBets</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Your Ultimate Gambling Destination</p>
        </header>
  
        <main className="max-w-md mx-auto">
          <section className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">About BuffyBets</h2>
            <p className="text-gray-700 dark:text-gray-300">Experience the thrill of gambling with BuffyBets. We offer a wide range of exciting games and betting options to keep you entertained.</p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Sign Up Now</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Join BuffyBets today and start your gambling journey. Sign up now to enjoy exclusive bonuses and promotions.</p>
            {token === null ? 
            <>
              <Link to="/signup" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Sign Up</Link>
              <Link to="/login" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</Link>
            </> : 
            <>
            <Link to="/profile" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Profile</Link>
              <Link to="/games" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Games</Link>
            </>}
          </section>
        </main>
      </div>
      </>
    );
}

export default Index;