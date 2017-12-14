<template>
	<div>
		<header>
			<div class="content">
				<div class="logo">
					<img src="../assets/img/logo.png" alt="" />
					<h1>YIMIJIAJU</h1>
				</div>
				<ul class="nav">
					<li>
						<a href="">
							<span>首 页</span>
							<span>HOME</span>
						</a>
					</li>
					<li>
						<a href="">
							<span>关于我们</span>
							<span>ABOUT US</span>
						</a>
					</li>
					<li>
						<a href="">
							<span>产品中心</span>
							<span>PRODUCT</span>
						</a>
					</li>
					<li>
						<a href="">
							<span>品牌中心</span>
							<span>BRANDING</span>
						</a>
					</li>
					<li>
						<a href="">
							<span>联系我们</span>
							<span>CONTACT</span>
						</a>
					</li>
				</ul>
			</div>
		</header>
		<div><router-view></router-view></div>
		<footer>
			<div class="top">
				<div class="content">
					<div class="up">
						<ul class="message">
							<li>
								<img src="" alt="" />
								<h3>400-857-368</h3>
							</li>
							<li>
								<img src="" alt="" />
								<h3>400-857-368</h3>
							</li>
							<li>
								<img src="" alt="" />
								<h3>400-857-368</h3>
							</li>
						</ul>
						<div class="search">
							<input type="text"/>
							<button>SEARCH</button>
						</div>
						<div class="erweima">
							<img src=""/>
						</div>
					</div>
					<div class="down">
						<ul class="news">
							<li>
								<a href="">
									关于我们
								</a>
							</li>
							<li>
								<a href="">
									新闻动态
								</a>
							</li>
							<li>
								<a href="">
									工作机会
								</a>
							</li>
							<li>
								<a href="">
									商务合作
								</a>
							</li>
							<li>
								<a href="">
									会员中心
								</a>
							</li>
							<li>
								<a href="">
									意见反馈
								</a>
							</li>
							<li>
								<a href="">
									联系我们
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="content">
					Coppright  2017  YiMi E.All  right   reservel
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'index',
		data:function(){
			return{
				
			}
		}
		
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}
a{
	text-decoration: none;
}
header{
	width: 100%;
	height: 100px;
	background: #5F647F;
}
header > .content{
	width: 1200px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
header > .content > .logo{
	width: 150px;
	height: 100%;
	display: flex;
	justify-content: space-between;
}
header > .content > .logo > h1{
	flex: 1;
	width: auto;
	height: 100%;
	line-height: 100px;
	font-size: 14px;
	color: #EAE9E8;
	font-weight: normal;
	padding-left: 5px;
}
header > .content .nav{
	width: 868px;
	height: 100%;
	display: flex;
	justify-content:space-between;
}
header > .content .nav > li{
	width: 119px;
	height: 100%;
}
header > .content .nav > li > a{
	padding-top: 32px;
	display: block;
	width: 100%;
	height: 100%;
}
header > .content .nav > li > a > span{
	display: block;
	width: 100%;
	height: auto;
	text-align: center;
	color: #EAE9E8;
}
header > .content .nav > li > a > span:last-of-type{
	font-size: 12px;
}



/*footer*/
footer{
	width: 100%;
	height: 782px;
	background: #6E8086;
}
footer > .top{
	width: 100%;
	height: 682px;
	background: #6E8086;
}
footer > .bottom{
	width: 100%;
	height: 100px;
	background:#000000;
}
footer > .top > .content{
	width: 1200px;
	height:100%;
	margin: 0 auto;
	padding-top: 373px;
	padding-left: 34px;
}
footer > .top > .content > .up{
	width: 100%;
	height: 247px;
	display: flex;
	justify-content: space-between;
}
footer > .top > .content > .up .message{
	width: 329px;
	height: 100%;
}
footer > .top > .content > .up .message > li{
	width: 100%;
	height: 53px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
}
footer > .top > .content > .up .message > li > img{
	display: block;
	width: 53px;
	height: 53px;
	margin-right: 12px;
	background: gold;
}
footer > .top > .content > .up .message > li > h3{
	flex: 1;
	text-align: left;
	height: 100%;
	line-height: 53px;
	font-weight: normal;
	font-size: 14px;
	color: white;
}
footer > .top > .content > .up > .search{
	width: 517px;
	height: 100%;
	padding-top: 66px;
	display: flex;
	justify-content: space-between;
}
footer > .top > .content > .up > .search > input{
	width: 316px;
	height: 54px;
}
footer > .top > .content > .up > .search > button{
	width: 200px;
	height: 54px;
	background: #F39800;
	border: none;
	outline: none;
	text-align: center;
	line-height: 54px;
	color: wheat;
	font-size: 14px;
}
footer > .top > .content > .up > .erweima{
	width: 157px;
	height: 157px;
	margin-top: 10px;
	background: lavender;
}
footer > .top > .content > .down{
	width: 100%;
	height: 20px;
}
footer > .top > .content > .down > .news{
	width: 840px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
footer > .top > .content > .down > .news > li{
	width: 120px;
	height: 100%;
	border-right: 1px solid white;
}
footer > .top > .content > .down > .news > li > a{
	display: block;
	text-align: center;
	color: white;
	font-size: 14px;
	font-weight: bold;
}
footer > .top > .content > .down > .news > li:last-of-type{
	border: none;
}
footer > .bottom > .content{
	width: 1200px;
	height: 100px;
	margin: 0 auto;
	text-align: center;
	line-height: 100px;
	color: white;
	font-size: 12px;
}
</style>