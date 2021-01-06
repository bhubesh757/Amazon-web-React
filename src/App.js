// import logo from './logo.svg';
import React , {useEffect} from 'react';
import './App.css';
import Header from './amazon-clone/Header'
import Home from './amazon-clone/Home';
import Checkout from './amazon-clone/Checkout'
// react router dom

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
// import { Check } from '@material-ui/icons';
import Login from './amazon-clone/Login';

// firebase

import {auth} from './firebase'
// conetext api
import { useStateValue } from './StateProvider';

function App() {

  const [{} , dispatch] = useStateValue()

  useEffect(() => {
    // it runs only once when the app commp loads
    auth.onAuthStateChanged(authUser => {
      console.log('user', authUser);

      if (authUser) {
        // the user is logged in
        dispatch ({
          type : 'SET_USER',
          user:authUser,
        })
      }
      else {
        // the user is logged out
        dispatch ({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
      
      <Switch>
        <Route path = '/Login'>
          <Login></Login>
        </Route>
        <Route path = '/checkout'>
        <Header></Header>
        <Checkout></Checkout>
        </Route>
        <Route path = '/'>
        <Header></Header>
      <Home></Home>
        </Route>

      </Switch>
    </div>
    </Router>
      
  );
}

export default App;
 