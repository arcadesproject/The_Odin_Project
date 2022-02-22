const Found = (props) => {
  const { answer, correct } = props;

  return (
    <section className="found-container">
      {correct ? (
        <p className="found-right">You found {answer}!</p>
      ) : (
        <p className="found-wrong">Not there! Try again.</p>
      )}
    </section>
  );
};

export default Found;
