<template>
	<div class="app">
		<v-header></v-header>
		<v-swiper></v-swiper>
		<v-nav></v-nav>
		<v-news></v-news>
		<v-xianshi></v-xianshi>
		<v-zhangshang></v-zhangshang>
		<v-picbanner></v-picbanner>
		<v-today></v-today>
		<v-youlike></v-youlike>
		<v-indexfooter></v-indexfooter>
	    <v-footer></v-footer>

		
	</div>
	
</template>

<style type="text/css">
	.app{
		position:relative;
	}

</style>

<script type="text/javascript">
	// import vue from 'vue';
	import vHeader from '../header/header.vue';
 	import vFooter from '../footer/footer.vue';
	import vSwiper from './swipper/banner.vue';
	import vNav from './nav/nav.vue';
	import vNews from './news/news.vue';
	import vXianshi from './xianshi/xianshi.vue';
	import vZhangshang from './zhangshang/zhangshang.vue';
	import vPicbanner from './picbanner/picbanner.vue';
	import vToday from './today/today.vue';
	import vYoulike from './youlike/youlike.vue';
	import vIndexfooter from './indexfooter/indexfooter.vue';



	export default {
		components:{
			vSwiper,
			vNav,
			vNews,
			vXianshi,
			vZhangshang,vPicbanner,vToday,vYoulike,vIndexfooter,vHeader,vFooter
		},
		 directives:{
        scroll: {
          bind:function(el){
            let dpr = window.devicePixelRatio;
            // console.log(dpr)
            let h = 400 * dpr;
            let b = 1/h;
            console.log(el);
            let opacitydata;
            document.body.onscroll = function(){
              console.log((h - document.body.scrollTop)*b);
            
              opacitydata = (1-(h - document.body.scrollTop)*b);

            const oel = document.getElementsByClassName('header_box')[0];
              oel.style.opacity = opacitydata;
            }
          }
        }
    }
	}
	




</script>