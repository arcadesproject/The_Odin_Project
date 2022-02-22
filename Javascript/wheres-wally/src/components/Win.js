const Win = (props) => {
  const { startGame, finalTime, convertTime, reset, switchPic } = props;
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
