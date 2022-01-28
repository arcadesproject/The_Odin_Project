import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-container">
      <h2>About</h2>
      <p>
        Simple shop example for The Odin Project by arcodesprojectcode (I don't wan't to buy birds).
      </p>
      <p>Using React with react-router-dom.</p>
      <Link to="/shop">
        <p>Shop</p>
      </Link>
    </section>
  );
};

export default About;
