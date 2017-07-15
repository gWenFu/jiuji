<template>
	<div class="minebannerpic">
		<div class="minebannerpic_top">
			<p class="mine_pic"></p>
			<div class="mine_msg">
				<p>
					<span>持卡人</span>
					<span>Keep moving...</span>
				</p>
				<p>
					<span>手机号码</span>
					<span>13525****987</span>
				</p>
			</div>
			<div class="mine_msg2">
				<p class="date">
					<span>发卡日期</span>
					<span>2017/06/03</span>
				</p>
				<p class="user_data"></p>
			</div>
		</div>

	</div>

</template>

<style type="text/css">
	.minebannerpic{
		width:100%;
		margin-top:1.2rem;
		padding:0.266667rem 0.266667rem 0 0.266667rem;


	}
	.minebannerpic_top{
		width:100%;
		height:5.813333rem;
		background:url(https://img2.ch999img.com/static/images/m/vip_card/bg_pt.png?n=1);
		background-size:100%;
		position: relative;

	}
	.mine_msg{
		width:7.013333rem;
		height:1.76rem;
		position:absolute;
		top:48%;
		left:2%;
		margin-left: 3.506667rem;
		color:#fff;
		font-size: 0.373333rem;
		font-family: "微软雅黑";
	}
	.mine_msg p:first-of-type{
		margin-bottom: 0.133333rem;
	}
	.mine_msg p span:last-of-type{
		background:#1bbde9;
	}
	.mine_pic{
		width:1.6rem;
		height:1.6rem;
		border-radius: 50%;
		background:url(https://img2.ch999img.com/img/face/user.png);
		background-size: cover;
		position:absolute;
		top:35%;
		left:15%;
	}
	.mine_msg2{
		width:7.013333rem;
		height:0.933333rem;
		color:#fff;
		font-size:0.373333rem;
		font-family: "微软雅黑";
		position:absolute;
		bottom:0.613333rem;
		left:1.333333rem;
		display:flex;
		justify-content:space-between;
	}
	.date{
		display:flex;
		flex-direction: column;
	}
	.user_data{
		width:3.093333rem;
		height:0.933333rem;
		background:url(https://m.9ji.com/App/UserCenter/0/3134328.jpg?t=15);
		background-size: cover;
	}

</style>

<script type="text/javascript">
	



</script>