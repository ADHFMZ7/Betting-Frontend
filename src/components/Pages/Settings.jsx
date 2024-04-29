import React from 'react';
import { ModeToggle } from '../ModeToggle';
import Navbar from '../Navbar';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Settings = () => {
    return (
        <>
            <Navbar /> 
            <div>
                <h1>Settings</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Display</AccordionTrigger>
                        <AccordionContent>
                            <ModeToggle />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default Settings;