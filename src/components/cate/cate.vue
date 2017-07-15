<template>
	<div class="cate" >
		
		<cate-top Title="商品分类"></cate-top>
		<div class="container">
			<cate-nav></cate-nav>
			<div class="cate_box" >
				<cate-list></cate-list>
				<cate-content></cate-content>
			</div>
		</div>
		



	</div>
</template>

<style type="text/css">
	.cate{
		width:100%;
		height:100%;
		padding-top:0.1px;
		position:fixed;
		top:0;
		left:0;
	}
	.container{
		margin-top: 1.2rem;
	}
	.cate_box{
		width:100%;
		height:17.6533rem;
		/*position:relative;*/
		display:flex;
		justify-content:flex-start;
		margin:0 13rem 0 0;

	}

	


</style>

<script type="text/javascript">
	import cateTop from './catetop/catetop.vue';
	import cateList from './catelist/catelist.vue';
	import cateContent from './catecontent/catecontent.vue';
	import cateNav from './catenav/catenav.vue';

	export default {
		components:{
			cateTop,cateList,cateContent,cateNav
		},
		data(){
			return {
				statecode:this.$store.state.stateindex,
				
			}
		}
		
		
	}



</script>