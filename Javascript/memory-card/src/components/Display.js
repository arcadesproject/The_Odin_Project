const Display = (props) => {
  const { turn, cards } = props;

  const cardsDisplay = cards.map((item) => (
    <li className="card-list" key={item.id}>
      <img className="card-img" src={item.src} alt={item.name} onClick={turn}></img>
      <p>{item.name}</p>
    </li>
  ));

  return (
    <section>
      <ul className="card-container">{cardsDisplay}</ul>
    </section>
  );
};

export default Display;
