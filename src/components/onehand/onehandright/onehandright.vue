<template>
		<div class="onehandright_box"  v-bind:class="show?'showdiv':'nonediv'" v-on:click="changestate()">
			<div class="onehandright" v-on:click="change($event)">
				<!-- <p class="choose">品牌筛选</p> -->
				<ul>
					<li v-for="i in arr">
						<a href="">{{i}}</a>
					</li>
					
				</ul>
			</div>
		</div>
		

</template>

<style type="text/css">
	.onehandright_box{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		right:-100%;
		bottom:0;
		background:rgba(0,0,0,0.1);
	}
	.onehandright{
		width:50%;
		height:100%;
		position:absolute;
		right:0;
		top:0;
		background:#2c3e50;
		z-index: 99;
		background:#2c3e50;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.onehandright ul li:first-of-type{
		border-bottom:3px solid #fff;
		
	}
	.showdiv{
		animation: appear .3s linear;
		animation-fill-mode:forwards;
	}
	.nonediv{
		animation: nonediv .3s linear;
		animation-fill-mode:forwards;
	}
	.choose{
		width:4.2667rem;
		height:1.0933rem;
		font:lighter .3733rem/1.0933rem '微软雅黑';
		color:#fff;
	}

	html[data-dpr="1"] .choose{
		border-bottom:1px solid #fff;
		
	}
	html[data-dpr="2"] .choose{
		border-bottom:2px solid #fff;

	}
	html[data-dpr="3"] .choose{
		
	}
	.onehandright>ul{
		width:4.2667rem;
		min-height:90%
	}
	.onehandright>ul li{
		width:100%;
		height:1.066667rem;		
	}
	.onehandright>ul li a{
		font:lighter 0.32rem/1.066667rem "微软雅黑";
		color:#fff;
		text-align: center;
	}






	@keyframes appear{
		0%{
			right:-100%;
		}
		100%{
			right:0;
		}
	}
	@keyframes nonediv{
		0%{
			right:0%;
		}
		100%{
			right:-100%;
		}
	}


</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			changestate(){
				this.$store.commit('changestate');
				
			},
			change(e){
				// console.log(e);			
				 e = e||window.event;
				e.stopPropagation();
			}
		},
		mounted(){
			// this.arr = this.$store.state.arr;
		},
		computed:{
			show(){
				return this.$store.state.navstate1;

			},
			arr(){
				return this.$store.state.arr
			}
		}
	}


</script>