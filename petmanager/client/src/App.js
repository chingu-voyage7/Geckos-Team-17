import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './components/store';
  
import './bulmastyles.css';

import Categories from './app/layout/Categories'; 
//import Todos from './Todos';
  
 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <h1>PetMan</h1>
            </div>
            <div className="container">
              <Route exact path="/" component={ Categories } />  
            </div>
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>
          </div>
        </Router>
      </Provider>
    ); 
  }
}
  
export default App;
 