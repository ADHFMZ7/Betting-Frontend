// // import React from 'react'
// // import { Wheel } from 'react-custom-roulette'
// // import { useState } from 'react'

// // const data = [
// //   { option: '00', textColor: 'white', style: { backgroundColor: 'green',}},
// //   { option: '27', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '10', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '25', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '29', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '12', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '8', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '19', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '31', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '18', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '6', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '21', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '33', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '16', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '4', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '23', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '35', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '14', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '2', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '0', textColor: 'white', style: { backgroundColor: 'green' } },
// //   { option: '28', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '9', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '26', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '30', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '11', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '7', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '20', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '32', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '17', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '5', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '22', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '34', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '15', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '3', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '24', textColor: 'white', style: { backgroundColor: 'black'}},
// //   { option: '13', textColor: 'white', style: { backgroundColor: 'red' } },
// //   { option: '1', textColor: 'white', style: { backgroundColor: 'black'}},
// // ]

// // export default function Roulette(){

// //     const [mustSpin, setMustSpin] = useState(false);
// //     const [prizeNumber, setPrizeNumber] = useState(0);
  
// //     const handleSpinClick = () => {
// //       if (!mustSpin) {

// //         const prizeNumber = fetch('http://localhost:8000/games/', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //         },
// //       }).then(response => response.json()).then(data => {
// //           console.log(data);
// //         }).catch(error => {
// //           console.error('Error:', error);
// //         }
// //         );

// //         setPrizeNumber(prizeNumber);
// //         setMustSpin(true);
// //         alert(`You won ${props.prizes[prizeNumber].option}`)
// //       }
// //     }
//   // import React, { useState } from 'react';

//   // export default function Roulette() {
//   //   const [mustSpin, setMustSpin] = useState(false);
//   //   const [prizeNumber, setPrizeNumber] = useState(0);
//   //   const [selectedOption, setSelectedOption] = useState('');

//   //   const handleOptionSelect = (option) => {
//   //     setSelectedOption(option);
//   //   };

//   //   return (
//   //     <>
//   //       <div>
//   //         {data.map((option) => (
//   //           <button
//   //             key={option.option}
//   //             style={option.style}
//   //             onClick={() => handleOptionSelect(option.option)}
//   //           >
//   //             {option.option}
//   //           </button>
//   //         ))}
//   //       </div>
//   //       <button onClick={handleSpinClick}>SPIN</button>
//   //     </>
//   //   );
//   // }

// //   import { useState } from 'react';

// // import RoulettePro from 'react-roulette-pro';
// // import 'react-roulette-pro/dist/index.css';
// // import Navbar from '../../Navbar';

// // const prizes = [
// //   {
// //     title: 'Prize 0',
// //     image: 'one.png',
// //   },
// // ];

// // const winPrizeIndex = 0;

// // const reproductionArray = (array = [], length = 0) => [
// //   ...Array(length)
// //     .fill('_')
// //     .map(() => array[Math.floor(Math.random() * array.length)]),
// // ];

// // const reproducedPrizeList = [
// //   ...prizes,
// //   ...reproductionArray(prizes, prizes.length * 3),
// //   ...prizes,
// //   ...reproductionArray(prizes, prizes.length),
// // ];

// // const generateId = () =>
// //   `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

// // const prizeList = reproducedPrizeList.map((prize) => ({
// //   ...prize,
// //   id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
// // }));

// // const Roulette = () => {
// //   const [start, setStart] = useState(false);
// //   const [bet, setBet] = useState(0); // New state for the bet

// //   const prizeIndex = prizes.length * 4 + winPrizeIndex;

// //   const handleStart = () => {
// //     setStart((prevState) => !prevState);
// //   };

// //   const handlePrizeDefined = () => {
// //     alert('You won ' + prizes[winPrizeIndex].title);
// //   };

// //   // New function to handle bet changes
// //   const handleBetChange = (event) => {
// //     setBet(event.target.value);
// //   };
//   import React from 'react';
//   import RoulettePro from 'react-roulette-pro';
//   import { RouletteTable } from 'react-casino-roulette';
//   import { useState } from 'react';
//   import 'react-roulette-pro/dist/index.css';
//   import Navbar from '../../Navbar';


//   const prizes = [
//     {
//       title: 'Prize 0',
//       image: 'one.png',
//     },
//   ];

//   const winPrizeIndex = 0;

//   const reproductionArray = (array = [], length = 0) => [
//     ...Array(length)
//       .fill('_')
//       .map(() => array[Math.floor(Math.random() * array.length)]),
//   ];

//   const reproducedPrizeList = [
//     ...prizes,
//     ...reproductionArray(prizes, prizes.length * 3),
//     ...prizes,
//     ...reproductionArray(prizes, prizes.length),
//   ];

