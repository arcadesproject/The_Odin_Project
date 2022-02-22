import Header from './components/Header';
import Picture from './components/Picture';
import CharBanner from './components/CharBanner';
import CharSelection from './components/CharSelection';
import Found from './components/Found';
import Win from './components/Win';
import charInfo from './data/charInfo';
import { useState, useEffect, useCallback } from 'react';
import getXY from './utils/scale';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [showList, setShowList] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [won, setWon] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [scale, setScale] = useState(1);
  const [currentPic, setCurrentPic] = useState('pic-0');

  const switchPic = (e) => {
    const { target } = e;
    const value = target.dataset.value;
    setCurrentPic(`pic-${value}`);
    const characterArray = charInfo[value - 1];
    setCharacters(characterArray); // value needs to be one two etc. that matches from picinfo.js imports
  };

  useEffect(() => {
    const picObserver = new ResizeObserver((entries) => {
      const width = entries[0].target.scrollWidth;
      const natural = entries[0].target.naturalWidth;
      const scale = Number((width / natural).toFixed(5));
      setScale(scale);
    });
    const pic = document.getElementById(`${currentPic}`);
    if (currentPic !== 'pic-0') picObserver.observe(pic);

    return () => {
      picObserver.disconnect();
    };
  }, [currentPic]);

  //show/remove character selection choice list
  const switchList = () => {
    setShowList(!showList);
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
    //need to set coords in picture.js areas, change on window resize etc?
    //set initial scale based on image size, nat width and update if changed etc.
    if (start) {
      switchList();
      title ? setAnswer(title) : setAnswer(null);
      getCoords(e);
    }
    // getXY(e);
  };

  //check to see if the name and location matches object, checked popup right/wrong
  const checkAnswer = (e) => {
    const { target } = e;
    if (answer === target.textContent) {
      handleAnswer(answer);
      setCorrect(true);
    }
    switchList();
    setChecked(true);
  };

  //when answer is correct set found value on character object to true
  const handleAnswer = (character) => {
    const name = character;
    setCharacters(characters.map((c) => (c.name === name ? { ...c, found: !c.found } : c)));
  };

  //reset answer and checked values when checked state changes
  useEffect(() => {
    setTimeout(() => {
      setAnswer(null);
      setChecked(false);
      setCorrect(false);
    }, 1000);
  }, [checked]);

  //coords to position answer list usefully
  const getCoords = (e) => {
    setXY({ x: e.pageX, y: e.pageY });
  };

  //so can display the time the game was completed in
  const storeWinTime = useCallback(() => {
    const currentTime = time;
    setFinalTime(currentTime);
  }, [time]);

  //check if game is won everytime a character state is changed
  //it will be the found attribute
  //then ends game if all characters have found: true
  useEffect(() => {
    const result = characters.every((item) => item.found === true);
    storeWinTime();
    setTimeout(() => {
      if (result && characters.length > 0) {
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
      {currentPic === 'pic-0' ? (
        <div>
          Test
          <button data-value="1" onClick={switchPic}>
            Switch 1
          </button>
          <button data-value="2" onClick={switchPic}>
            Switch 2
          </button>
        </div>
      ) : (
        <div>
          <Header start={start} startGame={startGame} reset={reset} switchPic={switchPic} />
          <CharBanner characters={characters} time={time} convertTime={convertTime} />
          <Picture
            characters={characters}
            handleClick={handleClick}
            scale={scale}
            currentPic={currentPic}
          />
          {/* character list toggle */}
          {showList && <CharSelection characters={characters} checkAnswer={checkAnswer} xy={xy} />}
          {/* popup div after an answer is checked */}
          {checked && <Found answer={answer} correct={correct} />}
          {/* popup when user wins */}
          {won && (
            <Win
              won={won}
              reset={reset}
              startGame={startGame}
              convertTime={convertTime}
              finalTime={finalTime}
              switchPic={switchPic}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
