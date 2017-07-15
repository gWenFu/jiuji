<template>
	<div id="app" v-scroll>
       <!-- <v-header></v-header> -->
      <v-content></v-content>
       <!-- <v-footer></v-footer>		   -->
	</div>
   


</template>
<style type="text/css">
  #app{
    width:100%;
    height:17.787rem;
    /*overflow: auto;*/
  }


</style>

<script type="text/javascript">
  import vHeader from './components/header/header.vue';
  import vFooter from './components/footer/footer.vue';
  import vContent from './components/content/content.vue';


  export default {
      components:{
          vHeader,
          vFooter,
          vContent
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
            document.onscroll = function(){
              // console.log((h - document.body.scrollTop)*b);          
            
              opacitydata = document.body.scrollTop*b;

            const oel = document.getElementsByClassName('header_box')[0];
              oel.style.opacity = opacitydata;
            }
          }
        }
    }
  }


</script>
