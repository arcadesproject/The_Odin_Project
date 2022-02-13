const Win = (props) => {
  const { startGame, finalTime, convertTime, reset } = props;
  const formattedTime = convertTime(finalTime);
  return (
    <section className="win-container">
      <div className="win">YOU WIN! Done in {formattedTime}</div>
      <button
        className="replay-btn"
        onClick={() => {
          reset();
          startGame();
        }}>
        Replay?
      </button>
    </section>
  );
};

export default Win;
