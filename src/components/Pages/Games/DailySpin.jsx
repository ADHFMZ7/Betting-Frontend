import React, { useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState } from 'react'
import { useAuth } from '../../AuthProvider';
import Spinner from '../../Spinner';

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
]


export default function DailySpin() {
    const [options, setOptions] = useState([
      { option: '0' },
      { option: '1' },
      { option: '2' },
    ]);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const { token } = useAuth();
  
    useEffect(() => {
        fetch('https://ootd.aldasouqi.com:8000/game/daily-spin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token, 
            },
        }).then(response => response.json()).then(data => {
            setPrizeNumber(data.win_index);
            // fix the data to match the structure of the data in Spinner.jsx
            data.options = data.options.map(option => {
                return {option: option}
            });
            setOptions(data.options);
          });
      }, []); 
  
    return (
      <>
        <Spinner options={options} prizeNumber={prizeNumber} />
      </>
    )
  }