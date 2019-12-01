<template>
	<view class="container">
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger"></uni-fab>
		<view class="header status">
			<view class="userinfo">
				<view class="face"><image src="/static/img/face.jpg"></image></view>
				<view class="info">
					<view class="username">张三</view>
					<view class="integral">手机号:132222222</view>
				</view>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">0</text>
					<text>今日接单</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>今日流水(元)</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>在线时长(h)</text>
				</view>
			</view>
		</view>
		<view class="cu-card">
			<view class="cu-item bg-white shadow" v-for="(item, index) in orderList" :key="index" style="padding-bottom: 16upx;">
				<view class="order-item">
					<view class="cu-tag radius light bg-gradual-orange">{{ item.orderStatus1 }}</view>
				</view>
				<view class="order-item">
					预约地点：
					<span class="order-font-color">{{ item.orderAddress }}</span>
				</view>
				<view class="order-item">
					订单金额：
					<span class="order-font-color">{{ item.orderMoney }}元</span>
				</view>
				<view class="order-item order-status-car">
					订单状态：
					<span style="color:#8dc63f;">{{ item.orderStatus2 }}</span>
					<view class="cu-tag radius light bg-gradual-blue order-right-car">洗车</view>
				</view>
			</view>
		</view>
		<view class="order-middle-title">
			<view class="order-fujin-title">
				<view class="padding" style="padding-bottom: 15upx;"><span class="fujindingdan">附近订单</span></view>
				<view style="" class="bg-gradual-orange fujin-title-bottom"></view>
			</view>
			<view class="cu-item" id="xuanzhuan" :style="'transform: rotate('+xuanzhuan+'deg);transition: all 0.6s;'" @click="doXuanzhuan">
				<text class="text-light icon-refresh my-refresh-size"></text>
			</view>
		</view>
		<view class="cu-card">
			<view class="cu-item bg-white shadow" v-for="(item, index) in fujinOrderList" :key="index" style="padding-bottom: 16upx;">
				<view class="order-item" style="display: flex;align-items: center;">
					<text class="text-cyan icon-time" style="margin-right: 15upx;"></text>
					<text class="order-font-color" >即时订单</text>
					<text style="font-weight: bold;margin-left: auto;">【距您0.23km】</text>
				</view>
				<view class="order-item" style="display: flex;align-items: center;">
					<text class="text-blue icon-taxi" style="margin-right: 15upx;"></text>
					<text class="order-font-color">SUV内外洗</text>
					<text class="order-font-color" style="margin-left: auto;">沪HUA298</text>
					<view class="cu-tag radius light bg-gradual-blue order-right-car" style="margin-left: auto;">接单</view>
				</view>
				<view class="order-item">
					<text class="text-olive icon-phone" style="margin-right: 15upx;"></text>
					<text class="order-font-color">13227355241</text>
				</view>
				<view class="order-item">
					<text class="text-red icon-location" style="margin-right: 15upx;" ></text>
					<text class="order-font-color">安徽合肥市包河区滨湖世界社区广西路</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniFab from '@/components/uni-fab/uni-fab.vue';
export default {
	components: {
		uniFab
	},
	data() {
		return {
			fujinOrderList:[
				{}
			],
			xuanzhuan:0,
			orderList: [
				{
					orderStatus1: '已接订单',
					orderAddress: '广州番禺南国奥园加分加来到了金发的链',
					orderMoney: 43,
					orderStatus2: '洗车中'
				}
			],
			horizontal: 'right',
			vertical: 'bottom',
			direction: 'vertical',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF'
			},
			content: [
				{
					iconPath: '/static/img/user_center.png',
					selectedIconPath: '/static/img/user_center.png',
					text: '个人中心',
					active: false
				},
				{
					iconPath: '/static/img/notice_center.png',
					selectedIconPath: '/static/img/notice_center.png',
					text: '消息中心',
					active: false
				}
			]
		};
	},

	onLoad() {},
	methods: {
		doXuanzhuan(){
			this.xuanzhuan += 360;
		},
		trigger(e) {
			console.log(e);
			this.content[e.index].active = !e.item.active;
			if (e.index - 0 == 0) {
				this.naviagetorToPages('/pages/user/user');
			}
			if (e.index - 1 == 0) {
				this.naviagetorToPages('/pages/notice/notice');
			}
		},
		naviagetorToPages(url) {
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	&.status {
		padding-top: var(--status-bar-height);
	}
	background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	width: 100%;
	height: 40vw;
	padding: 0 4%;
	display: flex;
	align-items: center;
	.userinfo {
		width: 90%;
		display: flex;
		.face {
			flex-shrink: 0;
			width: 15vw;
			height: 15vw;
			image {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		.info {
			display: flex;
			flex-flow: wrap;
			padding-left: 30upx;
			.username {
				width: 100%;
				color: #fff;
				font-size: 40upx;
			}
			.integral {
				display: flex;
				align-items: center;
				padding: 0 20upx;
				height: 40upx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.1);
				border-radius: 20upx;
				font-size: 24upx;
			}
		}
	}
}

.my-refresh-size {
	font-size: 44upx;
}

.order-middle-title {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 30upx;
	padding-right: 30upx;
	.order-fujin-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: calc(100%);
		.fujin-title-bottom {
			height: 12upx;
			width: 50px;
			border-radius: 10px;
		}
	}
}

.order-item {
	padding: 8upx 20upx;
	font-size: $font-lg;
	color: $font-color-dark;
}

.order-status-car {
	display: flex;
	align-items: center;
}
.order-right-car {
	margin-left: auto;
}

.order-font-color {
	color: #75787d;
}

.fujindingdan {
	font-size: $font-lg;
	font-weight: bold;
	color: $font-color-dark;
}

%flex-center {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
%section {
	display: flex;
	justify-content: space-around;
	align-content: center;
	background: #fff;
	border-radius: 10upx;
}

.tj-sction {
	@extend %section;
	.tj-item {
		@extend %flex-center;
		flex-direction: column;
		height: 140upx;
		font-size: $font-sm;
		color: #75787d;
	}
	.num {
		font-size: $font-lg;
		color: $font-color-dark;
		margin-bottom: 14upx;
	}
}
</style>
