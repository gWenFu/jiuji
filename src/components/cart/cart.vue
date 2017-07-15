<template>
	<div class="cart">
		<cart-top Title="购物车"></cart-top>
		<cart-nav></cart-nav>
		<cart-pic></cart-pic>

	</div>



</template>

<style type="text/css"></style>

<script type="text/javascript">
	import cartTop from '../cate/catetop/catetop.vue';
	import cartNav from '../cate/catenav/catenav.vue';
	import cartPic from './emptycartpic/emptycartpic.vue';
	export default{
		components:{
			cartTop,cartNav,cartPic
		},
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
		}
		
	}


</script>