<template>
	<div class="mycount_box">
		<div class="mycount">
			<p></p>
			<p>我的账号</p>
			<p>会员福利 ＞</p>
		</div>
		<ul class="count_nav">
			<li>
				<div class="count_pic1 count_pic">0.00</div>
				<div>账户余额</div>
			</li>
			<li>
				<div class="count_pic2 count_pic">0</div>
				<div>优惠码</div>
			</li>
			<li>
				<div class="count_pic3 count_pic">0</div>
				<div>积分</div>
			</li>
			<li>
				<div class="count_pic4 count_pic">0</div>
				<div>九机币</div>
			</li>
		</ul>




	</div>

</template>

<style type="text/css">
	.mycount_box{
		width:100%;
		height:2.773333rem;
		margin: 0.266667rem 0;
	}
	.mycount{
		width:100%;
		height:1.066667rem;
		background:#fff;

		padding:0 0.213333rem;
		display:flex;
		justify-content:flex-start;
		align-items: center;
		position: relative;
		margin-bottom:0.026667rem;
	}
	.mycount p:first-of-type{
		width:0.533333rem;
		height:0.533333rem;
		background: url(https://m.9ji.com/images/nv_mine_icon.png);
		background-size:cover;
		margin-right: 0.213333rem;
	}
	.mycount p:nth-of-type(2){
		font:lighter 0.373333rem/1.066667rem "微软雅黑";
		text-align:left;
		color:#000;
	}
	.mycount p:last-of-type{
		position:absolute;
		right:0.266667rem;
		top:30%;
		font:lighter 0.373333rem "微软雅黑";
		color: #a8a9ab;
	}

	.count_nav{
		width:100%;
		height:1.76rem;
		background: #fff;
		display: flex;

	}
	.count_nav li{
		width:25%;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content:space-around;
		align-items:center;

	}
	.count_pic{
		width:0.64rem;
		height:0.64rem;
		font:lighter 0.32rem/0.64rem "微软雅黑";
		text-align: center;
		color:#333;
	}
	
	.count_nav li div:last-of-type{
		font:lighter 0.373333rem "微软雅黑";
		color:#686868;
		margin-bottom:0.266667rem;
	}

</style>

<script type="text/javascript">
	


</script>