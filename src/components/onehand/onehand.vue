<template>
	<div class="onehand">
		<onehand-top Title="一手优品"></onehand-top>
		<onehandtop-nav></onehandtop-nav>
		<img src="https://img2.ch999img.com//static/images/m/bargain/banner.jpg?v=4" alt="">
		<onehand-nav></onehand-nav>
		<onehand-content></onehand-content>
		<onehand-right></onehand-right>
	</div>
	

</template>

<style type="text/css">
	.onehand{
		background:#eee;
		min-height:100%;
		position: relative;
		overflow:hidden;
	}
	.onehand>img{
		width:100%;
		height:4.666rem;

	}

</style>

<script type="text/javascript">
	import onehandTop from '../cate/catetop/catetop.vue';
	import onehandtopNav from '../cate/catenav/catenav.vue';
	import onehandNav from './onehandnav/onehandnav.vue';
	import onehandContent from './onehandcontent/onehandcontent.vue';
	import onehandRight from './onehandright/onehandright.vue';
	export default {
		components:{
			onehandTop,onehandtopNav,onehandNav,onehandContent,onehandRight
		}
	}


</script>