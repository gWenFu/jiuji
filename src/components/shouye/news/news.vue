<template>

	<div class="news">
		<p class="news_left">
			
		</p>
		<div class="news_container">
			<ul class="news_list" v-move>
				<li>预存话费送三星手机一部</li>
				<li>下月发，华为荣耀v8第一次买哦 速来订购吧</li>
				<li>什么破玩意儿啊，A级页面啊，真的好菜哦，爱国我做这样的页面我都嫌弃丢人啊真的而垃圾</li>
				<li>图上双蛇，vivox9 plus前置两千万柔光双蛇</li>
				<li>云南太极首都小河干啥破洞鄂温克上分为复仇的</li>
				<li>小米最前恭喜你奥比手机素爱抢购吧</li>
				<li>小酒库品 云娜受聘三星yoghurt还不留强狗啊</li>
				<li>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</li>
				<li>小米最前恭喜你奥比手机素爱抢购吧</li>
				<li>预存话费送三星手机一部</li>

			</ul>
		</div>
		

	</div>


</template>
<style type="text/css">
	.news{
		width:100%;
		height:1.0667rem;
		border:1px solid #ccc;
		border-right:0;
		border-left: 0;
		display:flex;
	}
	.news_left{
		width:1.65333rem;
		height:.4267rem;
		margin: .32rem .2667rem;
		background:url(https://img2.ch999img.com/static/images/m/icon.png?v=2) no-repeat;
		background-size:1.6533rem 3.467rem;
		background-position:0 -0.56rem;
	}
	.news_container{
		width:7.5467rem;
		height:100%;
		overflow: hidden;
		position:relative;
	}
	.news_list{
		width:100%;
		height:10.667rem;
		position:absolute;
		
	}
	.news_list li{
		height:1.0677rem;
		width:100%;
		font:lighter .3733rem/1.0677rem '微软雅黑';
		color:#333;
		overflow:hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.active{
		animation:move 2s linear ;

	}
	@keyframes move{
		0%{
			top:0;
		}
		100%{
			top:-1.0677rem;
		}
	}



</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				datalist:[],
				tag:true	
			}
		},
		directives:{
			move:{
				bind:function(el){
					// console.log(el.offsetTop);
					//滚动方法
					function move(){
						let step = 10;

						clearInterval(timer1);
						const timer1 = setInterval(function(){
							el.style.top = el.offsetTop - step+'px';
							if(el.offsetTop%80==0 ){
								clearInterval(timer1);

							}
						// console.log(el.offsetTop)


						},100);
					};

					//每个一定的时间 调用一次函数
					
					clearInterval(timer2);
					const timer2 = setInterval(fn,3000);

					function fn(){
						move();
						// console.log(el.offsetTop)
						if(el.offsetTop ==-720){
							console.log(el.offsetTop);
							el.style.top = 0+'px';
						}

					}
					
				}
			}
		}
	}


</script>