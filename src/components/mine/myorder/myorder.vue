<template>
	<div class="myorder_box">
		<div class="myorder">
			<p></p>
			<p>我的订单</p>
			<p>查看全部订单 ＞</p>
		</div>
		<ul class="order_nav">
			<li>
				<div class="order_pic1 order_pic"></div>
				<div>待付款</div>
			</li>
			<li>
				<div class="order_pic2 order_pic"></div>
				<div>待收货</div>
			</li>
			<li>
				<div class="order_pic3 order_pic"></div>
				<div>待评价</div>
			</li>
			<li>
				<div class="order_pic4 order_pic"></div>
				<div>返修/退换</div>
			</li>
		</ul>


	</div>

</template>

<style type="text/css">
	.myorder_box{
		width:100%;
		height:2.853333rem;
		margin-top: 0.266667rem;
	}
	.myorder{
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

	.myorder p:first-of-type{
		width:0.533333rem;
		height:0.533333rem;
		background: url(https://m.9ji.com/images/nv_order_icon.png);
		background-size:cover;
		margin-right: 0.213333rem;
	}
	.myorder p:nth-of-type(2){
		font:lighter 0.373333rem/1.066667rem "微软雅黑";
		text-align:left;
		color:#000;
	}
	.myorder p:last-of-type{
		position:absolute;
		right:0.266667rem;
		top:30%;
		font:lighter 0.373333rem "微软雅黑";
		color: #a8a9ab;
	}
	.order_nav{
		width:100%;
		height:1.76rem;
		background: #fff;
		display: flex;

	}
	.order_nav li{
		width:25%;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content:space-around;
		align-items:center;

	}
	.order_pic{
		width:0.64rem;
		height:0.64rem;
	}
	.order_pic1{	
		background:url(https://m.9ji.com/images/nv_pay_new_icon.png);
	}
	.order_pic2{	
		background:url(https://m.9ji.com/images/nv_take_new_icon.png);
	}
	.order_pic3{	
		background:url(https://m.9ji.com/images/nv_judge_new_icon.png);
	}
	.order_pic4{	
		background:url(https://m.9ji.com/images/nv_repair_new_icon.png);
	}
	.order_nav li div:last-of-type{
		font:lighter 0.373333rem "微软雅黑";
		color:#686868;
		margin-bottom:0.266667rem;
	}

</style>

<script type="text/javascript">
	



</script>