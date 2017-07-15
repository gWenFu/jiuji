import flexible from './assets/js/flexible.js';
import css from './assets/css/reset.css';
import vue from 'vue';
import app from './App';
import router from './router/index.js';
import resource from 'vue-resource';
//轮播图插件
import vueAwesomeSwiper from 'vue-awesome-swiper';
import vuex from "vuex";



//注入模块
vue.use(vueAwesomeSwiper);
vue.use(resource);
vue.use(vuex);
import {swiper,swiperSlide} from 'vue-awesome-swiper/ssr';
export default {
	componts:{
		swiper,
		swiperSlide
	}
}


//store 仓库
const store = new vuex.Store({
	//state 存储状态
	state:{
		stateindex:0,
		navstate:false,
		navstate1:false,
		arr:[],
		history:[]
	},
	//行为，对状态进行改变，是静态行为
	mutations:{
		changestate(state,id){
			// console.log(id)
			if(id == '分类'){
				state.arr = ['分类筛选','全部','手机','笔记本','平板电脑'];
				// console.log(state.arr1);
			}
			if(id == '品牌'){
				state.arr = ['品牌筛选','全部','苹果(Apple)','小米(MI)','华为(HUAWEI)','荣耀(Honor)','三星(SAMSUG)','ViVO','金立','戴尔(DELL)','华硕(ASUS)'];
				// console.log(state.arr2);
				
			}
			// console.log(state.arr)
			state.navstate1 = !state.navstate1;
		}
	},
	//行为，对状态进行改变，异步行为
	actions:{

	}




});


const vm = new vue({
	el:'#app',
	render:h=>h(app),
	router,
	resource,
	vuex,
	store



})