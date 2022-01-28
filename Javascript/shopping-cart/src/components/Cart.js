import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { items, displayCard } = props;

  const filtered = items.filter((item) => item.amount > 0);
  const value = filtered.reduce((a, b) => b.amount * b.price + a, 0);

  const cartDisplay = filtered.map((card) => displayCard(card));

  return (
    <section className="shop-container">
      <h2>Cart</h2>
      {filtered.length > 0 && <div className="inner-shop">{cartDisplay}</div>}
      {filtered.length > 0 ? (
        <p>Total Cost: ${value}</p>
      ) : (
        <div>
          <p>Empty</p>
          <Link to="/shop">
            <p>Shop</p>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
