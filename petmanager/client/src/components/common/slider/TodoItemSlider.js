import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates'; 

class TodoItemSlider extends Component {

  state = {
    todos: [],
    owners: [],
    pets: []
  }

  componentWillMount() {
    axios.get('http://localhost:5000/api/v1/todos?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
      this.setState({
        pets: res.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <SliderTemplates 
          data={this.state.todos} 
          type={this.props.type}
          settings={this.props.settings}  
        />
      </div>
    );
  }
}
 
export default TodoItemSlider;