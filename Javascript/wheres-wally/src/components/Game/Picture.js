import pics from '../../data/picInfo';

const Picture = (props) => {
  const { handleClick, characters, scale, currentPic } = props;

  const pic = pics.find((pic) => pic.id === currentPic);
  const area = characters.map((character) => {
    return (
      <area
        key={character.id}
        shape="circle"
        coords={`${character.x * scale}, ${character.y * scale}, ${100 * scale}`}
        alt={character.name}
        data-title={character.name}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="picture-div">
      <section className="img-container">
        <map name="wallymap">{area}</map>
        <img
          onClick={handleClick}
          className="main-img"
          id={pic.id}
          src={pic.src}
          alt={pic.alt}
          useMap="#wallymap"
        />
      </section>
    </div>
  );
};

export default Picture;