//   const generateId = () =>
//     `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

//   const prizeList = reproducedPrizeList.map((prize) => ({
//     ...prize,
//     id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
//   }));

//   const Roulette = () => {
//     const [start, setStart] = useState(false);
//     const [bet, setBet] = useState(0); // New state for the bet
//     const prizeIndex = prizes.length * 4 + winPrizeIndex;

//     const handleStart = () => {
//       setStart((prevState) => !prevState);
//     };

//     const handlePrizeDefined = () => {
//       alert('You won ' + prizes[winPrizeIndex].title);
//     };

//     // New function to handle bet changes
//     const handleBetChange = (event) => {
//       setBet(event.target.value);
//     };

//     return (
//       <>
//         <Navbar />
//         <h1 className="text-3xl font-bold">Roulette</h1>


//         <RoulettePro
//           prizes={prizeList}
//           prizeIndex={prizeIndex}
//           start={start}
//           onPrizeDefined={handlePrizeDefined}
//           options={{
//             stopInCenter: true,
//           }}
//         />

//         <Table></Table>

//         <button
//           onClick={handleStart}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//         >
//           Start
//         </button>
//       </>
//     );
//   };

// const Table = () => {
//   const [bets, setBets] = useState({});

//   const handleBet = (betData) => {
//     const { id } = betData;

//     setBets((prevState) => ({
//       ...prevState,
//       [id]: {
//         icon: 'https://cdn-icons-png.flaticon.com/512/10095/10095709.png',
//     },
//   }));
// };

//   return (
//     <div style={{ maxWidth: 800, margin: 'auto' }}>
//       <RouletteTable bets={bets} onBet={handleBet} />
//     </div>
//   );
// };

// //   export default Roulette;
// //   return (
// //     <>
// //       <Navbar />
// //       <h1>Roulette</h1>
// //       <h2>Place your bet</h2>
// //       <p>Current bet: {bet}</p>


// //       <RoulettePro
// //         prizes={prizeList}
// //         prizeIndex={prizeIndex}
// //         start={start}
// //         onPrizeDefined={handlePrizeDefined}
// //         options={{
// //           stopInCenter: true,
// //         }}
// //       />
// //       <input type="number" value={bet} onChange={handleBetChange} /> {/* New input for the bet */}
// //       <button onClick={handleStart}>Start</button>
// //     </>
// //   );
// // };


// export default Roulette;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { RouletteTable, RouletteWheel } from 'react-casino-roulette';
import 'react-casino-roulette/dist/index.css';
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import whiteChip from '../../../assets/white-chip.png';
import blueChip from '../../../assets/blue-chip.png';
import blackChip from '../../../assets/black-chip.png';
import cyanChip from '../../../assets/cyan-chip.png';
import Navbar from '../../Navbar';


// import './App.css';

const API = {
  getRandomBet: async () => {
    return getRandomRouletteWinBet();
  },
};

const chipsMap = {
  whiteChip: {
    icon: whiteChip,
    value: 1,
  },
  blueChip: {
    icon: blueChip,
    value: 10,
  },
  blackChip: {
    icon: blackChip,
    value: 100,
  },
  cyanChip: {
    icon: cyanChip,
    value: 500,
  },
};

const calcTotalBet = (bets) =>
  Object.entries(bets).reduce((acc, [, value]) => acc + value.number, 0);

