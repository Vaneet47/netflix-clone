import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
