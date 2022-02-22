const Header = (props) => {
  const { start, startGame, reset, switchPic } = props;
  return (
    <header className="App-header">
      <h2>Where's Wally?</h2>
      <div>
        <div className="header-btn-div">
          {/* hide/show start button */}
          {!start && (
            <button className="header-btn" onClick={startGame}>
              Start
            </button>
          )}
        </div>
      </div>
      <div className="header-btn-div">
        <button className="header-btn" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="header-btn-div">
        <button
          data-value="0"
          className="header-btn"
          onClick={(e) => {
            switchPic(e);
            reset();
          }}>
          Switch
        </button>
      </div>
    </header>
  );
};

export default Header;
