// 热门

import React, { Component } from 'react';

import "../../css/Wx/Article.css";

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import { Icon } from 'antd';

class Hot extends Component{
	
	constructor(prps){
		super(prps);
	}
	
	render(){
		
		return(
		
			<ul id="ArtList">
			
				<li>
				
					<Link to="" className="title">月亮很热 哈哈</Link>
					
					<p>月亮很亮,亮也没用,没用也亮</p>
					
					<div className="lastBar">
					
						<Link to=""><Icon type="eye" theme="twoTone" twoToneColor="#999"/> 1</Link>
						
						<Link to=""><Icon type="message" theme="twoTone" twoToneColor="#999"/> 0</Link>
						
						<span><Icon type="heart" theme="twoTone" twoToneColor="#999" /> 1</span>

						<time>前天 00:03</time>
						
					</div>
				
				</li>
				
				<li>1</li>
				
				<li>1</li>
				
				<li>1</li>
			</ul>
		)
	}
}


export default Hot;