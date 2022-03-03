import chars from '../../assets/images/chars.png';

const CharBanner = (props) => {
  const { characters, time, convertTime } = props;

  const formattedTime = convertTime(time);

  const charMapped = characters.map((character, index) => {
    return (
      <li key={index}>
        {character.found ? (
          <p className="found">{character.name}</p>
        ) : (
          <p className="not-found">{character.name}</p>
        )}
      </li>
    );
  });

  return (
    <section className="character-banner">
      <img className="characters-img" src={chars} alt="Characters to find"></img>
      <div className="banner-list-container">
        <ul className="banner-list">{charMapped}</ul>
      </div>
      <div>{formattedTime}</div>
    </section>
  );
};

export default CharBanner;
