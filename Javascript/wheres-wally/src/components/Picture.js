import giants from '../assets/images/giants.jpg';

const Picture = (props) => {
  const { handleClick } = props;

  const changeCursor = () => {
    //change shape, size etc.
  };

  const revertCursor = () => {
    //change back to default
  };

  return (
    <>
      <img
        onMouseEnter={changeCursor}
        onMouseLeave={revertCursor}
        onClick={handleClick}
        className="main-img"
        id="pic-test"
        src={giants}
        alt="Wally Giants"
        useMap="#wallymap"
      />
      <map name="wallymap">
        <area
          shape="circle"
          coords="640, 1502, 50"
          alt="Wally"
          title="Wally"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="87, 1665, 50"
          alt="Woof"
          title="Woof"
          onClick={handleClick}></area>
        <area
          shape="circle"
          coords="3417, 1737, 50"
          alt="Wizard"
          title="Wizard"
          onClick={handleClick}></area>
        <area
          shape="circle"
          coords="2462, 1802, 50"
          alt="Wilma"
          title="Wilma"
          onClick={handleClick}></area>
        <area
          shape="circle"
          coords="2092, 2032, 50"
          alt="Odlaw"
          title="Odlaw"
          onClick={handleClick}></area>
      </map>
    </>
  );
};

export default Picture;

//need popup that shows just to right/bottom of click (tooltip?) and only displays remaining choices - array
