<template>
	<div class="search">
		<div class="search_top">
			<a href="#shouye">
				×				
			</a>	
			<div>
				<input type="search" placeholder="iPhone 7 红色">
				<button type="submit"  v-sethistory >
					<i></i>
				</button>
			</div>		
			
		</div>
		<div class="hotsearch">
			<dl>
				<dt>热搜  :</dt>
				<dd>
					<a href="">OPPO R11</a>
					<a href="">三星S8</a>
					<a href="">数据线</a>
					<a href="">锤子坚果pro</a>
					<a href="">小米MAX2</a>
					<a href="">华为</a>
					<a href="">MacBook12</a>
					<a href="">九机定制膜</a>
					<a href="">华为2代手表</a>
				</dd>
			</dl>
		</div>
		<div class="history">
			<dl>
				<dt>历史：</dt>
				<div>
					<dd></dd>
				</div>
			

			</dl>
		</div>

	</div>


</template>

<style type="text/css">
	.search{
		width:100%;
		height:100%;
		background:#f5f5f5;
	}
	.search_top{
		width:100%;
		height:100%;
	}
	.search_top{
		width:100%;
		height:1.0667rem;
		display:flex;
		justify-content: space-around;
		align-items:center;
	}
	.search_top div{
		display:flex;
	}
	.search_top a{
		display:block;
		width:1.0667rem;
		height:1.0667rem;
		font-size:.64rem;
		text-align: center;
		line-height: 1.0667rem;
	}
	.search_top input{
		width:7.5467rem;
		height:.8rem;
		font:lighter .3733rem "微软雅黑";
		color:#333;
		text-indent:.1333rem;
		/*outline: none;*/
		border:1px solid #ccc;
	}
	.search_top button{
		display:block;
		width:1.0667rem;
		height:.8rem;
		border:1px solid #ccc; 
		border-top-right-radius:.13333rem;
		border-bottom-right-radius:.13333rem;
		background:0;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search_top button i{
		display:block;
		width:.4rem;
		height:.4rem;
		background: url(https://img2.ch999img.com/static/images/m/icon.png?v=2);
		background-size:1.6533rem 3.4666rem;
		background-position: -.9333rem 0;
	}
	.hotsearch{
		width:100%;
		height:2.24rem;
		border:1px solid #dfdfdf;
		border-left:0;
		border-right:0;
		/*padding:.5333rem;*/
	}
	.hotsearch dl{
		width:100%;
		height:100%;
		display:flex;
		justify-content:space-around;
		align-items: center;
	}
	.hotsearch dl dt{
		width:1.06667rem;
		height:.64rem;
		color:#9c9c9c;
		font:lighter .32rem/.75rem "微软雅黑";
		text-align: center;
		align-self:flex-start;
		margin:10px 1.3% 0 10px;
		/*float: left;*/
	}
	.hotsearch dl dd{
		width:88%;
		float: right;
	}
	.hotsearch dl dd a{
		display: inline-block;
		padding:.0625rem .3125rem;
		border-radius:.3125rem;
		background: #fff;
		color:#6b6b6b;
		font:lighter .3733rem "微软雅黑";
		border:1px solid #dfdfdf;
	}
	.history{
		width:100%;
		border-bottom: 1px solid #ccc;
	}
	.history dl{
		width:100%;
		display:flex;
	}
	.history dl dt{
		width:1.06667rem;
		height:.8rem;
		font:lighter .32rem/.8rem "微软雅黑";
		text-align: center;
		color:#9c9c9c;
		margin:10px 1.3% 0 10px;

	}
	.history dl div{
		margin-top:10px;
	}
	.history dl div{
		width: 8.4rem;
	}
	.history dl dd{
		height:.8rem;
		width: 8.4rem;
		font:lighter .32rem/.8rem '微软雅黑';
		color:#6b6b6b;
		border-bottom:1px solid #ccc;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
	.history dl div::after{
		content: '清除历史记录';
		display:block;
		width: 100%;
		height: 100%;
		color:#3caaff;
		font:lighter .32rem/.8rem '微软雅黑';
		text-align: center;
	}

</style>
<script type="text/javascript">
	export default {
		methods:{
			aaaaa(){
				console.log(this);
			}
		},
		directives:{
			sethistory:{
				bind:function(el,binding,vnode){
					//获取到vue对象	
					// const  Vm = vnode.context;	
					// console.log(binding.arg)		
					el.onclick=function(){
						// console.log(el.previousSibling);
						// const odl = el.parentNode.parentNode.parentNode.getElementsByClassName('history')[0].getElementsByTagName('dl')[0].getElementsByTagName('div')[0];
						// console.log(odl);
						let inputvalue = el.parentNode.getElementsByTagName('input')[0].value;
						// console.log(inputvalue);
						// console.log(Vm.$store.state.arr)	


						
					
						// const odd = document.createElement('dd');
						// odd.innerHTML = inputvalue;
						// odd.appendChild(odl);
						// console.log(odd);

					}
				}
			}
		}
	}


</script>