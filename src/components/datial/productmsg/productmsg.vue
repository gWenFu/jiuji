<template>
	<div class="productmsg">
		<div class="protop">
			<p class="producttitle">
				{{title.name}}
			</p>
			<p class="productcolor">
				{{title.color}}
			</p>
		</div>
		
		<p class="productnews">【限时抢购】  经典金色32G,性价比只选!</p>
		<div class="productprice">
			<span>￥{{title.price}}</span>
			<div>
				<span>价格走势</span>
				<span>降价通知</span>
			</div>
			
		</div>

		<div class="marketprice">
			<span>一手优品：￥</span>
			<span>{{title.marketprice}}</span>
		</div>
		<div class="params_box">
			<h4>基本参数</h4>
			<ul class="params">
				<li v-for='i in title.dataarr'>
					{{i.args}}
				</li>
			</ul>
		</div>
		


	</div>


</template>

<style type="text/css">
	.productmsg{
		width:100%;
		/*height:2.666667rem;*/
		background:#fff;
	}
	.producttitle{
		width:100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
	.productcolor{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.protop{
		width:100%;
		height:0.853333rem;
		display:flex;
		font:lighter 0.426667rem/0.853333rem '微软雅黑';
		color:#333;
		text-indent:0.266667rem;
	}
	.productnews{
		width:100%;
		height:0.48rem;
		font:lighter 0.32rem/0.48rem '微软雅黑';
		color:#e12e2e;
	}
	.productprice{
		width:100%;
		height:0.746667rem;
		display:flex;
		justify-content: space-between;

	}
	.productprice>span{
		font:bolder 0.48rem "微软雅黑";
		color:#f23030;
	}
	.productprice>div span{
		padding: 0 0.133333rem;
		font:lighter 0.373333rem '微软雅黑';
		color:#505050;
		border:1px solid #c2c3c4;
		border-radius:0.04rem;
	}
	.productprice>div span:last-of-type{
		margin-right:0.4rem;
	}

	.marketprice{
		width:100%;
		height: 1.066667rem;
		margin-bottom:0.4rem;
	

	}
	.marketprice::before{
		content:'';
		display:block;
		width:100%;
		height:0.266667rem;
		background:#eee;
	}
	.marketprice::after{
		content:'';
		display:block;
		width:100%;
		height:0.266667rem;
		background:#eee;
	}
	.marketprice span{
		font:lighter 0.373333rem/0.933333rem '微软雅黑';
		color-rendering:#333;
	}
	.marketprice span:first-of-type{
		margin-left:0.266667rem;
	}
	
	.params{
		width:100%;
		min-height:9.626667rem;
	}
	.params_box{
		padding:0.266667rem;

	}
	.params h4{
		width:100%;
		font:bold 0.373333rem '微软雅黑';
		color:#2c3e50;
	}
	.params li{
		width:100%;
		font:lighter 0.373333rem/0.693333rem '微软雅黑';
		color:#333;
	}


</style>

<script type="text/javascript">
	export default {
		props:['pic'],
		computed:{
			title(){
				return {
					name:this.pic.ProductName,
					price:this.pic.ProductPrice,
					color:this.pic.ProductColor,
					marketprice:this.pic.MarketPrice,
					dataarr:this.pic.Param.args
				}
			}
		},
		mounted(){
			
		}


	}



</script>