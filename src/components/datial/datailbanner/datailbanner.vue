<template>
	<div>
		<div class="swiper">
			<swiper :options="swiperOption" ref="mySwiper">
			    <!-- slides -->
			    <swiper-slide v-for="i in data1.datapic">
					<img :src="i" alt="">
			    </swiper-slide>
			    
			    <!-- Optional controls -->
		  </swiper>
		</div>
		 <div class="pic">
	  		<img src="https://img2.ch999img.com//pic/edt/ad/20170609/20170609150105_9557.jpg" alt="">
	 	 </div>
	</div>
	
	

</template>
<style type="text/css">
	.swiper{
		margin-top: 0.133333rem;
		background: #fff;
	}
	.swiper img{
		display:block;
		width:8.0rem;
		height:8.0rem !important;
		margin-left:1.0rem;
	}
	.pic{
		width:100%;
		height:1.0rem;
	}
	.pic img{
		width:100%;
		height:100%;
	}

</style>
<script type="text/javascript">
	export default{
		props:['pic'],
		data(){
			return {
			
				swiperOption:{
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction : false,
				}
			}
		},
		mounted(){
			// console.log(this.datapic);
			console.log(this.pic)

		},
		computed:{
			data1(){
				return {
					datapic:this.pic.ProductImgUrl,
				}
			}
			 
		}

	}



</script>
