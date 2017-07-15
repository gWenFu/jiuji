<template>
	<div class="indexfooter_nav_box">
		<ul class="indexfooter_nav">
			<li>
				<a href="">登录</a>
			</li>
			<li>
				<a href="">注册</a>
			</li>
			<li>
				<a href="">投诉</a>
			</li>
			<li v-link>
				<a href="">↑回顶部</a>
			</li>
		</ul>
		<ul class="type">
			<li>
				<a href="">触屏版</a>
			</li>
			<li>
				<a href="">电脑版</a>
			</li>
			<li>
				<a href="">客户端</a>
			</li>
		</ul>
		<div class="copyright">
			<div class="copyright_top">
				Copyright&copy;2006-2017 九机网（9ji.com）<br/>云南叁玖网略科技有限公司版权所有
			</div>
			<div class="copyright_bottom">-到底了哦^.^--</div>
		</div>
	</div>

</template>


<style type="text/css">
	.indexfooter_nav_box{
		background:#eee;
	}
	.indexfooter_nav{
		width:100%;
		height:1.0668rem;
		border:1px solid #ccc;
		border-right:0;
		border-left: 0;
		display:flex;

	}
	.indexfooter_nav li{
		width:25%;
		height:100%;
		text-align: center;
		font:lighter .32rem/1.0668rem '微软雅黑';
		position: relative;
	}
	.indexfooter_nav li::after{
		content:'';
		display:inline-block;
		width:2px;
		height:30px;
		background:#ccc;
		position:absolute;
		right:0;
		top:35%;

	}
	.indexfooter_nav li:last-of-type::after{
		display: none;
	}
	.indexfooter_nav li a{
		color:#333;
	}
	
	.type{
		width:100%;
		height:1.0668rem;
		display:flex;
		justify-content: space-around;
		align-items: center;
	}
	.type a{
		color:#3caaff;
		font:lighter .32rem/1.0668rem "微软雅黑";
	}
	.type li {
		width:33.333%;
		text-align: center;
		position: relative;
	}
	.type li::after{
		content:"";
		display:inline-block;
		width:4px;
		height:30px;
		background:#ccc;
		position: absolute;
		right:0;
		top:35%;
	}
	.type li:last-of-type::after{
		display:none;
	}
	
	.copyright{
		width:100%;

	}
	.copyright_top{
		width:100%;
		height:1.3867rem;
		font:lighter 0.36rem/.6rem "微软雅黑";
		color:#9c9c9c;
		text-align: center;
	}
	.copyright_bottom{
		width:100%;
		font:lighter 0.36rem/.6rem "微软雅黑";
		color:#9c9c9c;
		text-align: center;
		margin-top:20px;
	}

	.linktotop{
		animation: linkto 2s linear;
	}

	@keyframes linkto{
		0{
			scroll-top:1000; 
		}
		50%{
			scroll-top:300; 

		}
		100%{
			scroll-top:0; 

		}
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				tag:false
			}
		},
		methods:{
			linkto(){
				this.tag = true;
				if(window.scrollY == 0){
					this.tag = !this.tag
					
				}
			}
		},
		directives:{
			link:{
				bind:function(el){
					el.addEventListener('click',linkto,false);
					// function linkto(){
					// 	clearInterval(timer);

					// 	const timer = setInterval(function(){
					// 		document.body.scrollTop-=300;

					// 	},60);
					// 	if(document.body.scrollTop == 0){
					// 		clearInterval(timer);
					// 	}
						
					// }
					function linkto(){
						document.body.scrollTop = 0;
					}
				}
			}
		}
	}



</script>