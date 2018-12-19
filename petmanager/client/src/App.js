import React, { Component } from 'react';

import './bulmastyles.css';
 
import Categories from './app/layout/Categories'; 
//import Todos from './Todos'; 
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>PetMan</h1>
      <Categories />  
      
      </div>
    ); 
  }
}
 
export default App;
 