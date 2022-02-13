const CharSelection = (props) => {
  const { characters, checkAnswer, xy } = props;

  const filtered = characters.filter((character) => character.found !== true);
  const charList = filtered.map((c) => {
    return (
      <li className="choice-item" key={c.id} onClick={checkAnswer}>
        <p>{c.name}</p>
      </li>
    );
  });

  const style = {
    position: 'absolute',
    top: `${xy.y - 60}px`,
    left: `${xy.x + 5}px`,
  };

  return (
    <ul style={style} className="choice-menu">
      {charList}
    </ul>
  );
};

export default CharSelection;
