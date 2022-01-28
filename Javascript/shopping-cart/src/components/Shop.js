const Shop = (props) => {
  const { items, displayCard } = props;

  const itemDisplay = items.map((item) => displayCard(item));
  return (
    <section className="shop-container">
      <h2>Shop</h2>
      <div className="inner-shop">{itemDisplay}</div>
    </section>
  );
};

export default Shop;
