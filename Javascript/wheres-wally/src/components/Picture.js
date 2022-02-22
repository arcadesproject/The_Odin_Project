import pics from '../data/picInfo';

const Picture = (props) => {
  const { handleClick, characters, scale, currentPic } = props;

  const mapped = characters.map((character) => {
    return { ...character, x: Number(character.x * scale), y: Number(character.y * scale) };
  });
  const wally = mapped[0];
  const woof = mapped[1];
  const wilma = mapped[2];
  const wizard = mapped[3];
  const odlaw = mapped[4];

  const pic = pics.find((pic) => pic.id === currentPic);

  return (
    <div className="picture-div">
      <section className="img-container">
        <map name="wallymap">
          <area
            shape="circle"
            coords={`${wally.x}, ${wally.y}, 50`}
            alt="Wally"
            data-title="Wally"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords={`${woof.x}, ${woof.y}, 50`}
            alt="Woof"
            data-title="Woof"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords={`${wizard.x}, ${wizard.y}, 50`}
            alt="Wizard"
            data-title="Wizard"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords={`${wilma.x}, ${wilma.y}, 50`}
            alt="Wilma"
            data-title="Wilma"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords={`${odlaw.x}, ${odlaw.y}, 50`}
            alt="Odlaw"
            data-title="Odlaw"
            onClick={handleClick}
          />
        </map>
        <img
          // onMouseEnter={changeCursor}
          // onMouseLeave={revertCursor}
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
