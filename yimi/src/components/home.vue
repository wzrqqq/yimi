<template>
	<div>
		<!--banner开始-->
		<section class="banner">
			<ul class="imagebox">
				<li>
					<img src="" alt="" />
					<span class="one">COMEASPROMISED</span>
					<h1>如约而至,不期而遇</h1>
					<span class="two">享 / 受 / 温 / 馨</span>
					<a href=""><img src="../assets/img/tmore.png"/></a>
				</li>
			</ul>
		</section>
		<!--banner结束-->
		
		<!--product开始-->
		<section class="product">
			<div class="content">
				<div class="proPicture">
					<span>产品中心 PRODUCTCENTER</span>
				</div>
				<ul class="proList">
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/img/product3.png"/>
							<div class="describe">
								<span>简约思考 , 蓝色行动</span> / 
								<span>ENJOY LIFE</span>
								<p>企业的确立，最重要的是产品的综合素质，通过啥的凯撒大手大脚好看撒党的十九大黑科技三北京第三</p>
							</div>
							<a href=""><img src="../assets/img/pro_more_05.png"/></a>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<!--product结束-->
		
		<!--bedpicture开始-->
		<section class="bedPicture">
		</section>
		<!--bedpicture结束-->
		
		<!--style开始-->
		<section class="Style">
			<ul class="content">
				<li><a href=""><img src="../assets/img/brand1.png"/></a></li>
				<li><a href=""><div class="title"><h1>现代风格</h1><span>CHANPIN</span></div><p>丰富的储物空间，化繁为简的设计，充分发挥了现代艺与定制所长 </p></a></li>
				<li><a href=""><img src="../assets/img/brand1.png"/></a></li>
				<li><a href=""></a></li>
				<li><a href=""><img src="../assets/img/brand1.png"/></a></li>
				<li><a href=""></a></li>
				<li><a href=""><img src="../assets/img/brand1.png"/></a></li>
				<li><a href=""></a></li>
				<li><a href=""><img src="../assets/img/brand1.png"/></a></li>
				<li><a href=""></a></li>
			</ul>
		</section>
		<!--style结束-->
	</div>
</template>

<script>
	export default{
		name:'home',
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
/*banner*/
section.banner{
	width: 100%;
	height: 725px;
}
section.banner .imagebox{
	width: 100%;
	height: 100%;
}
section.banner .imagebox > li{
	width: 100%;
	height: 100%;
	background: skyblue;
	position: relative;
}
section.banner .imagebox > li > img{
	display: block;
	width: 100%;
	height: 100%;
	background: darkgray;
}
section.banner .imagebox > li > .one{
	display: block;
	width: 100%;
	height: auto;
	position: absolute;
	text-align: center;
	top: 212px;
	font-size: 16px;
	color: white;
}
section.banner .imagebox > li > h1{
	width: 100%;
	height: auto;
	position: absolute;
	text-align: center;
	font-size: 56px;
	color: white;
	top: 266px;
	text-shadow:1px 1px #B4B8B9,2px 2px #B4B8B9,3px 3px #B4B8B9,4px 4px #B4B8B9,5px 5px #B4B8B9;
}
section.banner .imagebox > li > .two{
	display: block;
	width: 100%;
	height: auto;
	position: absolute;
	top: 365px;
	text-align: center;
	color: #C0C1C3;

}
section.banner .imagebox > li > a{
	display: block;
	width: 167px;
	height: 55px;
	border-radius: 55px;
	position: absolute;
	bottom: 58px;
	left: 50%;
	transform: translateX(-84px);
}

/*product*/
section.product{
	width: 100%;
	height: 1070px;
}
section.product > .content{
	width: 1200px;
	height: 100%;
	margin: 0 auto;
}
section.product > .content > .proPicture{
	width: 507px;
	height: 207px;
	margin: 0 auto;
	background: url(../assets/img/topbotton.png) no-repeat;
	background-size: 100%;
	background-position:0 ;
}
section.product > .content > .proPicture > span{
	display: block;
	width: 100%;
	height: auto;
	font-size: 20px;
	text-align: center;
	color: white;
	padding-top: 118px;
}
section.product > .content > .proList{
	width: 100%;
	height: 864px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
section.product > .content > .proList > li{
	width: 366px;
	height: 432px;
}
section.product > .content > .proList > li > a{
	display: block;
	width: 100%;
	height: 100%;
	border-top: 4px solid white;
	border-radius: 4px 4px 0 0;
}
section.product > .content > .proList > li > a:hover{
	border-top: 4px solid #FFD570;
}
section.product > .content > .proList > li > a > img{
	height: 283px;
}
section.product > .content > .proList > li > a > .describe{
	width: 100%;
	height: 83px;
	padding: 20px 0 0 16px;
}
section.product > .content > .proList > li > a > .describe > span{
	color: #5B637A;
	font-size: 19px;
}
section.product > .content > .proList > li > a > .describe > span:last-of-type{
	color: #8C91A2;
}
section.product > .content > .proList > li > a > .describe > p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	font-size: 14px;
	color: #C4C6CD;
	margin-top: 5px;
}
section.product > .content > .proList > li > a > a{
	display: none;
}
section.product > .content > .proList > li:first-of-type > a > a{
	display: block;
}

/*bed开始*/
section.bedPicture{
	width: 100%;
	height: 440px;
	background: url(../assets/img/bed_02.png) no-repeat;
	background-size:100% 100%;
	background-position:center ;
}

/*style开始*/
section.Style{
	width: 100%;
	height: 544px;
}
section.Style > .content{
	width: 1200px;
	height: 100%;
	margin: 0 auto;
}
section.Style > .content > li{
	width: 240px;
	height: 272px;
	background: skyblue;
	float: left;
}
section.Style > .content > li > a{
	display: block;
	width: 100%;
	height: 100%;
}
section.Style > .content > li > a > .title{
	width: 100%;
	height: 63px;
	margin-top: 35px;
	padding: 0 52px;
	overflow: hidden;
}
section.Style > .content > li > a > .title > h1{
	font-size: 16px;
	text-align: center;
	margin-top: -4px;
	color: white;
}
section.Style > .content > li > a > .title > span{
	display: block;
	width: 100%;
	font-size: 14px;
	text-align: center;
	color: white;
}
section.Style > .content > li > a > p{
	width: 100%;
	height: 110px;
	padding: 20px 29px 30px;
	color: white;
	line-height: 25px;
}
section.Style > .content > li:nth-of-type(2n) > a .title{
	background:url(../assets/img/kuang_08.png) no-repeat center;
}
</style>