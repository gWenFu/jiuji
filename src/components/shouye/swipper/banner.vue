<template>
	<div id="swiper">
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide>
				<img src="https://img2.ch999img.com/pic/clientimg/201706030343210.jpg" alt="">
		    </swiper-slide>
		    <swiper-slide>
				<img src="https://img2.ch999img.com/pic/clientimg/201706020759590.jpg" alt="">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="https://img2.ch999img.com/pic/clientimg/201706020759190.jpg" alt="">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="https://img2.ch999img.com/pic/clientimg/201706020758140.jpg" alt="">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="https://img2.ch999img.com/pic/clientimg/201706051202330.jpg" alt="">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-scrollbar"   slot="scrollbar"></div>
	  </swiper>
	</div>

</template>
<style type="text/css">
	#swiper img{
		width:100%;
		height:5rem !important;
	}

</style>
<script type="text/javascript">

// console.log('为什么不能空呢这里？郁闷啊');
	export default {
		// name:'carrousel',
		data(){
			return {
				swiperOption:{
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction : false,
					pagination : '.swiper-pagination',
				}
			}
		}
	}

	
</script>