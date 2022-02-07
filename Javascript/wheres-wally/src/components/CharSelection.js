const CharSelection = (props) => {
  const { characters, checkAnswer } = props;

  const filtered = characters.filter((character) => character.found !== true);
  const charList = filtered.map((c) => {
    return (
      <li key={c.id} onClick={checkAnswer}>
        {c.name}
      </li>
    );
  });

  return <ul>{charList}</ul>;
};

export default CharSelection;
