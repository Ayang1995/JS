// 我的主页

import React, { Component } from 'react';

import "../../css/Wx/WxMyHome.css";

import Profile from './Profile';

class WxMyHome extends Component{
	
	constructor(porps){
		
		super(porps);
	};
	
render(){

return(

<div id="Wx-wrap">

	<div id="Wx-left">

		<Profile/>
	</div>

	<aside id="Wx-aside">aside</aside>
</div>
)
}
	
	
}

export default WxMyHome;