<template>
	<div class="datail">
		<datail-top></datail-top>
		<datail-banner :pic="dataobj"></datail-banner>
		<product-msg :pic="dataobj"></product-msg>
	</div>
</template>

<style type="text/css">
	.datail{
		background:#eee;
		min-height: 100%;		
	}


</style>

<script type="text/javascript">
import datailTop from './datailtop/datailtop.vue';
import datailBanner from './datailbanner/datailbanner.vue';
import productMsg from './productmsg/productmsg.vue';


	export default{
		data(){
			return {
				dataobj:{}
			}
		},
		methods:{
			request(id){
				this.$http({
					url:'https://m.9ji.com/30s/Api/3_0/ProductDetailHandler.ashx?',
					params:{
						act:'GetStaticProductDetail',
						ppid:id
					},
					method:'get'
				}).then(function(res){					
					// console.log(res.data.data);
					this.dataobj = res.data.data;
						


				})
			}
		},
		mounted(){
			this.request(this.$route.query.id);
		},
		components:{
			datailTop,datailBanner,productMsg
		}

	}

</script>

