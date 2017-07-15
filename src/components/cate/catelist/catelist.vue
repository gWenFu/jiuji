<template>
	<ul class="cate_list">
		<li v-for="(item,key) in datalist" v-on:click="tab(key)" v-bind:class="{'active':key==statecode}">
			{{item}}
		</li>
	</ul>



</template>

<style type="text/css">
	.cate_list{
		width:28%;
		height:17.6533rem;
	}
	.cate_list li{
		width:100%;
		height:1.6rem;
		font:lighter 0.34667rem/1.6rem "微软雅黑";
		color:#333;
		text-align: center;
	}
	
.active{
	background: #f9f9f9;
	color:#ff6700!important;
}




</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				datalist:['手机通讯','手机配件','电脑办公','智能穿戴','时尚影音','智能家居','智能出行','娱乐竞技','智能健康'],
				statecode:0
				

			}
		},
		methods:{
			tab(index){
				this.statecode = index;
				this.$store.state.stateindex = index;
				console.log(this.$store.state.stateindex)
			
			}
		},
		computed:{
			changestate(){
				return this.$store.state.tag;
			}
		}
	}


</script>