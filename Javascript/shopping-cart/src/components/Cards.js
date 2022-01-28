const displayCard = (card) => {
  return (
    <div>
      <img src={card.src} alt={card.name}></img>
      <p>{card.name}</p>
      <input type="range" val={card.amount}></input>
    </div>
  );
};
