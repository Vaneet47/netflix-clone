import React from 'react';
import './app.scss';
import Home from './pages/home/Home.jsx';
import Watch from './pages/watch/Watch.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        {user && (
          <>
            <Route path='/movies'>
              <Home type={'movies'} />
            </Route>
            <Route path='/series'>
              <Home type={'series'} />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
