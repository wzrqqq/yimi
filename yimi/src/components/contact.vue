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
						<div class="title">
							<span>US </span>CONTACTION
						</div>
						<div class="toptitle">联/系/我/们</div>
					</div>
					<ul class="methods">
						<li>
							<div class="img"><img src="../assets/img/phone.png" height="112" width="134" alt=""></div>
							<div class="tit">电话</div>
							<div class="line"><img src="../assets/img/by.png" height="3" width="134" alt=""></div>
							<p class="detail">12345678912345678912345</p>
						</li>
						<li>
							<div class="img"><img src="../assets/img/address.png" height="111" width="134" alt=""></div>
							<div class="tit">地址</div>
							<div class="line"><img src="../assets/img/by.png" height="3" width="134" alt=""></div>
							<p class="detail">12345678912345678912345</p>
						</li>
						<li>
							<div class="img"><img src="../assets/img/email.png" height="111" width="134" alt=""></div>
							<div class="tit">邮箱</div>
							<div class="line"><img src="../assets/img/by.png" height="3" width="134" alt=""></div>
							<p class="detail">12345678912345678912345</p>
						</li>
					</ul>
					
				</div>
				<div class="product">
					<div class="top">
						<div class="title">
							<span>HOT </span>RECOMMENDATION
						</div>
						<div class="toptitle">意/见/留/言</div>
					</div>
					<ul class="msg">
						<li><span class="iconfont icon-geren"></span><input v-model="name" type="text" name="name" placeholder="请输入您的姓名"></li>
						<li><span class="iconfont icon-shouji"></span><input v-model="tel" type="text" name="tel" placeholder="请输入您的电话"></li>
						<li><span class="iconfont icon-youxiang"></span><input v-model="email" type="text" name="email" placeholder="请输入您的邮箱"></li>
					</ul>
					<textarea v-model="opinion" class="textbox" ></textarea>
					<!-- <div class="textbox" v-model="opinion" contenteditable="true"></div> -->
					<div @click="sub" class="submit">提交</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default{
		name: 'contact',
		data(){
			return {
				name: '',
				tel: '',
				email: '',
				opinion: ''
			}
		},
		methods:{
			sub(){
				
			}
		}
	}
</script>
<style>
img{
	display: block;
	width: 100%;
	height: 100%;
}
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
	height: 1400px;
	background: #fff;
	display: flex;
	justify-content: center;
	position: relative;
}
.main{
	width: 1200px;
	height: 1580px;
	padding-left: 77px;
	padding-right: 77px;
	border: 1px solid #ddd;
	position: relative;
	top: -120px;
	background: #fff;
}
.product{
	width: 100%;
	height: auto;
	padding-top: 80px;
}
.main .top{
	width: 502px;
	height: 137px;
	margin: 0 auto;
	background: url('../assets/img/topbotton.png') no-repeat;
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
	position: absolute;
	left: 0;
	bottom: -6px;
	width: 100%;
	font-size: 24px;
	text-align: center;
	color: #585858;
	letter-spacing: 2px;
}
.methods{
	margin: 100px auto 0;
	width: 788px;
	height: 236px;
	display: flex;
	justify-content: space-between;
}
.methods > li{
	width: 198px;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.methods .img{
	width: 134px;
	height: 110px;
}
.methods .tit{
	width: 100%;
	height: 24px;
	font-size: 24px;
	text-align: center;
}
.methods .line{
	margin-top: 8px;
	width: 134px;
	height: 3px;
}
.methods .detail{
	width: 100%;
	height: 40px;
	line-height: 20px;
	font-size: 12px;
	text-align: center;
	letter-spacing: 1px;
	word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;
}
.msg{
	margin-top: 100px;
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
}
.msg > li{
	width: 280px;
	height: 40px;
	border-bottom: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.msg > li > input{
	margin-left: 4px;
	width: 230px;
	border: none;
	outline: none;
}
.textbox{
	display: block;
	padding: 20px;
	line-height: 20px;
	margin-top: 40px;
	width: 100%;
	height: 353px;
	border: 1px solid #000;
	border-radius: 5px;
	resize: none;
}
.submit{
	margin: 100px auto;
	width: 220px;
	height: 54px;
	border-radius: 27px;
	background: #4D7BEF;
	font-size: 26px;
	text-align: center;
	line-height: 54px;
	color: #fff;
}
</style>