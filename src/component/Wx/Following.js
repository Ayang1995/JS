// 关注

import React, {Component} from 'react';

import "../../css/Wx/NavList.css";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import $ from 'jquery';

import user2 from '../../image/Wx/user2.jpeg';

import user3 from '../../image/Wx/user3.jpg';

class Following extends Component{
	
	constructor(props){
		
		super(props);
	}
	
	tap(){
		
		this.props.history.push("/user/follower");
	}
	
	render(){
		
		return (
		
			<div>
			
				<ul id="NavList">
				
					<li className="select"><Link to="/user/following">关注用户9</Link></li>
					
					<li onClick={this.tap.bind(this)}><Link to="/user/follower">粉丝</Link></li>
		
				</ul>
				
				<ul className="follow">
				
					<li>
					
						<Link to="#" className="userimg"><img src={user2} /></Link>
						
						<div className="info">
						
							<h3>韩大爷的杂货铺</h3>
							
							<p>关注 <span>4</span> | 粉丝 <span>112739</span> | 文章 332</p>
							
							<p>写了 <span>870687</span> 字,获得了 <span>179756</span> 个喜欢</p>
						</div>
						
						<button>已关注</button>
					</li>
					
					<li>
					
						<Link to="#" className="userimg"><img src={user3} /></Link>
						
						<div className="info">
						
							<h3>哲学诗画</h3>
							
							<p>关注 <span>4</span> | 粉丝 <span>112739</span> | 文章 332</p>
							
							<p>写了 <span>870687</span> 字,获得了 <span>179756</span> 个喜欢</p>
						</div>
						
						<button>已关注</button>
					</li>
				
				</ul>
			
			</div>
	
		)
	}
	
	componentDidMount(){
		
		$(".follow li button").click(function(){
						
			if(this.innerHTML.indexOf("+") != -1){
				
				this.className = '';
				
				this.innerHTML = '已关注';
			}else{
				
				this.className = "guanzhu";
				
				this.innerHTML = ' + 关注'
			}
		});
	}
}

export default Following;