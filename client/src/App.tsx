import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import QuizForm from './components/create/form';
import Home from './components/home'
import Results from './components/results';
import About from './components/about';
import Quiz from './components/quiz';
import NotFound from './notFound'
const App: React.FC = () => {
  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={QuizForm} exact/>
        <Route exact path="/results" component={Results}/>
        <Route exact path="/about"component={About}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  )
};

export default App;
