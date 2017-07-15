<template>
	<div class="xianshi_container">
		<div class="xianshi_title">
			<p class="xianshi_title_left">限时抢购</p>
			<p class="today">今日抢购进行中</p>
		</div>
		<div class="xianshi_box">
			<div class="xianshi_goods">
				<dl>
					<dt>
						<img src="https://img2.ch999img.com//pic/product/440x440/201704211441298.jpg" alt="">
					</dt>
					<dd>
						<p class="goods_name">iPhone 7 plus 玫瑰红</p>
						<p class="goods_price">
							<span>特价</span>
							<span>￥5630.00</span>
						</p>
						<p class="goods_preprice">
							￥5699.00
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="https://img2.ch999img.com//pic/product/440x440/20150910060620766.jpg" alt="">
					</dt>
					<dd>
						<p class="goods_name">白飒防辐射眼镜</p>
						<p class="goods_price">
							<span>超值</span>
							<span>￥9.90</span>
						</p>
						<p class="goods_preprice">
							￥25.00
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="https://img2.ch999img.com//pic/product/440x440/20161128150945688.jpg" alt="">
					</dt>
					<dd>
						<p class="goods_name">白飒防辐射眼镜</p>
						<p class="goods_price">
							<span>超值</span>
							<span>￥9.90</span>
						</p>
						<p class="goods_preprice">
							￥25.00
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="https://img2.ch999img.com//pic/product/440x440/20170314101259685.jpg" alt="">
					</dt>
					<dd>
						<p class="goods_name">白飒防辐射眼镜</p>
						<p class="goods_price">
							<span>超值</span>
							<span>￥9.90</span>
						</p>
						<p class="goods_preprice">
							￥25.00
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="https://img2.ch999img.com//pic/product/440x440/20170510174709570.jpg" alt="">
					</dt>
					<dd>
						<p class="goods_name">白飒防辐射眼镜</p>
						<p class="goods_price">
							<span>超值</span>
							<span>￥9.90</span>
						</p>
						<p class="goods_preprice">
							￥25.00
						</p>
					</dd>
				</dl>
			</div>
		</div>

	</div>
</template>

<style>
	.xianshi_container::before{
		content: '';
		display:block;
		width:100%;
		height:20px;
		background:#eee;
	}
	.xianshi_title{
		width:100%;
		height:0.96rem;
		
		display:flex;
		justify-content:space-between;

	}
	.xianshi_title_left{
		height:100%;
		font:bolder .42667rem/0.96rem '微软雅黑';
		color:#f11150;
		margin-left:10px;

	}
	.today{
		font:lighter .3733rem/0.96rem '微软雅黑';
		color:#ff6700;
		margin-right:10px;
	}
	.xianshi_box{
		width:100%;
		height: 5.0667rem;
		overflow:auto;
	}
	.xianshi_goods{
		width:17.867rem;
		height:100%;
		display:flex;
		justify-content:space-around;

	}
	.xianshi_goods dl dt{
		border:2px solid #eee;
		padding:4px;
	}
	.xianshi_goods dl dt img{
		width:2.88rem;
		height:2.88rem;
	}
	.xianshi_goods dl dd{
		width:100%;
		height:1.867rem;
		background:#ececec;
		padding:4px;
	}
	.goods_name{
		font:lighter 0.32rem '微软雅黑';
		color:#333;
		text-align: center;
	}
	.goods_price{
		width:100%;
		height:.63rem;
		border-radius:0.315rem;
		background:#f11150;
		text-align: center;
		line-height:.63rem;
		font-weight:bolder;
		color:#fff;
		display:flex;
		justify-content:flex-start;
		align-items: center;
	}
	.goods_price span:first-of-type{
		color:#f11150;
		background:#fff;
		display:inline-block;
		width:.8533rem;
		height:.48rem;
		border-radius:.24rem;
		font-size: .32rem;
		font-weight: lighter;
		text-align: center;
		line-height: .48rem;
		margin:0 10px;
	}
	.goods_preprice{
		width:100%;
		text-align:center;
		font:lighter .32rem '微软雅黑';
		color:#caaaaa;
		text-decoration: line-through;
	}

</style>

