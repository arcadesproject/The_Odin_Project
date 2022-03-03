import { Link } from 'react-router-dom';
import pics from '../data/picInfo';

const Main = (props) => {
  const { switchPic } = props;

  const picsMap = pics.map((pic, index) => {
    return (
      <Link key={index} to="game">
        <div className="pic-link-div">
          <p>{pic.alt}</p>
          <img
            className="pic-link"
            src={pic.src}
            data-value={`${index + 1}`}
            onClick={switchPic}
            alt={`${pic.alt} link`}></img>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <header className="App-header">
        <h2 className="main-h2">Where's Wally?</h2>
        <Link to="leaderboard">
          <button className="board-btn">Leaderboard</button>
        </Link>
      </header>
      <section className="pic-select">{picsMap}</section>
    </div>
  );
};

export default Main;
