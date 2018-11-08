// aside

import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import $ from 'jquery';

import "../../css/Wx/Aside.css";

class Aside extends Component {
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return (
		
			<div id="asideWrap">
			
				<div className='jieshao'>
					
					<div>个人介绍<span>编辑</span></div>
					
					<p>我</p>
					
					<textarea></textarea>
					
					<button>保存</button>
					
					<button>取消</button>
					
				</div>
			
				<div>
					
					<Link to="#">我关注的专题/文集/连载</Link><br/>
					
					<Link to="#">我喜欢的文章</Link>
				
				</div>
				
				<div>
					
					<p>我创建的专题</p>
					
					<Link to="#" style={{color:"#42c02e"}}>+创建一个专题</Link>
				
				</div>
				
				<div>
					
					<p>我的文集</p>
					
					<Link to="#">daily</Link>
				
				</div>
			
			</div>
		
		)
	}
	
	componentWillMount(){
		
	
	}
	
	componentDidMount(){
		
		// document.title = "书简_yu - 简书";
		
		$(".jieshao span").click(function(){
			
			this.onselectstart = function(){
				
				return false;
			}
			
			var val = $(this).parent().siblings("p").text();
			
			$(this).parent().siblings("p").css("display", "none");
			
			$(".jieshao textarea").val(val).css("display","block");
			
			$(".jieshao button").css("display","inline-block");
		});
		
		$(".jieshao button").eq(1).click(function(){
			
			$(".jieshao textarea").val("").css("display","none");
			
			$(".jieshao button").css("display","none");
			
			$(this).siblings("p").css("display", "block");
		});
		
		$(".jieshao button").eq(0).click(function(){
			
			var val = $(".jieshao textarea").val();
			
			$(".jieshao textarea").val("").css("display","none");
			
			$(".jieshao button").css("display","none");
			
			$(this).siblings("p").text(val).css("display", "block");
		})
	}
	
	
}

export default Aside; 