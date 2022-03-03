import { useEffect, useState } from 'react';
import { getBoard } from './Firebase';
import { Link } from 'react-router-dom';
import charInfo from '../data/charInfo';
import picInfo from '../data/picInfo';
import convertTime from '../utils/convertTime';

const Leaderboard = () => {
  const [leaderboardDisplay, setLeaderboardDisplay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let boards = [];
      for (let i = 1; i <= charInfo.length; i++) {
        const response = await getBoard(`${i}`);
        const boardData = await Promise.all(
          response.map(async (obj, index) => {
            const time = convertTime(obj.time);
            return (
              <div key={index} className="score">
                <p>{index + 1}.</p> <p>{obj.name}</p> <p>{time}</p>
              </div>
            );
          }),
        );
        boards.push(boardData);
      }
      const wrapped = boards.map((board, index) => {
        return (
          <div key={index} className="board">
            <div className="board-title">{picInfo[index].alt}</div>
            <div className="board-scores">{board}</div>
          </div>
        );
      });
      setLeaderboardDisplay(wrapped);
    };
    fetchData();
  }, []);

  return (
    <main>
      <header className="App-header">
        <h2>Leaderboards</h2>
        <Link to="/">
          <button className="board-btn">Home Page</button>
        </Link>
      </header>
      {leaderboardDisplay && <div className="leaderboards">{leaderboardDisplay}</div>}
    </main>
  );
};

export default Leaderboard;