const Roulette = () => {
  const [bets, setBets] = useState({});
  const [betHistory, setBetHistory] = useState([]);
  const [activeChip, setActiveChip] = useState(Object.keys(chipsMap)[0]);
  const [shouldShowData, setShouldShowData] = useState(false);

  const [isRouletteWheelSpinning, setIsRouletteWheelSpinning] = useState(false);
  const [rouletteWheelStart, setRouletteWheelStart] = useState(false);
  const [rouletteWheelBet, setRouletteWheelBet] = useState('-1');

  useEffect(() => {
    const backgroundIndex = getRandomInt(0, 5);
    const backgroundClass = `bg-${backgroundIndex}`;

    document.body.classList.add(backgroundClass);

    return () => {
      document.body.classList.remove(backgroundClass);
    };
  }, []);

  useEffect(() => {
    if (rouletteWheelBet === '-1' || rouletteWheelStart === true) {
      return;
    }

    setRouletteWheelStart(true);
  }, [rouletteWheelBet, rouletteWheelStart]);

  useEffect(() => {
    if (isRouletteWheelSpinning === false) {
      return;
    }

    const prepare = async () => {
      const bet = await API.getRandomBet();
      console.info('gotta win bet', bet);

      setRouletteWheelStart(false);
      setRouletteWheelBet(bet);
    };

    prepare();
  }, [isRouletteWheelSpinning]);

  const handleDoSpin = () => {
    setIsRouletteWheelSpinning(true);
  };

  const handleEndSpin = () => {
    setIsRouletteWheelSpinning(false);
  };
  // end you are here for

  const undoLastBet = () => {
    if (betHistory.length === 0) {
      console.error('Nothing to undo');
      return;
    }

    setBets((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));

      const lastBet = betHistory[betHistory.length - 1];
      const prevIcon = betHistory[betHistory.length - 2]?.icon;

      const { id: lastBetId, value } = lastBet;

      if (state[lastBetId].number === 1) {
        delete state[lastBetId];
        return state;
      }

      state[lastBetId].icon = prevIcon;
      state[lastBetId].number -= value;

      console.log('state', state, 'lastBetId', lastBetId, 'value', value)

      return state;
    });

    setBetHistory((prevState) => prevState.slice(0, -1));
  };

  const cleanAllBets = () => {
    setBetHistory([]);
    setBets({});
  };

  const addBet = (id) => {
    const { icon, value } = chipsMap[activeChip];

    setBetHistory((prevState) => [...prevState, { id, icon, value }]);

    setBets((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));

      if (state[id] !== undefined) {
        state[id] = {
          ...state[id],
          icon,
          number: state[id].number + value,
        };
        return state;
      }

      state[id] = {
        icon,
        number: value,
      };

      return state;
    });
  };


  const handleOnBet = ({ bet, payload, id }) => {
    console.info(
      'handleOnBet',
      `bet ===> ${bet}`,
      'payload ===>',
      payload,
      'id ===> ',
      id,
    );

    addBet(id);
  };

  const handleChipChange = (event) => {
    const chipName = event.target.closest('[data-name]').dataset.name;

    setActiveChip(chipName);
  };

  const handleShowData = () => {
    setShouldShowData((prevState) => !prevState);
  };

  const totalBet = calcTotalBet(bets);

  return (
    <div>
      <Navbar />
      <br></br>
      <h1 className="heading">Roulette</h1>
      <div className="roulette-wheel-wrapper">
        <RouletteWheel
          start={rouletteWheelStart}
          winningBet={rouletteWheelBet}
          onSpinningEnd={handleEndSpin}
        />
        <div className="buttons">
          <button
            type="button"
            disabled={isRouletteWheelSpinning}
            onClick={handleDoSpin}
          >
            Let&apos;s go
          </button>
          {/* <button type="button" onClick={handleDoSpin}>
            Spin
          </button> */}
        </div>
      </div>
      <div className="roulette-wrapper">
        <RouletteTable onBet={handleOnBet} bets={bets} />
        <div className="flex flex-col">
          <ul className="flex flex-row justify-center mt-3">
            {Object.entries(chipsMap).map(([name, { icon }]) => (
              <li
                key={name}
                data-name={name}
                className={activeChip === name ? 'scale-105 m[28px]' : 'm-1'}
                onClick={handleChipChange}
              >
                <img width={64} height={64} src={icon} alt="chip" />
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <h1 className="text-2xl">Total bet: {totalBet}</h1>
          </div>
          <div className="flex align-middle justify-center">
            <button type="button" onClick={undoLastBet}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mr-8 top-4 right-4 md:left-8 md:top-8 text-2xl"
            )}>
              Undo
            </button>
            <button type="button" onClick={cleanAllBets}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mr-8 top-4 right-4 md:left-8 md:top-8 text-2xl"
            )}>
              Clean
            </button>
            <button type="button" onClick={handleShowData}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mr-8 top-4 right-4 md:left-8 md:top-8 text-2xl"
            )}>
              {shouldShowData === false ? 'Show' : 'Hide'} data
            </button>
          </div>
        </div>
        <div>
          {shouldShowData === true && (
            <p className="data">{JSON.stringify(bets, null, 2)}</p>
          )}
        </div>
        <div style={{ height: 50 }} />
      </div>
    </div>
  );
};

const getRandomRouletteWinBet = () => {
  const possibleWinBets = [
    '0',
    '00',
    ...Array.from({ length: 36 }, (_, i) => `${i + 1}`),
  ];

  const randomIndex =
    window.crypto.getRandomValues(new Uint32Array(1))[0] %
    possibleWinBets.length;

    console.log('randomIndex', randomIndex)
    console.log('possibleWinBets', possibleWinBets)
    console.log('possibleWinBets[randomIndex]', possibleWinBets[randomIndex])

  return possibleWinBets[randomIndex];
};

const getRandomInt = (minNumber, maxNumber) => {

  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default Roulette;