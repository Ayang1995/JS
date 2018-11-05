import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WxMyHome from './component/Wx/WxMyHome.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
					
			<h3 style={{height: 55, background: "beige", margin: 0, padding: 0, "lineHeight": "55px"}}>我的主页</h3>
			
			<WxMyHome/>
				
      </div>
    );
  }
}

export default App;
