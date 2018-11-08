import React, { Component } from 'react';

import './App.css';

import MyHome from './component/Wx/MyHome.js';

import Note from './component/Wx/Note.js';

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
		
		<Router>
		<div className="App">
					
			{/*<h3 style={{height: 55, background: "beige", margin: 0, padding: 0, "lineHeight": "55px"}}>我的主页</h3>*/}
			
			<Switch>
			
			<Route path='/user' component={MyHome}></Route>
			
			<Route path='/note' component={Note}></Route>
			
			<Redirect to='/note' />
			
			</Switch>
				
		</div>
		</Router>
    );
  }
}

export default App;
