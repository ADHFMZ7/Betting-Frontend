import React, { useEffect, useState } from 'react';
import { RouletteTable, RouletteWheel } from 'react-casino-roulette';
import 'react-casino-roulette/dist/index.css';
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useAuth } from '../../AuthProvider';
import whiteChip from '../../../assets/white-chip.png';
import blueChip from '../../../assets/blue-chip.png';
import blackChip from '../../../assets/black-chip.png';
import cyanChip from '../../../assets/cyan-chip.png';
import Navbar from '../../Navbar';
import RouletteSpin from '../RouletteSpin';


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
  const [winningBet, setWinningBet] = useState(null);


  const [start, setStart] = useState(true);
  const { token } = useAuth();

  const [isRouletteWheelSpinning, setIsRouletteWheelSpinning] = useState(false);
  // const [rouletteWheelStart, setRouletteWheelStart] = useState(false);
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
    // if (rouletteWheelBet === '-1' || rouletteWheelStart === true) {
    if (!rouletteWheelBet || start) {
      return;
    }

    setStart(true);
  // }, [rouletteWheelBet, rouletteWheelStart]);
  }, [rouletteWheelBet, start]);


  useEffect(() => {
    if (isRouletteWheelSpinning === false) {
      return;
    }
  
    const prepare = async () => {
      const response = await fetch('https://ootd.aldasouqi.com:8000/game/roulette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({bets}),
      }).then((response) => response.json());
      const bet = response.winning_number;
      setStart(false);
      setWinningBet(response.winning_number);
      console.info('gotta win bet', bet);
    };
  
    prepare();
  }, [isRouletteWheelSpinning]);
  
  const handleDoSpin = () => {
    setIsRouletteWheelSpinning(true);
  }

  const handleEndSpin = () => {
    setIsRouletteWheelSpinning(false);
  };

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
      <div className="roulette-wheel-wrapper">
        {/* <RouletteSpin winPrizeIndex={winningBet} setWinPrizeIndex={setWinningBet} start={start} setStart={setIsRouletteWheelSpinning}/> */}
        <RouletteSpin winPrizeIndex={winningBet} start={start} handleEndSpin={handleEndSpin}/>
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
            <button type="button" onClick={handleDoSpin}
            disabled={isRouletteWheelSpinning} 
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mr-8 top-4 right-4 md:left-8 md:top-8 text-2xl"
            )}>
              Spin
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
