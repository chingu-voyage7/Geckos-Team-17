import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store/store';

import './bulmastyles.css';
//import Header from './components/header/Header';
import Categories from './components/categories/Categories';
//import ShowEvents from './components/events/ShowEvents'; 
import PetSlider from './components/common/slider/PetSlider';
//import CategoriesReTabs from './components/categories/CategoriesReTabs';
//import CategoriesSideNav from './components/categories/CategoriesSideNav';
//import Todos from './Todos';

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Categories >
              <Switch>
                <Route exact path="/" component={ PetSlider } />
              </Switch>
            </Categories> 
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
 