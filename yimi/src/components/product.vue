<template>
	<div>
		<ul class="banner">
			<ul class="dots">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<li>
				<div class="title">美好<span>&</span>现代</div>
				<div class="desc">不变的是阳光下那张没有任何修饰和真实而明媚的笑脸</div>
				<div class="desc desc1">如此简单幸福</div>
				<div class="more"><a href=""><img src="../assets/img/tmore.png" height="30" width="84" alt=""></a></div>
			</li>

		</ul>
		<main>
			<div class="main">
				<div class="product">
					<div class="top">
						<img src="../assets/img/topbotton.png" height="110" width="503" alt="">
						<div class="title">
							<span>HOT </span>RECOMMENDATION
						</div>
						<div class="toptitle">产/品/推/荐</div>
					</div>
					<div class="ltitle">
						<img src="../assets/img/lefttitle.png" height="80" width="356" alt="">
						<p>享/受/舒/适...</p>
					</div>
					<div class="rtext">
						<p>丰富的储物空间，化繁为简的设计，充分发挥了现代工艺与定制所长，恰到好处地加以五金配件的点缀，使其更具</p>
						<p>舒适完美</p>
						<p>完美</p>
					</div>
					<ul class="list">
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default{
		name: 'product'
	}
</script>
<style>
.banner{
	width: 100%;
	height: 692px;
	background: skyblue;
	overflow: hidden;
	position: relative;
}
.banner > .dots{
	width: 75px;
	height: 12px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 170px;
	display: flex;
	justify-content: space-between;
}
.dots > li{
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #fff;
}
.banner > li{
	width: 100%;
	height: 100%;
	text-align: center;
}
.banner > li > .title{
	margin-top: 152px;
	width: 100%;
	height: 58px;
	font-size: 58px;
	color: #fff;
}
.banner > li > .title > span{
	color: #DD7E2B;
}
.desc{
	width: 100%;
	height: 20px;
	margin-top: 26px;
	color: #fff;
	font-size: 20px;
}
.desc1{
	margin-top: 18px;
}
.more{
	width: 160px;
	height: 54px;
	margin: 102px auto;
}
main{
	width: 100%;
	height: 4318px;
	background: #fff;
	display: flex;
	justify-content: center;
	position: relative;
}
.main{
	width: 1200px;
	height: 4498px;
	padding-left: 77px;
	padding-right: 77px;
	border: 1px solid #ddd;
	position: relative;
	top: -120px;
	background: #fff;
}
.product{
	width: 100%;
	height: 1146px;
	padding-top: 80px;
}
.main .top{
	width: 486px;
	height: 137px;
	margin: 0 auto;
	position: relative;
}
.top > .title{
	width: 100%;
	height: 48px;
	text-align: center;
	font-size: 18px;
	line-height: 48px;
	position: absolute;
	left: 0;
	bottom: 24px;
	color: #fff;
	letter-spacing: 2px;
}
.top > .title > span{
	font-weight: bold;
}
.toptitle{
	width: 100%;
	font-size: 24px;
	text-align: center;
	color: #585858;
	letter-spacing: 2px;
}
.product > .ltitle{
	margin-top: 58px;
}
.product > .ltitle > p{
	margin-top: 4px;
	letter-spacing: 2px;
	color: #585858;
	padding-left: 6px;
}
.product > .rtext{
	width: 100%;
	height: 72px;
	margin-top: 64px;
	text-align: right;
}
.rtext > p{
	color: #A4A4A4;
	line-height: 24px;
}
.product > .list{
	float: right;
	margin-top: 36px;
	width: 942px;
	height: 544px;
	display: flex;
	justify-content: space-between;
}
.product > .list > li{
	width: 300px;
	height: 544px;
	background: pink;
}
</style>