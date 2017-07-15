<template>
	<div class="youlike_container">
		<div class="youlike_title">
			—根据您的浏览为您推荐—
		</div>
		<div class="youlike_content">
			<a href="" v-for="i in dataLikelist">
				<dl>
					<dt>
						<img :src="i.imgurl" alt="">			
					</dt>
					<dd>{{i.activitytitle}}</dd>
					<dd>￥{{i.price}}</dd>
				</dl>
			</a>
			
		</div>
	</div>


</template>

<style type="text/css">
	.youlike_container{
		width:100%;
	}
	.youlike_container::after{
		content:'';
		display:block;
		width:100%;
		height:20px;
		background:#eee;
	}
	.youlike_title{
		width:100%;
		height:.96rem;
		font:lighter .4rem/.8rem '微软雅黑';
		color:#333;
		text-align: center;
		background:#eee;
	}
	.youlike_content{
		width:100%;
		display:flex;
		/*justify-content:center;*/
		flex-wrap:wrap;

	}
	.youlike_content a{
		display:block;
		width:50%;
		height:4.8rem;
	}
	.youlike_content a dl{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
		align-items:center;
		border-right:.10667rem solid #eee;
		border-bottom: .10667rem solid #eee;
	}
	.youlike_content a dl dt{
		display: flex;
		justify-content:center;
		margin-top:0.5333rem;
	}
	.youlike_content a dl dd{
		text-align: center;
	}
	.youlike_content a dl dd:first-of-type{
		font:lighter 0.32rem '微软雅黑';
		color:#333;
		width:3.68rem;
		margin:20px 0 10px 0;
	}
	.youlike_content a dl dd:last-of-type{
		font:bolder .32rem "微软雅黑";
		color:#e12e2e;
		margin:10px 0 20px 0;
	}
	.youlike_content a dl dt img{
		width:2.5333rem;

	}










</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				dataLikelist:[]
			}
		},
		methods:{
			request(){
				this.$http({
					url:'https://m.9ji.com/app/3_0/HomeHandler.ashx?act=GetHomeRealTimeDetail&t=1496743095591',
					method:'get'
				}).then(function(res){
					this.dataLikelist = res.data.data.LikeProduct.productlist;
					console.log(this.dataLikelist);
				})
			}
		},
		mounted(){
			this.request();
		}
	}




</script>