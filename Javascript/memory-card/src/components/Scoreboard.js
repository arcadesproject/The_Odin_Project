const Scoreboard = (props) => {
  const { score, best } = props;

  return (
    <header>
      <p>Score: {score}</p>
      <p>Best: {best}</p>
    </header>
  );
};

export default Scoreboard;
