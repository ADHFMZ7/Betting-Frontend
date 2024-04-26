import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'red' } },
  { option: '2', style: { backgroundColor: 'green'}},
  { option: '3', style: { backgroundColor: 'red' } },
]

export default function SpinWheel(props){

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
  
    const handleSpinClick = () => {
      if (!mustSpin) {


        setPrizeNumber(props.prizeNumber);
        setMustSpin(true);
        alert(`You won ${props.prizes[newPrizeNumber].option}`)
      }
    }
  
    return (
      <>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
  
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>
      </>
    )
  }