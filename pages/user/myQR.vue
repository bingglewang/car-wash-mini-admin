<template>
	<view class="page">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的二维码</block>
		</cu-custom>
		<view class="block">
			
		</view>
		<view class="QR">
			<image src="../../static/img/qr.png"></image>
		</view>
		<view class="title">
			扫描二维码，加我好友
		</view>
		<view class="btn" v-show="showBtn" @tap="printscreen">
			{{tis}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tis:"保存到相册",
				showBtn:false
			};
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showBtn = true;
			// #endif
		},
		methods:{
			// 截图，调用webview、Bitmap方法
			printscreen(){
				this.tis = "正在保存"
				let ws=this.$mp.page.$getAppWebview();
				let bitmap = new plus.nativeObj.Bitmap();
				this.showBtn = false;
				this.$nextTick(function(){
					setTimeout(()=>{
						ws.draw(bitmap,(e)=>{
							this.showBtn = true;
							console.log('bitmap绘制图片成功');
							console.log("e: " + JSON.stringify(e));
							bitmap.save("_doc/Qr.jpg", {
								overwrite: true,
								quality: 100
							}, (i)=>{
								plus.gallery.save(i.target,(e)=>{
									uni.showToast({
										title:'保存成功'
									})
									this.tis = "保存到相册"
									bitmap.clear(); //销毁
								},(e)=>{
									bitmap.clear(); //销毁
								});
							},(e)=>{
								console.log('保存图片失败：' + JSON.stringify(e));
							});
						},(e)=>{
							console.log('bitmap绘制图片失败：'+JSON.stringify(e));
						});
					},200)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page{
	background-color: #1cbbb4 ;
	height: 100vh;
}
.block{
	width: 100%;
	height: 30vh;
	background-color: #fff;
	display: flex;
	justify-content: center;
	
}
.QR{
	width: 60vw;
	height: 60vw;
	margin: -40vw auto 0 auto;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	image{
		width: 50vw;
		height: 50vw;
	}
}
.title{
	width: 100%;
	margin-top: 50upx;
	display: flex;
	justify-content: center;
	font-size: 36upx;
	color: #fff;
}
.btn{
	
	width: 50%;
	height: 80upx;
	border-radius: 80upx;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20upx;
	margin: 0 auto;
	margin-top: 50upx;
	background-color: rgba(255,255,255,.8);
}
</style>
