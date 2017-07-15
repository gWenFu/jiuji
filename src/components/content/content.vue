<template>	
		<router-view>
	       <!-- <v-header></v-header>
	       <v-footer></v-footer> -->		  
			
		</router-view>	
</template>
<style type="text/css">
	
</style>
<script type="text/javascript">
	import vHeader from '../header/header.vue';
  	import vFooter from '../footer/footer.vue';

  export default {
  	components:{
  		vHeader,vFooter
  	}
  }



</script>
