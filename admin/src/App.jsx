import React, { useContext } from 'react';
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
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/authContext';
import ListList from './pages/listList/listList';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {/* all Link components should be under Router component*/}
      <Switch>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        {!user && <Login />}
        {user && (
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/movies'>
                <ProductList />
              </Route>
              {/* <Route path='/products'>
            <ProductList />
          </Route> */}
              <Route path='/product/:productId'>
                <Product />
              </Route>
              <Route path='/newProduct'>
                <NewProduct />
              </Route>
              <Route path='/lists'>
                <ListList />
              </Route>
              {/* <Route path='/list/:listId'>
                <Product />
              </Route>
              <Route path='/newList'>
                < />
              </Route> */}
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
