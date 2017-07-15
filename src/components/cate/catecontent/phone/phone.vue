<template>
	<div class="phone_box" v-show="state==0">
		<div class="top_banner">
			<img src="https://img2.ch999img.com/pic/category/201706060742450.jpg" alt="">		
		</div>
		<div class="phone_hot">热门品牌</div>
		<div class="hot_pic">
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703261132360.jpg" alt="">
				<span>苹果</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703261133240.jpg" alt="">
				<span>华为</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>荣耀</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611291011530.jpg" alt="">
				<span>小米</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703300123260.jpg" alt="">
				<span>三星</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>魅族</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611160227320.jpg" alt="">
				<span>小米</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611291008190.jpg" alt="">
				<span>三星</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703261133160.jpg" alt="">
				<span>乐视</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611291008060.jpg" alt="">
				<span>美图</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703261133040.jpg" alt="">
				<span>vivo</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611291008060.jpg" alt="">
				<span>oppo</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>基尼</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>一加</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>360</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201703261133040.jpg" alt="">
				<span>vivo</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201611291008060.jpg" alt="">
				<span>oppo</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201704020907130.jpg" alt="">
				<span>基尼</span>
			</a>
			
		</div>
	</div>
	

</template>

<style type="text/css">
	.phone_box{
		/*display: none;*/
	}
	.top_banner{
		width:100%;
		height:2.2133rem;
	}
	.top_banner img{
		width:100%;
		height:100%;
	}
	.phone_hot{
		width:100%;
		height:.96rem;
		font:lighter .36rem/.96rem "微软雅黑";
		color:#333;
	}
	.hot_pic{
		background:#fff;
		padding-top: 20px;
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		

	}
	.hot_pic a{
		display:block;
		width:2rem;
		height:2.1867rem;
		margin-bottom: 20px;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content: space-between;
	}
	.hot_pic a img{
		width:1.483rem;
		height:1.483rem;
	}

</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				statecode:this.$store.state.stateindex
			}
		},
		computed:{
			state(){
				return this.$store.state.stateindex;
			}
		}
	}



</script>