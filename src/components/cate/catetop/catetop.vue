<template>
	<div class="cate_header">
		<a href="#/shouye">
			<span class="cate_header_left"></span>			
		</a>		
		<span class="cate_header_title" >{{title}}</span>
		<span class="cate_header_right" v-on:click="changestate()"></span>
	</div>
</template>

<style type="text/css">
	.cate_header{
		width:100%;
		height:1.2rem;
		background:#f9f9f9;
		font:bold .42667rem "微软雅黑";
		color:#333;
		border-bottom: 2px solid #ccc;
		display:flex;
		justify-content:space-between;
		align-items: center;
		position:absolute;
		top:0;
		left:0;
	}
	.cate_header_left{
		margin-left:10px;
		display:inline-block;
		width:1.2rem;
		height:1.2rem;
		background: url(https://img2.ch999img.com/static/images/m/icon.png?v=2) no-repeat;
		background-position:0 -1.02778rem;
	}
	.cate_header_right{
		display:inline-block;
		width:1.2rem;
		height:1.2rem;
		background:url(https://img2.ch999img.com/static/images/m/icon.png?v=2) no-repeat;
		background-position:0 -2.1867rem;
	}
</style>

<script type="text/javascript">
	export default {
		props:['Title'],
		methods:{
			changestate(){
				this.$store.state.navstate = !this.$store.state.navstate
			}
		},
		data(){
			return {
				title:this.Title
			}
		}
		
	}


</script>