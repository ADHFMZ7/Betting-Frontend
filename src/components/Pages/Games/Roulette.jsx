import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'

const data = [
  { option: '00', textColor: 'white', style: { backgroundColor: 'green',}},
  { option: '27', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '10', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '25', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '29', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '12', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '8', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '19', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '31', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '18', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '6', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '21', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '33', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '16', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '4', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '23', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '35', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '14', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '2', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '0', textColor: 'white', style: { backgroundColor: 'green' } },
  { option: '28', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '9', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '26', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '30', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '11', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '7', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '20', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '32', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '17', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '5', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '22', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '34', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '15', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '3', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '24', textColor: 'white', style: { backgroundColor: 'black'}},
  { option: '13', textColor: 'white', style: { backgroundColor: 'red' } },
  { option: '1', textColor: 'white', style: { backgroundColor: 'black'}},
]

export default function Roulette(props){

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
  
    const handleSpinClick = () => {
      if (!mustSpin) {

        const prizeNumber = fetch('http://localhost:8000/games/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
      }).then(response => response.json()).then(data => {
          console.log(data);
        }).catch(error => {
          console.error('Error:', error);
        }
        );

        setPrizeNumber(props.prizeNumber);
        setMustSpin(true);
        alert(`You won ${props.prizes[PrizeNumber].option}`)
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