import { useState } from 'react';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';



let prizes = [...Array(36).keys()].map((index) => ({
    id: index,
    image: "https://github.com/ADHFMZ7/Betting-Frontend/blob/main/src/assets/roulette/" + index + ".png?raw=true",
}));

// prizes.append({
//     id: 37,
//     image: "https://github.com/ADHFMZ7/Betting-Frontend/blob/main/src/assets/roulette/00.png?raw=true",
// })

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
}));

const RouletteSpin = (props) => {

    const winPrizeIndex = props.winPrizeIndex;
    // const setWinPrizeIndex = props.setWinPrizeIndex;
    const start = props.start;
    // const setStart = props.setStart;
    const handleEndSpin = props.handleEndSpin;

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    setStart(false);
    alert("You won " + prizes[winPrizeIndex].id);
  };

  return (
    <>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handleEndSpin}
        options={{stopInCenter: true}}
      />
    </>
  );
};

export default RouletteSpin;