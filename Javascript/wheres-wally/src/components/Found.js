const Found = (props) => {
  const { answer } = props;

  return (
    <section className="found-container">
      {answer === null ? (
        <p className="found-wrong">Not there! Try again.</p>
      ) : (
        <p className="found-right">You found {answer}!</p>
      )}
    </section>
  );
};

export default Found;
