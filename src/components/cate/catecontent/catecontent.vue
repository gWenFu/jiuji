<template>
	<div class="catecontent_container">
		<div class="catecontent_box">
			<v-phone></v-phone>
			<v-parts></v-parts>
		</div>
		
	</div>



</template>

<style type="text/css">
	.catecontent_container{
		width:72%;
		height:100%;
		background: #f9f9f9;
		overflow: auto;
		padding:0 20px;
	}
	.catecontent_box{
		width:100%;
		padding-top: 20px;
	}
	
</style>

<script type="text/javascript">
 import vPhone from './phone/phone.vue';
 import vParts from './parts/parts.vue';

	export default {
		components:{
			vPhone,vParts
		},
		data(){
			return {
				stateincode:this.$store.state.stateindex
			}
		},

		
	}


</script>