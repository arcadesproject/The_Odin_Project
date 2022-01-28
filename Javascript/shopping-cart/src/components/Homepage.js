import { Link } from 'react-router-dom';
import homeImage from '../storage/images/home.jpg';

const Homepage = () => {
  return (
    <section className="home-container">
      <div className="inner-home">
        <h2 class="home-header">Home</h2>
        <Link to="shop">
          <img className="home-img" src={homeImage} alt="main"></img>
        </Link>
      </div>
    </section>
  );
};

export default Homepage;
