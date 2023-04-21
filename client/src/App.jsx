import React from 'react';
import './app.scss';
import Home from './pages/home/Home.jsx';
import Watch from './pages/watch/Watch.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies'>
          <Home type={'movies'} />
        </Route>
        <Route path='/series'>
          <Home type={'series'} />
        </Route>
        <Route path='/watch'>
          <Watch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
