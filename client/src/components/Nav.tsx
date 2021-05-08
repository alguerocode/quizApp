import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav: React.FC = () => {
  return (
    <header>
      <h2>
        <FontAwesomeIcon icon={faBook} />
        <Link to="/" className="home">QUIZ APP</Link>
      </h2>
      <nav>
        <Link to="/" id="home-link" className="link">
          <h3>Home</h3>
        </Link>
        <Link to="/create" className="link">
          <h3>create</h3>
        </Link>
        <Link to="/results" className="link">
          <h3>results</h3>
        </Link>
        <Link to="/about" className="link">
          <h3>about</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
