import React, { useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'
import { useAuth } from '../../AuthProvider';

export default function DailySpin(props){

    const [mustSpin, setMustSpin] = useState(false);
    const [options, setOptions] = useState([]);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const {token} = useAuth();

    console.log(token);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/game/daily-spin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token, 
            },
        }).then(response => response.json()).then(data => {
            console.log(data);
            setPrizeNumber(data.rand_credits);
            setOptions(data.options);
        }
        );
    }
    );



    const handleSpinClick = () => {
      if (!mustSpin) {
        setPrizeNumber(1);
        setMustSpin(true);
        alert(`You won ${props.prizes[PrizeNumber].option}`)
      }
    }
  
    return (
      <>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={options}
  
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>
      </>
    )
  }