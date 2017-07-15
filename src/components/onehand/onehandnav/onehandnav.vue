<template>
	<div class="onehandnav">
		<ul>
			<li v-on:click="showstate('分类')">
				分类
				<i></i>
				
			</li>
			<li v-on:click="showstate('品牌')">
				品牌
				<i></i>
			</li>
			<li>价格</li>
			<li>门店选择</li>
		</ul>




	</div>

</template>

<style type="text/css">
	.onehandnav{
		width:100%;
		height:1.06667rem;
		background:#fff;
		margin-top:20px;
		border-bottom: 1px solid #ccc;
	}
	.onehandnav ul{
		width:100%;
		height:100%;
		display:flex;
		justify-content:space-around;
		align-items: center;
	}
	.onehandnav ul li{
		width:25%;
		height:100%;
		text-align: center;
		font:lighter .3733rem/1.06667rem "微软雅黑";
		color:#333;
		position:relative;

	}
	.onehandnav ul li i{
		display:inline-block;
		width:0;
		height:0;
		border:.1333rem solid transparent;
		border-top-color:#000;
		position: absolute;
		top:50%;
		right:20%;

	}

</style>

<script type="text/javascript">
	export default{
		date(){
			return {
				
			}
		},
		methods:{
			showstate(id){
				this.$store.commit('changestate',id); 
			}
		}
	}

</script>