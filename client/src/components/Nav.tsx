import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook, faBars} from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav: React.FC = () => {
  // const [isNavExist, setExist] = useState<any>(false)
  const showNavBarHandler = () => {
    const nav = document.querySelector('nav');
    nav?.classList.toggle('visible');
  };
  return (
    <header>
      <h2>
        <FontAwesomeIcon icon={faBook}/>
        <Link to="/" className="home">
          QUIZ APP
        </Link>
      </h2>
      <FontAwesomeIcon icon={faBars} id="bars" onClick={showNavBarHandler} />
      <nav className="visible">
        <Link to="/" id="home-link" className="link" onClick={showNavBarHandler}>
          <h3>Home</h3>
        </Link>
        <Link to="/create" className="link" onClick={showNavBarHandler}>
          <h3>create</h3>
        </Link>
        <Link to="/results" className="link" onClick={showNavBarHandler}>
          <h3>results</h3>
        </Link>
        <Link to="/about" className="link" onClick={showNavBarHandler}>
          <h3>about</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
