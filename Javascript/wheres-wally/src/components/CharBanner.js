import chars from '../assets/images/chars.png';

const CharBanner = (props) => {
  const { characters, time, convertTime } = props;

  const formattedTime = convertTime(time);

  return (
    <section className="character-banner">
      <img className="characters-img" src={chars} alt="Characters to find"></img>
      <div className="banner-list-container">
        <ul className="banner-list">
          <li>
            {characters[0].found ? (
              <p className="found">Wally</p>
            ) : (
              <p className="not-found">Wally</p>
            )}
          </li>
          <li>
            {characters[1].found ? (
              <p className="found">Woof</p>
            ) : (
              <p className="not-found">Woof</p>
            )}
          </li>
          <li>
            {characters[2].found ? (
              <p className="found">Wilma</p>
            ) : (
              <p className="not-found">Wilma</p>
            )}
          </li>
          <li>
            {characters[3].found ? (
              <p className="found">Wizard</p>
            ) : (
              <p className="not-found">Wizard</p>
            )}
          </li>
          <li>
            {characters[4].found ? (
              <p className="found">Odlaw</p>
            ) : (
              <p className="not-found">Odlaw</p>
            )}
          </li>
        </ul>
      </div>
      <div>{formattedTime}</div>
    </section>
  );
};

export default CharBanner;
