// 关注 粉丝

import React, {Component} from "react";

import "../../css/Wx/NavList.css";

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import $ from 'jquery';

import Following from './Following';

import Follower from './Follower';

class Follow extends Component {
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return (
		
			<Router>
			<div>
			
				<div>
				
					<ul id="NavList">
					
						<li className="select"><Link to="/Following">关注用户9</Link></li>
						
						<li><Link to="/Follower">粉丝</Link></li>
			
					</ul>
					
					<div>Following</div>
				
				</div>
				
				<Switch>
				
				<Route path="/Following" component={Following}></Route>
				
				<Route path="/Follower" component={Follower}></Route>
				
				<Redirect to="/Following" />
				</Switch>
			</div>
			</Router>
		)
	}
	
	componentDidMount(){
		
		$("#NavList li").click(function(){
			
			$(this).addClass("select").siblings().removeClass();
		})
	}
}



export default Follow;