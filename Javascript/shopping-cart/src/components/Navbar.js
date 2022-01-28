import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { items } = props;

  const amount = items.reduce((a, b) => Number(a) + Number(b.amount), 0);
  const value = items.reduce((a, b) => Number(b.amount) * Number(b.price) + Number(a), 0);

  return (
    <nav className="navbar">
      <ul className="nav-container">
        <Link to="/">
          <li class="nav-li">Home</li>
        </Link>
        <Link to="shop">
          <li class="nav-li">Shop</li>
        </Link>
        <Link to="cart">
          <li class="nav-li">
            Cart: {amount} (${value})
          </li>
        </Link>
        <Link to="about">
          <li class="nav-li">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
