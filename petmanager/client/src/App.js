import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import { Provider } from 'react-redux';
import store from './store/store';

//import Header from './components/header/Header';
import Categories from './components/categories/Categories'; 
//import Todos from './Todos';

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Categories /> */}
            <Header />
            {/* <Route exact path="/" component={ Categories } /> */}
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/profile" component={ Profile } />
              <Route exact path="/calendar" component={ Calendar } />
            </div>
          </div>
        </Router>
      </Provider>
    ); 
  }
}
  
export default App;
 