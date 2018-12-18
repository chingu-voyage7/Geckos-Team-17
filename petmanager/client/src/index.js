import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import 'bulma/css/bulma.css'; 
import './bulmastyles.css';
import App from './App';
import { unregister } from './service-worker-custom';

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister()  