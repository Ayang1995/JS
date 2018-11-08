// 我

// 依赖相关
import React, {Component} from "react";

import { Icon } from 'antd';

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

// 图片对象
import world from '../../image/Wx/world.png';

// css文件
import '../../css/Wx/Me.css';

// 模块相关
import NavList from './NavList';

import Following from './Following';

import Follower from './Follower';

class Me extends Component{
	
	constructor(props){
		
		super(props);
	}
	
render(){

return(
	
	<Router>
	<div>
	
	<div id="me">
		
		<Link to='' alt='me'><img src={world}/></Link>
		
		<div>
			
			<h3><Link to="" style={{color: "#333", fontSize:"21px"}}><b>唐砖</b></Link><Icon type="man" theme="outlined"  style={{color:"#3194d0",marginLeft:"5px"}}/></h3>
			
			<p id="MyList">
				
				<Link to="/user/following"><span>9</span><br/><span>关注</span><Icon type="right" theme="outlined" /></Link>
				
				<Link to="/user/follower"><span>0</span><br/><span>粉丝</span><Icon type="right" theme="outlined" /></Link>
				
				<Link to="/user/article"><span>4</span><br/><span>文章</span><Icon type="right" theme="outlined" /></Link>
				
				<a href="javascript:;" style={{cursor:"text"}}><span>261</span><br/><span>字数</span></a>
				
				<a href="javascript:;" style={{"border": "none", cursor:"text"}}><span>1</span><br/><span>收获喜欢</span></a>
			
			</p>
			
		</div>
		
	</div>
	
	<Switch>
	
	<Route path='/user/article' component={NavList}></Route>
	
	<Route path='/user/following' component={Following}></Route>
	
	<Route path='/user/follower' component={Follower}></Route>

	<Redirect to='/user/article' />
	
	</Switch>
	
	</div>
	</Router>

)
}
}

export default Me;