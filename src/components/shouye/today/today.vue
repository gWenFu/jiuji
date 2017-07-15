<template>
	<div id="today">
		<h3 class="today_top">
			<span class="today_title">今日爆款</span>
			<span class="today_top_right">
				华为2代手表  现货热销中 >
			</span>
		</h3>
		<div class="today_content_box">
			<div class="today_content">
				<a href="">
					<img src="https://img2.ch999img.com/pic/clientimg/201705130118000.jpg" alt="">
				</a>
				<a href="">
					<img src="https://img2.ch999img.com/pic/clientimg/201706050242270.jpg" alt="">
				</a>
				<a href="">
					<img src="https://img2.ch999img.com/pic/clientimg/201706050836410.jpg" alt="">
				</a>
				<a href="">
					<img src="https://img2.ch999img.com/pic/clientimg/201705051132380.jpg" alt="">
				</a>
			</div>
		</div>
	</div>

</template>

<style type="text/css">
	#today{
		width:100%;

	}
	#today::after{
		content: '';
		display:block;
		width:100%;
		height:20px;
		background:#eee;
	}
	.today_top{
		width:100%;
		height:.96rem;
		display: flex;
		justify-content:flex-start;
		align-items: center;
		position:relative;
	}
	.today_top::before{
		content:'';
		display:inline-block;
		width:.21333rem;
		height:.42667rem;
		background:#ff5050;
		margin:0 10px;
	}
	.today_title{
		font:bold 0.37333rem '微软雅黑';
		color:#333;
	}
	.today_top_right{
		font:lighter .32rem "微软雅黑";
		color:#9c9c9c;
		position:absolute;
		right:20px;
		top:.32rem;
	}

	.today_content_box{
		width:100%;
		height:3.2rem;
		overflow: auto;
	}
	.today_content{
		height:100%;
		width:12.8rem;
		display: flex;

	}
	.today_content_box a{
		display:block;
		width:25%;
		height:100%;
	}
	.today_content_box a img{
		width:100%;
		height:100%;
	}






</style>


<script type="text/javascript">
	

</script>