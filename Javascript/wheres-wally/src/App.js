import Header from './components/Header';
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

  //show/remove character selection choice list
  const switchList = () => {
    setShowList(!showList);
  };

  //when answer is correct set found value on character object to true
  const handleAnswer = (character) => {
    const name = character;
    setCharacters(characters.map((c) => (c.name === name ? { ...c, found: !c.found } : c)));
  };

  //start the game, starts clock, allows handleclick etc.
  const startGame = () => {
    setStart(true);
  };

  //reset all values, clock and so on
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

  //ends game, but retains values to show time won, div saying you won
  const endGame = () => {
    setAnswer(null);
    setShowList(false);
    setChecked(false);
    setStart(false);
  };

  //click on main image when game started, title is from area html attribute
  const handleClick = (e) => {
    const { title } = e.target.dataset;
    if (start) {
      switchList();
      title ? setAnswer(title) : setAnswer(null);
      getCoords(e);
    }
  };

  //check to see if the name and location matches object, checked popup right/wrong
  const checkAnswer = (e) => {
    const { target } = e;
    if (answer === target.textContent) {
      handleAnswer(answer);
    }
    switchList();
    setChecked(true);
  };

  //coords to position answer list usefully
  const getCoords = (e) => {
    setXY({ x: e.pageX, y: e.pageY });
  };

  //so can display the time the game was completed in
  const storeWinTime = useCallback(() => {
    setFinalTime(time);
  }, [time]);

  //reset answer and checked values when checked state changes
  useEffect(() => {
    setTimeout(() => {
      setAnswer(null);
      setChecked(false);
    }, 1000);
  }, [checked]);

  //check if game is won everytime a character state is changed
  //it will be the found attribute
  //then ends game if all characters have found: true
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

  //starts timer once user had clicked to start or restart
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

  //convert seconds to hours: minutes: seconds
  //could probably use date-fns
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
      <Header start={start} startGame={startGame} reset={reset} />
      <CharBanner characters={characters} time={time} convertTime={convertTime} />
      <Picture
        characters={characters}
        showList={showList}
        switchList={switchList}
        handleClick={handleClick}
        start={start}
      />
      {/* character list toggle */}
      {showList && <CharSelection characters={characters} checkAnswer={checkAnswer} xy={xy} />}
      {/* popup div after an answer is checked */}
      {checked && <Found answer={answer} />}
      {/* popup when user wins */}
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
