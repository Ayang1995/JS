// 我的主页

import React, { Component } from 'react';

import "../../css/Wx/MyHome.css";

import 'antd/dist/antd.css';

import world from '../../image/Wx/world.png';

import { Icon } from 'antd';

import Me from './Me.js';

import Aside from './Aside';


class MyHome extends Component{
	
	constructor(porps){
		
		super(porps);
	};
	
render(){

return(

<div id="Wx-wrap">

	<div id="Wx-left">
		
		<Me/>
	</div>

	<aside id="Wx-aside">
	
		<Aside/>
	</aside>
	
</div>
)
}
	
componentDidMount(){
	
}
}

export default MyHome;