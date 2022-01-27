import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-container">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="shop">
          <li>Shop</li>
        </Link>
        <Link to="cart">
          <li>Cart</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
