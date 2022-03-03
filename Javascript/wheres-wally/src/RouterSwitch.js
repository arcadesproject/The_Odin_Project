import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Main from './components/Main';
import Game from './components/Game/Game';
import Leaderboard from './components/Leaderboard';
import charInfo from './data/charInfo';

const RouterSwitch = () => {
  const [currentPic, setCurrentPic] = useState('pic-1');
  const [leaderboard, setLeaderboard] = useState(1);
  const [characters, setCharacters] = useState(charInfo[0]);

  const switchPic = (e) => {
    const { target } = e;
    const value = target.dataset.value;
    setCurrentPic(`pic-${value}`);
    const characterArray = charInfo[value - 1];
    manageCharacters(characterArray);
    setLeaderboard(value);
  };

  const manageCharacters = (f) => {
    setCharacters(f);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main switchPic={switchPic} />} />
            <Route
              path="game"
              element={
                <Game
                  switchPic={switchPic}
                  currentPic={currentPic}
                  leaderboard={leaderboard}
                  characters={characters}
                  manageCharacters={manageCharacters}
                />
              }
            />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RouterSwitch;
