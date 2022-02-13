import Picture from './components/Picture';
import CharBanner from './components/CharBanner';
import CharSelection from './components/CharSelection';
import Found from './components/Found';
import Win from './components/Win';
import uniqid from 'uniqid';
import { useState, useEffect, useCallback } from 'react';

// const getXY = (e) => {
//   const { target } = e;
//   //get equivalent to offsetX, offsetY or nativeEvent.offsetX etc.
//   const rect = e.target.getBoundingClientRect();
//   var x = e.clientX - rect.left;
//   var y = e.clientY - rect.top;
//   //width of source image, scale to know how much smaller
//   const maxWidth = target.width;
//   const scale = getScale(maxWidth, target.scrollWidth);
//   //get middle point to know how much to add to values
//   const center = getCenter(target.scrollWidth, target.scrollHeight);
//   const relX = x - center.x;
//   const relY = y - center.y;
//   //get scaled value
//   const scaledX = relX * scale;
//   const scaledY = relY * scale;
//   //add back to middle points for true value
//   console.log(Number((scaledX + center.x).toFixed(5)), Number((scaledY + center.y).toFixed(5)));
//   return {
//     x: Number((scaledX + center.x).toFixed(5)),
//     y: Number((scaledY + center.y).toFixed(5)),
//   };
// };

// const getScale = (width, maxWidth) => {
//   return maxWidth / width;
// };

// const getCenter = (width, height) => {
//   const left = width / 2;
//   const top = height / 2;
//   return { x: left, y: top };
// };

const App = () => {
  const [characters, setCharacters] = useState([
    { name: 'Wally', id: uniqid(), found: false },
    { name: 'Woof', id: uniqid(), found: false },
    { name: 'Wilma', id: uniqid(), found: false },
    { name: 'Wizard', id: uniqid(), found: false },
    { name: 'Odlaw', id: uniqid(), found: false },
  ]);
  const [showList, setShowList] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [checked, setChecked] = useState(false);
  const [won, setWon] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  const switchList = () => {
    setShowList(!showList);
  };

  const handleAnswer = (character) => {
    const name = character;
    setCharacters(characters.map((c) => (c.name === name ? { ...c, found: !c.found } : c)));
  };

  const startGame = () => {
    setStart(true);
  };

  const reset = () => {
    setCharacters(
      characters.map((c) => {
        return { ...c, found: false };
      }),
    );
    setWon(false);
    setTime(0);
    endGame();
  };

  const endGame = () => {
    setAnswer(null);
    setShowList(false);
    setChecked(false);
    setStart(false);
  };

  const handleClick = (e) => {
    const { title } = e.target.dataset;
    if (start) {
      switchList();
      title ? setAnswer(title) : setAnswer(null);
      getCoords(e);
    }
  };

  const checkAnswer = (e) => {
    const { target } = e;
    if (answer === target.textContent) {
      handleAnswer(answer);
    }
    switchList();
    setChecked(true);
  };

  const getCoords = (e) => {
    setXY({ x: e.pageX, y: e.pageY });
  };

  const storeWinTime = useCallback(() => {
    setFinalTime(time);
  }, [time]);

  //function to say if correct or not
  useEffect(() => {
    setTimeout(() => {
      setAnswer(null);
      setChecked(false);
    }, 1000);
  }, [checked]);

  useEffect(() => {
    const result = characters.every((item) => item.found === true);
    storeWinTime();
    setTimeout(() => {
      if (result) {
        setWon(true);
        endGame();
      }
    }, 1800);
  }, [characters, storeWinTime]);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const convertTime = (seconds) => {
    var h = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, '0'),
      m = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, '0'),
      s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0');

    return h + ':' + m + ':' + s;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Where's Wally?</h2>
        <div>
          <div className="header-btn-div">
            {!start && (
              <button className="header-btn" onClick={startGame}>
                Start
              </button>
            )}
          </div>
        </div>
        <div className="header-btn-div">
          <button className="header-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </header>
      <CharBanner characters={characters} time={time} convertTime={convertTime} />
      <Picture
        characters={characters}
        showList={showList}
        switchList={switchList}
        handleClick={handleClick}
        start={start}
      />
      {showList && <CharSelection characters={characters} checkAnswer={checkAnswer} xy={xy} />}
      {checked && <Found answer={answer} />}
      {won && (
        <Win
          won={won}
          reset={reset}
          startGame={startGame}
          convertTime={convertTime}
          finalTime={finalTime}
        />
      )}
    </div>
  );
};

export default App;
