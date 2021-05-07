import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <Router >
      <Nav />
    </Router>
  )
};

export default App;
