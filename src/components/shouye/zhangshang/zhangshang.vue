<template>
	<div class="zhangshang">
		<div class="zhangshang_title">掌上专享</div>
		<div class="zhangshang_content">
			<div v-for="(item,index) in productlist" class="box">
				<router-link :to="{ path: 'datail', query:{id:item.PPriceId}}">
					<p class="zhangshang_name">
						{{item.Title}}
					</p>
					<p class="zhangshang_description">
						{{item.Description}}
					</p>
					<p class="zhangshang_buy">立即购买></p>
					<p class="zhangshang_pic">
						<img :src="item.Image" alt="">
					</p>
				</router-link>

			</div>
				
		</div>
	</div>


</template>


<style type="text/css">
	.zhangshang::before{
		width:100%;
		content: '';
		display:block;
		height:20px;
		background:#eee;
	}
	.zhangshang_content{
		width:100%;
		display: flex;
		flex-wrap: wrap;
		position:relative;

	}
	.zhangshang_content a{
		display:block;
		width:100%;
		height:100%;
	}
	.box{
		width:50%;
		height:3.093rem;
		border:2px solid #eee;
		border-left:0;
		border-top:0;
		padding:10px;
		position:relative;
	}
	.box:nth-of-type(3){
		position:absolute;
		right:0;
		top:3.0667rem;
	}
	.zhangshang_title{
		width:100%;
		height:.96rem;
		font:bold .4rem/.96rem '微软雅黑';
		color:#333;
		display:flex;
		align-items:center;
	}
	.zhangshang_title::before{
		content: '';
		display:inline-block;
		width:.2133rem;
		height:.42667rem;
		background:#fbcb30;
		margin:0 15px;
	}
	.zhangshang_name{
		width:2.9867rem;
		height:.56rem;
		font:lighter .32rem '微软雅黑';
		color:#333;
		overflow: hidden;
		white-space:nowrap;
		text-overflow: ellipsis;
	}
	.zhangshang_description{
		width:2.9867rem;
		height:.56rem;
		font:lighter .32rem '微软雅黑';
		color:#fe8d4d;
	}
	.zhangshang_buy{
		color:#a3a3a3;
		font-weight:bold;
		font-size:.32rem;
		margin-top:.4rem;
	}
	.zhangshang_pic img{
		width:2rem;
		height:2rem;
		position:absolute;
		right:20px;
		bottom:2px;
	}






	.zhangshang_content>div:first-of-type{
		height:6.1867rem;
	}
	.zhangshang_content>div:first-of-type img{
		width:3.4667rem;
		height:3.4667rem;
		position:absolute;
		bottom:0;
		left: .64rem;

	}









</style>


<script>
	export default {
		data(){
			return {
				
				productlist:[]
			}
		},
		methods:{
			request(){
				this.$http({
					url:'https://m.9ji.com/app/3_0/HomeHandler.ashx?act=GetHomeRealTimeDetail',
					method:'get'
				}).then(function(res){
					this.productlist = res.data.data.RecommendProduct.ProductList;
					console.log(res,this.dataLikelist,this.productlist);
				})
			}
		},
		mounted(){
			this.request();
		}

	}

</script>