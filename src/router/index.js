import vuerouter from 'vue-router';
import vue from 'vue';
import shouye from '../components/shouye/shouye.vue';
import cate from '../components/cate/cate.vue';
import cart from '../components/cart/cart.vue';
import mine from '../components/mine/mine.vue';
import search from '../components/search/search.vue';
import onehand from '../components/onehand/onehand.vue';
import datail from '../components/datial/datail.vue';


vue.use(vuerouter);
export default new vuerouter({
	routes:[
		{
			name:'shouye',
			path:'/shouye',
			component:shouye,
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/',
			redirect:'shouye'
		},
		{
			name:'cate',
			path:'/cate',
			component:cate
		},
		{
			name:'cart',
			path:'/cart',
			component:cart
		},
		{
			name:'mine',
			path:'/mine',
			component:mine
		},
		{
			path:'/onehand',
			component:onehand
		},
		{
			path:'/datail',
			component:datail
		}
	]
});
