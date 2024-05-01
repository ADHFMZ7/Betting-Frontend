import React from 'react';
import { ModeToggle } from '../ModeToggle';
import Navbar from '../Navbar';
import { useAuth } from '../AuthProvider';
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Settings = () => {
    const { token } = useAuth();

    return (
        <>
            <Navbar /> 
            <div>
                <h1>Settings</h1>
                <button 
                className={cn(
                buttonVariants({ variant: "ghost" }),
                "mr-8 top-4 right-4 md:left-8 md:top-8 ")}
                    
                onClick={
                    () => {
                        fetch('https://ootd.aldasouqi.com:8000/game/daily-login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                            }
                        }).then(response => response.json()).then(data => {
                            alert("You have received 1000 free BuffyCoins!")
                        }
                        );
                    }
                }>FREE MONEY!!!!</button>
            </div>
        </>
    );
};

export default Settings;