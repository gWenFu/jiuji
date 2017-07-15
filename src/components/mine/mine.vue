<template>
	<div class="mine_box">
		<v-minetop Title="我的"></v-minetop>
		<v-minenav></v-minenav>
		<v-minebanner></v-minebanner>
		<v-myorder></v-myorder>
		<v-mycount></v-mycount>
		<v-nav></v-nav>
	</div>
	
</template>

<style type="text/css">
	.mine_box{
		width:100%;
		height:100%;
		background:#eee;
	}


</style>

<script type="text/javascript">
	import vMinetop from '../cate/catetop/catetop.vue';
	import vMinenav from '../cate/catenav/catenav.vue';
	import vMinebanner from './minebanner/minebanner.vue';
	import vMyorder from './myorder/myorder.vue';
	import vMycount from './mycount/mycount.vue';
	import vNav from './nav/nav.vue';

	export default	{
		components:{
			vMinetop,vMinenav,vMinebanner,vMyorder,vMycount,vNav
		}
	}



</script>

