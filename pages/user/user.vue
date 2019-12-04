<template>  
    <view class="container">  
		<cu-custom  :isBack="true" style="position: fixed;left: 0;top: 0;z-index: 999;background:rgba(190,190,190,0.5);color: #FFFFFF;">
			<block slot="backText"></block>
			<block slot="content">个人中心</block>
		</cu-custom>
		<view class="user-section" :style="{height: MyCustomBar+'px'}">
			<view class="user-info-box">
				<!-- 用户信息 -->
				<view class="user" :style="{'margin-top':CustomBar+StatusBar+'px'}">
					<!-- 头像 -->
					<view class="left" v-if="!hasLogin">
						<image :src="user.face" @tap="toLogin"></image>
					</view>
					<view class="left" v-if="hasLogin">
						<image :src="userInfo.icon" @tap="toUserInfo"></image>
					</view>
					<!-- 昵称,个性签名 -->
					<view class="right" v-if="!hasLogin">
						<view class="username" @tap="toLogin">{{user.username}}</view>
						<view class="signature" @tap="toLogin">{{user.signature}}</view>
					</view>
					<view class="right" v-if="hasLogin">	
						<view class="username" @tap="toUserInfo">{{userInfo.nickname}}</view>
						<view class="signature" @tap="toUserInfo">{{userInfo.personalizedSignature == '' || userInfo.personalizedSignature ==undefined ? '这个人很赖,什么都没留下':userInfo.personalizedSignature}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/arc.png"></image>
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item cu-avatar bg-white" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<view class='cu-tag badge'>99</view>
					<text class="yticon icon-shouye" style="color: #4CD964;"></text>
					<text>全部</text>
				</view>
				<view class="order-item cu-avatar bg-white" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<view class='cu-tag badge'>99</view>
					<text class="yticon icon-daifukuan" style="color: #F43F3B;"></text>
					<text>已接单</text>
				</view>
				<view class="order-item cu-avatar bg-white" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<view class='cu-tag badge'>99</view>
					<text class="cuIcon-taxi" style="font-size: 48upx;margin-bottom: 18upx;color: #f4ea2a;"></text>
					<text>进行中</text>
				</view>
				<view class="order-item cu-avatar bg-white" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<view class='cu-tag badge'>99</view>
					<text class="yticon icon-pingjia" style="color: #0081FF;"></text>
					<text>未评价</text>
				</view>
			</view>
			<!-- 底部菜单 -->
			<view class="history-section icon">  
				<list-cell icon="cuIcon-people" :iconTpe="1" iconColor="#e07472" title="我的信息" @eventClick="navTo('/pages/userinfo/userinfo')"></list-cell>
				<list-cell icon="cuIcon-qrcode" :iconTpe="1" iconColor="#5fcda2" title="我的二维码" @eventClick="navTo('/pages/user/myQR')"></list-cell>
				<list-cell icon="cuIcon-friend" :iconTpe="1" iconColor="#9789f7" title="我推荐的人"  @eventClick="navTo('/pages/user/myFriend')"></list-cell>
				<list-cell icon="cuIcon-redpacket" :iconTpe="1" iconColor="#ee883b" title="我的钱包" @eventClick="navTo('/pages/user/myWallet')"></list-cell>
				<list-cell icon="cuIcon-message" :iconTpe="1" iconColor="#0088ff" title="我的消息" @eventClick="navTo('/pages/notice/notice')"></list-cell>
				<list-cell icon="cuIcon-safe" :iconTpe="1" iconColor="#f4ea2a" title="安全中心" @eventClick="navTo('/pages/user/mySafe')"></list-cell>
				<!-- <list-cell icon="cuIcon-news" :iconTpe="1" iconColor="#54b4ef" title="新闻"></list-cell> -->
				<list-cell icon="cuIcon-settingsfill" :iconTpe="1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/set/set')"></list-cell>
			</view>
		</view>
			
		
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
    import {  
        mapState 
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell
		},
		data(){
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				MyCustomBar:0,
				//个人信息,
				user:{
					username: "游客001",
					face:'../../static/img/face.jpg',
					signature:'点击昵称跳转登录/注册页',
					integral:0,
					balance:0,
					envelope:0
				},
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
			}
		},
		onLoad(){
			this.MyCustomBar = this.CustomBar+uni.upx2px(520);
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			/**
			 *设置页面
			 */
			toSetting(){
				uni.navigateTo({
					url:'../set/set'
				})
			},
			/**
			 * 用户详情页面
			 */
			toUserInfo(){
				uni.navigateTo({
					url:'../userinfo/userinfo'
				})
			},
			/**
			 * 登录
			 */
            toLogin(){
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../login/login'
				})
			},

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				/* if(!this.hasLogin){
					url = '/pages/login/login';
				} */
				uni.navigateTo({  
					url
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss' scoped>
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}

	.user-section{
		padding: 100upx 30upx 0;
		position:relative;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		.bg{
			
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		.left{
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 100%;
			.username{
				font-size: 36upx;
				color: #303133;
			}
			.signature{
				color: #303133;
				font-size: 28upx;
			}
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
	.history-section{
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
	}
	
</style>