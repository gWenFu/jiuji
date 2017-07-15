<template>
	<div class="catenav_box" v-show="navstate">
		<ul>
				<li>
					<a href="#shouye">

						<i></i>
						<span>首页</span>
					</a>

				</li>
			
				<li>
					<a href="#cate">
						<i></i>
						<span>商品分类</span>
					</a>

				</li>
				<li>
					<a href="#cart">
						<i></i>
						<span>购物车</span>
					</a>
				</li>
				<li>
					<a href="#mine">
						<i></i>
						<span>会员中心</span>
					</a>
				</li>
		</ul>


	</div>




</template>



<style type="text/css">
	.catenav_box{
		width:100%;
		height:1.333rem;
		background:#333;
		margin-top:1.2rem;
		/*display:none;*/
	}
	.catenav_box ul{
		width:100%;
		height:100%;
		display: flex;
		justify-content: space-around;
		align-items:center;
		text-align: center;
	}
	.catenav_box ul a{
		display:block;
		width:100%;
		height:100%;
		color:#fff;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.catenav_box ul li{
		width:100%;
		height:100%;
		
	}
	.catenav_box ul li i{
		display:inline-block;
		width:.5333rem;
		height:.533rem;
		background: url(https://img2.ch999img.com/static/images/m/bottom_nav@2x.png) no-repeat;
		background-size: 2.133rem .533rem;

	}
	.catenav_box ul li:first-of-type i{
		background-position: 0 0;
	}

	.catenav_box ul li:nth-of-type(2) i{
		background-position:-.5333rem 0;

	}
	.catenav_box ul li:nth-of-type(3) i{
		background-position:-1.0667rem 0;

	}
	.catenav_box ul li:nth-of-type(4) i{
		background-position:-1.6rem 0;

	}

</style>


<script type="text/javascript">
	export default {
		computed:{
			navstate(){
				return this.$store.state.navstate;
			}
		}
	}


</script>