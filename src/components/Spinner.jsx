import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'
import Navbar from './Navbar';
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]

export default function Spinner(props) {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
 
    // alert(`You won ${props.options[props.prizeNumber]}`)

    console.log(props.options[props.prizeNumber])

    const handleSpinClick = () => {
      if (!mustSpin) {
        setPrizeNumber(props.prizeNumber);
        setMustSpin(true);
      }
    }

    return (
        <>
        <Navbar />
        <div classname="flex flex-col items-center">
            <h1>Spin the wheel!</h1>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={props.prizeNumber}
            data={props.options}
            className=""
            onStopSpinning={() => {
              // setMustSpin(false);
              alert("You won " + props.options[props.prizeNumber].option);
            }}
          />
          <Button 
          disabled={mustSpin}
          className={cn(
          buttonVariants({ variant: "ghost" }),
          "mr-8 top-4 right-4 md:left-8 md:top-8 ")} onClick={handleSpinClick}>SPIN</Button>
        </div>
        </>
      )
    }