<template>
	<div class="onehandcontent">
		<ul>
			<li>
				<a href="">
					<img src="https://img2.ch999img.com/pic/product/216x216/20170421150026661.jpg" alt="">
				
					<p class="script">我对讲机的</p>

					<div class="place">京东我危机的期间的的</div>

					<p class="price">
						<span>一口价：</span>
						<span>68797</span>
					</p>
					<p class="oldprice">
						<span>新机价</span>
						<span>￥7798897</span>
					</p>
				</a>
			</li>
		</ul>
	</div>

</template>

<style type="text/css">
	.onehandcontent{
		width:100%;

	}
	.onehandcontent ul{
		width:100%;
		margin-top:20px;
		display:flex;

	}
	.onehandcontent ul li{
		width:4.4267rem;
		height:7.52rem;
		background: #fff;
		margin:0 0 .26667rem .3rem;
	}
	.onehandcontent ul li>a{
		display:block;
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding:20px;
	}
	.script{
		widows:100%;
		font:lighter .32rem '微软雅黑';
		color:#000;

	}
	.place{
		width:100%;
		font:lighter .32rem '微软雅黑';
		color:#2792ff;
		/*text-align: center;*/

	}
	.price{
		width:100%;
		font:lighter .32rem '微软雅黑';
		color:#ff3333;
		/*text-align: center;*/

	}
	.price span:last-of-type{
		font-weight: bold;
	}
	.oldprice{
		width:100%;
		font:lighter .32rem '微软雅黑';
		color:#333;
		/*text-align: center;*/
	}
	.oldprice span:last-of-type{
		text-decoration: line-through;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				onehandcontentarr:[]
			}
		},
		methods:{
			request(){
				this.$http({
					url:'https://m.9ji.com/bargain/',
					method:'get',
					params:{
						act:'getlocal',
						pm:'0-0-0-local-2-0'
					}
				}).then(function(data){
					console.log(data)
				})
			}
		},
		mounted(){
			this.request();
			// console.log(this)
		}
	}



</script>