<template>
	<div>
		<section class="banner">
			<ul class="imagebox">
				<li>
					<img src="" alt="" />
					<span>COMEASPROMISED</span>
					<h1>如约而至,不期而遇</h1>
				</li>
			</ul>
		</section>
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
section.banner .imagebox > li > span{
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
}
</style>