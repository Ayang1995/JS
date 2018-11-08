// 写文章

import React, {Component} from "react";

import {Link} from 'react-router-dom';

import $ from 'jquery';

import {Icon} from "antd";


import "../../css/Wx/Note.css";


class Note extends Component{
	
	constructor(props){
		
		super(props);
		
		this.state={
			
			arr:[],
			
			artArr: [],
			
			artSet:[
				
				{name: "aa", arr:[{tit:"aaaa",con:"das"},{tit:"bbbb",con:"bbbb"}]},
				
				{name: "bb",arr:[{tit:"bbbb", con:"aaa"},{tit: 'cccc', con:"adafa"}]}
				
			]
		}
	}
	
	tap2(i){
		
		var arr1 = this.state.artArr;
		
		arr1.splice(i, 1);
		
		this.setState({artArr: arr1});
	}
	
	creatArt(){
		
		var text = prompt("文章名");
		
		if(text != "" && text != null){
			
			var arr1 = this.state.artArr;
			
			arr1.unshift(text);
			
			this.setState({artArr: arr1});
		}
	}
	
	render(){
		
		// console.log(this.state.artSet)
		
		var _this = this;
		
		return(
		
			<div id="note">
			
				<section id="ArtSet">
				
					<Link to='/user' className="gohome">回首页</Link>
				
					<div className="newcreate">
					
						<p>+新建文集</p>
						
						<input type="text" autoFocus="autofocus" placeholder="请输入文集名"/>
						
						<button>提交</button>
						
						<button>取消</button>
					
					</div>
					
					
					<ul>
					{
							
						this.state.arr.map((item, i) => {
							
							return(
							
								<li key={i}><span>{item}</span>
								
									<i>
									
										<div><p className="xiugai">修改文集</p><p className="shanchu">删除文集</p></div>
									
										<Icon type="setting" theme="twoTone" twoToneColor="#fff" />
									
									</i>
								
								</li>
							)
						})
					}
						
					</ul>	
				
				</section>
				
				<section id="NewArt">
				
					<p onClick={this.creatArt.bind(this)}>+ 新建文章</p>
					
					<ul>
					
						{
							
							this.state.artArr.map((item, i) => {
								
								return(
								
									<li key={i}>{item} <span style={{"float": "right"}} onClick={_this.tap2.bind(_this, i)}>删除</span></li>
								)
							})
						}
					
					</ul>
				</section>

				<section id="Article">
				
					<h3>文章</h3>
					
					<textarea style={{"overflowY":"scroll",resize:"none", width: "100%", outline: "none", height: "500px",padding: "5px"}}></textarea>
					
					<button>发布</button>
				</section>

			</div>
		)
	}
	
	componentWillMount(){
		
		// 设置arr 和 artArr
		var newarr = [];
		
		var newArtArr = [];
		
		if(this.state.artSet.length !=0){
		
			for(var i=0;i<this.state.artSet.length; i++){
				
				newarr.push(this.state.artSet[i].name);
			}
		}
		
		if(this.state.artSet[0].arr.length != 0){
			
			for(var j = 0; j<this.state.artSet[0].arr.length;j++){
				
				newArtArr.push(this.state.artSet[0].arr[j].tit);
			}
		}
		
		this.setState({arr: newarr,artArr:newArtArr});
	
	}
	
	componentDidMount(){
		
		
		document.title = "简书 - 诗与岁月同歌";
		
		// 初次加载添加select类
		$("#ArtSet li").eq(0).addClass("select").siblings().removeClass("select");
		
		// 绑定this
		var _this = this;
		
		// 点击设置出现设置框
		$("#ArtSet").on("click", ".setting", function(){
			
			if($(this).find("div")[0].style.display == "block"){
				
				$(this).children("div").css("display", "none");

			}else{
				
				$(this).children("div").css("display", "block").parents("li").siblings().find("div").css("display","block");
			};
			return false;
		})
		
		// 修改文集
		$("#ArtSet").on("click", ".xiugai", function(){
			
			var arr1 = _this.state.arr;
			
			var index = $(this).parents("li").index();
			
			var text = prompt("请输入新文集名");
			
			if(text != null && text != ''){
				
				arr1[index] = text;
				
				_this.setState({arr: arr1});
			}
		})
		
		// 删除文集
		$("#ArtSet").on("click", ".shanchu", function(){
			
			var arr1 = _this.state.arr;
			
			var index = $(this).parents("li").index();
			
			arr1.splice(index, 1);
			
			_this.setState({arr: arr1});
		})
		
		$("#ArtSet").on("click", "li", function(){
			
			this.onselectstart = function(){
				
				return false;
			}
			
			$(this).addClass("select").siblings().removeClass();
			
			$(this).children("i").addClass("setting").end().siblings().children().removeClass();
			
			$(this).find("div").css('display', 'none');
		})
		
		// 新建
		$(".newcreate p").click(function(){
			
			$(this).siblings().css("display", "block");
			
			$(this).siblings("button").css("display", "inline-block");
		});
		
		// 添加
		$('.newcreate button').eq(0).click(function(){
			
			var arr1 = _this.state.arr;
			
			arr1.unshift($(this).siblings("input").val());
			
			_this.setState({arr: arr1});
			
			$(this).siblings("input").val("");
			
			$(".newcreate p").siblings().css("display", "none");
		})
		
		// 取消
		$('.newcreate button').eq(1).click(function(){
			
			$(".newcreate p").siblings().css("display", "none");
		})
	}
	
	componentDidUpdate(){
		
		// 状态更新时添加select类
		$("#ArtSet li").eq(0).addClass("select").siblings().removeClass("select");
	}
}



export default Note;