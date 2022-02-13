import giants from '../assets/images/giants.jpg';

const Picture = (props) => {
  const { handleClick } = props;

  return (
    <div className="picture-div">
      <section className="img-container">
        <map name="wallymap">
          <area
            shape="circle"
            coords="552, 1290, 50"
            alt="Wally"
            data-title="Wally"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords="74, 1437, 50"
            alt="Woof"
            data-title="Woof"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords="2950, 1498, 50"
            alt="Wizard"
            data-title="Wizard"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords="2125, 1555, 50"
            alt="Wilma"
            data-title="Wilma"
            onClick={handleClick}
          />
          <area
            shape="circle"
            coords="1805, 1760, 50"
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
          id="pic-test"
          src={giants}
          alt="Wally Giants"
          useMap="#wallymap"
        />
      </section>
    </div>
  );
};

export default Picture;
