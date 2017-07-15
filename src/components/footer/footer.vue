<template>
	<div class="footer_container" >
		<ul class="footer_list">
			<li>
				<p>
					<router-link to="shouye">
						<img src="https://img2.ch999img.com/pic/clientimg/201703200154440.png" alt="">
					</router-link>
					
				</p>
			</li>
			<li>
				<p >
					<router-link to="cate">
						<img src="https://img2.ch999img.com/pic/clientimg/201703200154540.png" alt="">
					</router-link>
					
				</p>
			</li>
			<li>
				<p class="footer_list_top" >
					<router-link to="jiuji">
						<img src="https://img2.ch999img.com/pic/clientimg/201702170250360.png" alt="">
					</router-link>
					
				</p>
			</li>
			<li>
				<p >
					<router-link to="cart">
						<img src="https://img2.ch999img.com/pic/clientimg/201703200155050.png" alt="">
					</router-link>
					
				</p>
			</li>
			<li>
				<p >
					<router-link to="mine">
						<img src="https://img2.ch999img.com/pic/clientimg/201703200155180.png" alt="">
					</router-link>
					
				</p>
			</li>
		</ul>


	</div>
</template>

<style type="text/css">
	.footer_container{
		width:100%;
		height:1.2rem;
		background:#efefef;
		display:flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left:0;
	}
	.footer_list{
		width:100%;
		height:100%;
		display:flex;
		align-items:center;
		justify-content: space-around;
	}
	.footer_list li{
		height:100%;
		width:25%;
		text-align: center;
	}
	.footer_list  img{
		width:1.2rem;
		height:1.2rem;
	}
	
</style>
<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		methods:{
			// changestate(){
			// 	this.$store.state.tag = !this.$store.state.tag;
			// }
		},
		computed:{
			// state(){
			// 	return this.$store.state.tag;
			// }
		}
	}


</script>