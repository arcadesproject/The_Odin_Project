import Picture from './components/Picture';
import Characters from './components/Characters';
import CharSelection from './components/CharSelection';
import uniqid from 'uniqid';
import { useState } from 'react';

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
    { name: 'Wizard', id: uniqid(), found: false },
    { name: 'Woof', id: uniqid(), found: false },
    { name: 'Odlaw', id: uniqid(), found: false },
    { name: 'Wilma', id: uniqid(), found: false },
  ]);
  const [showList, setShowList] = useState(false);
  const [answer, setAnswer] = useState(null);

  const switchList = () => {
    setShowList(!showList);
  };

  const handleAnswer = (character) => {
    const name = character;
    setCharacters(characters.map((c) => (c.name === name ? { ...c, found: !c.found } : c)));
  };

  const resetFound = () => {
    setCharacters(
      characters.map((c) => {
        return { ...c, found: false };
      }),
    );
  };

  const handleClick = (e) => {
    const { title } = e.target;
    switchList();
    title ? setAnswer(title) : setAnswer(null);
  };

  const checkAnswer = (e) => {
    const { target } = e;
    if (answer === target.textContent) {
      handleAnswer(answer);
    }
    setAnswer(null);
    switchList();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Header</h2>
      </header>
      <button onClick={resetFound}>Reset</button>
      <Characters />
      <Picture
        characters={characters}
        showList={showList}
        switchList={switchList}
        handleClick={handleClick}
      />
      {showList && <CharSelection characters={characters} checkAnswer={checkAnswer} />}
    </div>
  );
};

export default App;
