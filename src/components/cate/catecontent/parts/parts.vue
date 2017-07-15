<template>
	<div class="parts_box" v-show="state==1">
		<a href="" class="parts_banner">
			<img src="https://img2.ch999img.com/pic/category/201706060751380.jpg" alt="">
		</a>
		<div class="parts_title">保护壳</div>
		<div class="parts_pic">
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201705181128090.jpg" alt="">
				<span>华为/三星壳</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201705180935020.jpg" alt="">
				<span>苹果壳</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201705181128150.jpg" alt="">
				<span>oppo/vivo壳</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201608110257470.jpg" alt="">
				<span>小米/魅族壳</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201705180956460.jpg" alt="">
				<span>乐视壳</span>
			</a>
			<a href="">
				<img src="https://img2.ch999img.com/pic/category/201612221024220.jpg" alt="">
				<span>平板保护壳</span>
			</a>
			<a href="" class="more">
				<img src="https://img2.ch999img.com/pic/category/201611040251070.jpg" alt="">
				<span >更多</span>
			</a>

		</div>
	</div>

</template>

<style type="text/css">
	.parts_box{
		/*display: none;*/
	}
	.parts_banner{
		width:100%;
		height:2.2133rem;
		margin-top:20px;
	}
	.parts_banner img{
		width:100%;
		height: 100%;
	}

	.parts_title{
		width:100%;
		height:.96rem;
		font:lighter .36rem/.96rem "微软雅黑";
		color:#333;
	}
	.parts_pic{
		background:#fff;
		padding-top: 20px;
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		position: relative;
	}
	.parts_pic a{
		display:block;
		width:2rem;
		height:2.1867rem;
		margin-bottom: 20px;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content: space-between;
	}
	.parts_pic a img{
		width:1.483rem;
		height:1.483rem;
	}
	
</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				// statecode:this.$store.state.stateindex
			}
		},
		computed:{
			state(){
				return this.$store.state.stateindex;
			}
		}

	}




</script>