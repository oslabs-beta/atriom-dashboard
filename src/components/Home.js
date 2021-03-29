import React from 'react';
import { Link } from 'react-router-dom';
const Home = ({ history }) => {
  history.push('/home');
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <Link to="/app/:id">
        <button>AppPage</button>
      </Link>
      {/* <Link to="/module/:id">
        <button>ModulePage</button>
      </Link>
      <Link to="/dependencies">
        <button>appPage</button>
      </Link> */}
    </div>
  );
};

export default Home;
