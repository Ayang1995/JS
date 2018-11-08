import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Luyou from "./component/YXL/luyou";

import Registered from "./component/YXL/registered";
import Login from "./component/YXL/login";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Luyou/>
          
              
              
      </div>
    );
  }
}

export default App;
