import Header from './Header';
import Picture from './Picture';
import CharBanner from './CharBanner';
import CharSelection from './CharSelection';
import Found from './Found';
import Win from './Win';
import { useEffect, useState, useCallback } from 'react';
import { saveScore } from '../Firebase';
import convertTime from '../../utils/convertTime';

const Game = (props) => {
  const { currentPic, leaderboard, characters, manageCharacters, switchPic } = props;

  const [showList, setShowList] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [won, setWon] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [scale, setScale] = useState(1);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const [startBtn, setStartBtn] = useState(false);

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
    setStartBtn(true);
  };

  //reset all values, clock and so on
  const reset = () => {
    manageCharacters(
      characters.map((c) => {
        return { ...c, found: false };
      }),
    );
    setWon(false);
    setTime(0);
    setStartBtn(false);
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
    manageCharacters(characters.map((c) => (c.name === name ? { ...c, found: !c.found } : c)));
  };

  //reset answer and checked values when checked state changes
  useEffect(() => {
    setTimeout(() => {
      setAnswer(null);
      setChecked(false);
      setCorrect(false);
    }, 1000);

    return () => {};
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

  const handleSaveScore = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.name.value;
    console.log(leaderboard);
    if (name === '') {
      alert('Please enter a name!');
    } else {
      saveScore(leaderboard, name, finalTime);
      setShowLeaderboard(true);
    }
  };

  const viewBoard = () => {
    reset();
  };

  return (
    <section>
      <Header startBtn={startBtn} startGame={startGame} reset={reset} switchPic={switchPic} />
      <CharBanner characters={characters} time={time} convertTime={convertTime} />
      <Picture
        characters={characters}
        handleClick={handleClick}
        scale={scale}
        currentPic={currentPic}
      />
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
          leaderboard={leaderboard}
          handleSaveScore={handleSaveScore}
          showLeaderboard={showLeaderboard}
          viewBoard={viewBoard}
          switchPic={switchPic}
        />
      )}
    </section>
  );
};

export default Game;
