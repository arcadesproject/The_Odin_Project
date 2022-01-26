import React, { useState, useEffect } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Display from './components/Display';
import imagesData from './components/imagesData';

const App = () => {
  //durstenfeld shuffle algorithm to shuffle

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState(shuffle(imagesData));

  useEffect(() => {
    setCards(shuffle(cards));
  }, [cards]);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    if (score > best) {
      setBest(score);
    }
    setScore(0);
  };

  const setClicked = (item) => {
    setCards(cards.map((e) => (e.name === item.name ? { ...e, clicked: !e.clicked } : e)));
  };

  const resetCards = () => {
    setCards(shuffle(imagesData));
  };

  const turn = (e) => {
    const name = e.target.alt;
    const match = cards.find((item) => item.name === name);

    if (match.clicked === false) {
      incrementScore();
      setClicked(match);
    } else {
      resetScore();
      resetCards();
    }
  };

  return (
    <div className="App">
      <Scoreboard score={score} best={best} />
      <Display turn={turn} cards={cards} />
    </div>
  );
};

export default App;
