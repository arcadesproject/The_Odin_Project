import { Link } from 'react-router-dom';

const Header = (props) => {
  const { startBtn, startGame, reset } = props;
  return (
    <header className="App-header">
      <h2>Where's Wally?</h2>
      <div>
        <div className="header-btn-div">
          {/* hide/show start button */}
          {!startBtn && (
            <button className="start-btn" onClick={startGame}>
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
        <Link to="/">
          <button data-value="null" className="header-btn" onClick={reset}>
            Switch
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
