import logo from './logo.svg';
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import ViewCustomers from './components/ViewCustomers';
import Profile from './components/Profile';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import UserEdit from './components/UserEdit';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
           <div className="App">
            <ul className="noBullets">
              <li>
                <Link to="/">Welcome</Link>
              </li>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/ViewCustomers">ViewCustomers</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Welcome}></Route>
              <Route exact path='/Signup' component={Signup}></Route>
              <Route exact path='/ViewCustomers' component={ViewCustomers}></Route>
              <Route exact path='/Profile' component={Profile}></Route>
              <Route exact path='/UserEdit' component={UserEdit}></Route>
            </Switch>
          </div>
       </Router>
       </Provider>
    )
  }
}

export default App



