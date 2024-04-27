import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'

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
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={props.prizeNumber}
            data={props.options}
    
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          <button onClick={handleSpinClick}>SPIN</button>
        </>
      )
    }