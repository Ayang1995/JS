// 导航列表

import React, {Component} from "react";

import "../../css/Wx/NavList.css";

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import $ from 'jquery';

// 路由模块
import Article from "./Article";

import Comment from "./Comment";

import Hot from "./Hot";

import News from "./News";


class NavList extends Component{
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return(
		
		<Router>
		<div>
		
			<div>
			
				<ul id="NavList">
				
					<li className="select"><Link to="/user/article">文章</Link></li>
					
					<li><Link to="/user/news">动态</Link></li>
					
					<li><Link to="/user/comment">最新评论</Link></li>
					
					<li><Link to="/user/hot">热门</Link></li>
				</ul>
			
			</div>
			
			<Switch>
			
			<Route path="/user/article" component={Article}></Route>
			
			<Route path="/user/news" component={News}></Route>
			
			<Route path="/user/comment" component={Comment}></Route>
			
			<Route path="/user/hot" component={Hot}></Route>
			
			<Redirect to="/user/article" />
			</Switch> 
		</div>
		</Router>
		
		)
	};
	
	componentDidMount(){
		
		$("#NavList li").click(function(){
			
			$(this).addClass("select").siblings().removeClass();
		})
	}
}


export default NavList;