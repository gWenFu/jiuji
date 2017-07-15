<template>
	<div class="picbanner">
		<img src="https://img2.ch999img.com/pic/clientimg/201706020930080.jpg" alt="">
		<div class="picbanner_content1">
			<a href="">
				<img src="https://img2.ch999img.com/pic/clientimg/201706050825380.jpg" alt="">
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/clientimg/201706050245090.jpg" alt="">
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/clientimg/201706050826210.jpg" alt="">
			</a>
		</div>
		<div class="picbanner_content2">
			<a href="">
				<img src="https://img2.ch999img.com/pic/clientimg/201706050824440.jpg" alt="">
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/clientimg/201706050826580.jpg" alt="">
			</a>
		</div>
	</div>
</template>
<style>
	.picbanner{
		width:100%;
		/*height:2.1333rem;*/
	}
	.picbanner::before{
		content:'';
		display:block;
		width:100%;
		height:15px;
		background:#eee;
	}
	.picbanner::after{
		content:'';
		display:block;
		width:100%;
		height:20px;
		background:#eee;
	}
	.picbanner>img{
		width:100%;
		height:2.1333rem;
		border-bottom:5px solid #eee;
	}
/*	.picbanner>img::after{
		content:'';
		display:block;
		height:10px;
		width:100%;
		background:red;
	}*/

	.picbanner_content1{
		width:100%;
		height:3.2533rem;
		border-bottom:5px solid #eee;
		display:flex;
	}
	.picbanner_content1 a{
		width:33.333%;
		height:100%;
		border-right:5px solid #eee;
		border-left:5px solid #eee;
		display:inline-block;
		
	}
	.picbanner_content1 a img{
		width:100%;
		height:100%;
	}
	.picbanner_content2{
		width:100%;
		height:2.1333rem;
		display: flex;

	}
	.picbanner_content2 a{
		display:inline-block;
		width:50%;
		height:100%;
		border-right:5px solid #eee;
	}
	.picbanner_content2 a img{
		width:100%;
		height:100%;
	}
</style>