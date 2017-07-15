<template>
		<div class="header">
			<div class="header_box" style="opacity:0;">
				
			</div>
			<div class="header_content">
				<p class="header_place">昆明市区</p>
				<router-link to="search">
					<div class="header_search">
						<span class="search_left"></span>
						<span class="search_tip">iPhone 7 红色</span>
					</div>
				</router-link>
				
				<p class="header_msg">
					<span class="header_msg_pic"></span>
				</p>
			</div>
			
		</div>	

</template>

<style type="text/css">
	.header{
		width:100%;
		height:1.0667rem;
		position:fixed;
		top:0;
		left:0;
		z-index: 99;
	}
	.header_box{
		width:100%;
		height:100%;
		background:#ff6700;

	}
	.header_content{
		width:100%;
		height:100%;
		background:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.8));
		position:absolute;
		top:0;
		left:0;
		display:flex;
		justify-content:flex-start;
		align-items: center;
		z-index:1;
	}
	.header_place{
		width:1.6rem;
		height:1.0667rem;
		font:lighter 0.32rem/1.0667rem '微软雅黑';
		color:#fff;
		text-align:center;
	}
	.header_search{
		width:7.333rem;
		height:0.8rem;
		border-radius:0.4rem;
		color:#ccc;
		font:lighter 0.32rem/0.8rem '微软雅黑';
		padding-left:.26667rem;
		background:#fff;
	}
	.search_left{
		display:inline-block;
		width:0.4rem;
		height:0.4rem;
		background:url(https://img2.ch999img.com/static/images/m/icon.png?v=2) no-repeat;
		background-size:1.64rem 3.46rem;
		vertical-align: middle;
	}

	.header_msg{
		width:1.0667rem;
		height:1.0667rem;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.header_msg_pic{
		display:inline-block;
		width:0.56rem;
		height:0.56rem;
		background:url(https://img2.ch999img.com/static/images/m/icon.png?v=2) no-repeat;
		background-size:1.64rem 3.46rem;
		background-position:-0.4rem 0;
	}
	.state{
		display: none;
	}
	.none{
		display:block;
	}

</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		computed:{
			// state(){
			// 	return this.$store.state.tag;
			// }
		},
		mounted(){
		
		}
	}




</script>