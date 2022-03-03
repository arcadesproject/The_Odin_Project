import { Link } from 'react-router-dom';

const Win = (props) => {
  const {
    startGame,
    finalTime,
    convertTime,
    reset,
    switchPic,
    handleSaveScore,
    showLeaderboard,
    viewBoard,
  } = props;
  const formattedTime = convertTime(finalTime);
  return (
    <section className="win-container">
      <div className="win">YOU WIN! Done in {formattedTime}</div>
      {showLeaderboard ? (
        <Link to="/leaderboard">
          <button onClick={viewBoard} className="replay-btn">
            View Leaderboard
          </button>
        </Link>
      ) : (
        <form onSubmit={handleSaveScore}>
          <label name="name">
            <input
              className="name-input"
              type="text"
              name="name"
              placeholder="Type a name to submit score"></input>
          </label>
          <input type="submit" value="Submit" className="replay-btn"></input>
        </form>
      )}
      <button
        className="replay-btn"
        onClick={() => {
          reset();
          startGame();
        }}>
        Replay?
      </button>
      <button
        data-value="0"
        className="replay-btn"
        onClick={(e) => {
          reset();
          switchPic(e);
        }}>
        Choose another picture?
      </button>
    </section>
  );
};

export default Win;
