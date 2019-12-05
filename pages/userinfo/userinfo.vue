<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的信息</block>
		</cu-custom>
		<view class="content">
			<view class="list">
				<view class="row">
					<view class="title">头像</view>
					<view class="right">
						<view class="tis">
							<avatar selWidth="200px" selHeight="400upx" :avatarSrc="url" @upload="myUpload" quality="0.9" avatarStyle=""></avatar>
							<!-- <image src="/static/img/face.jpg" mode="widthFix"></image> -->
						</view>
						<view class="icon jiantou"></view>
					</view>
				</view>
				<view class="row">
					<view class="title">手机号</view>
					<view class="right">
						<view class="tis">{{userInfo.phone}}</view>
						<view class="icon jiantou"></view>
					</view>
				</view>
				<view class="row">
					<view class="title">出生日期</view>
					<view class="right">
						<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
							<view class="picker">
								{{date}}
							</view>
						</picker>
						<view class="icon jiantou"></view>
					</view>
				</view>
				<view class="row">
					<view class="title">性别</view>
					<view class="right">
						<switch class='switch-sex' @change="SwitchC" :class="switchC?'checked':''" :checked="switchC?true:false"></switch>
						<view class="icon jiantou"></view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="row" @click="toPages('/pages/bankcard/myBankCard')">
					<view class="title">提现方式</view>
					<view class="right">
						<view class="tis"></view>
						<view class="icon jiantou"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import avatar from '../../components/yq-avatar/yq-avatar.vue';
import uploadFile from '@/api/fileupload/index.js';
import updateUserIcon from "@/api/userinfo/index.js";
import getCurrentUserInfo from "@/api/userinfo/index.js";
 import {  
        mapState,
		mapMutations 
    } from 'vuex';  

export default {
	components: {
		avatar
	},
	data() {
		return {
			date: '2018-12-25',
			url: '',
			switchC:true
		};
	},
	onShow() {
		this.url = this.userInfo.icon;
	},
	 computed: {
		...mapState(['hasLogin','userInfo'])
	},
	methods: {
		...mapMutations(['login']),
		SwitchC(e) {
			this.switchC = e.detail.value
		},
		DateChange(e) {
			this.date = e.detail.value
		},
		toPages(url){
			/* if(!this.hasLogin){
				url = '/pages/login/login';
			} */
			uni.navigateTo({  
				url
			})  
		},
		myUpload(path) {
			let _this = this;
			this.url = path;
			let opt = {
				filePath: this.url,
				name: 'file'
			};
			let formData = {
				imgSystemId: 'yojo网',
				imgSpecificUniqueValue: 'bingglewang'
			};
			uploadFile.uploadFile(opt, formData, function(resp) {
				var obj = eval('(' + resp.data + ')');
				if (obj.code - 200 == 0) {
					let userIcon = obj.data.imgUrl; //修改用户头像
					let userId = _this.userInfo.id;
					let updateUserData = {
						"icon": userIcon
					}
					updateUserIcon.updateUserIcon(userId,updateUserData,function(resp1){
					    getCurrentUserInfo.getCurrentUserInfo(function(resp2){
							let updateDefaultUserInfo = resp2.data.data;
							_this.login(updateDefaultUserInfo)
						})
					})
				} else {
					uni.hideToast({
						title: obj.message,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #f3f3f3;
}
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKQAAsAAAAABjwAAAJFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApIXAE2AiQDCAsGAAQgBYRtBy4bgAUR1Ys/sq+wcQ0AKCMxzO7s4dbxlywA4w2+QAIrUAAAAABA8Hzt9zt3d9//+00Taomhi1gSkUZTzUynEiJMh45HsUimByZ4/unc4gMVRqR1SoYZi0pw3aFbm/4hO4VNh2bJ2umnZ+Q3hAuhQ3jVPHGMDgCfuHf6W0CBzAeU4160xqAuoC4OpEDHGhRZCWXcMHaBSzgOAbykUYLUXFp6sBiscQLIvJsaweacGAyLWARXzVKDnCsHqw6SWzgLvy/fpWJB4WisnI7J2nEq3tgxrP/X+31CuUBAqx1AAyWAAempDbahEUbXeIOGLNhXpsCb9w3IXrUI++usdD8AKZB3T3x3LAKAAritnkSA5KjrQSJz++JfybXOMS/f0eF7B4itVLl1SnvltSIO9qACqdWN/RMBBLqPPHZo3Z8lA8D9FYUS09MNdg8mgT/BR01GF1p6ZVR+bbsicoYKL17gH1ujvI5VJU4bFSyJEWY3qSk0lhySoZXAwUcZXFjK4aWY+tU+YqyiEeMBitgBEMJcQRHkGpowdyRDe4FDkl+4CIuGlz5xSx95YrnZkbESbKH+gWuo145RZlHmDc0UK84KQ8YLeXQeKNK8GLlijzzHjPFtShENmqmDCzgNYyQYmDw2klqR4ZBluu5NaUOdmlHNWAm2UP/ANdRrv7PMSp+/oZlixS0NNe4X8uj6hyLNe5Cusr5Xw728Mr5NKaJBM3VwAYMwRoKhfpDHRlI7wj8cMruV7itL11d0X7cLpWZY6kTsQo1Zo6lQCgA=')
		format('woff2');
}
.icon {
	font-family: 'HMfont-home' !important;
	font-size: 35upx;
	font-style: normal;
	color: #000000;
	&.jiantou {
		&:before {
			content: '\e627';
		}
	}
}
.content {
	padding-bottom: 20upx;
	.list {
		/* width: 96%; */
		padding-left: 4%;
		background-color: #fff;
		margin-bottom: 20upx;
		.row {
			widows: 100%;
			min-height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1upx #eee;
			&:last-child {
				border-bottom: none;
			}
			.title {
				font-size: 32upx;
				color: #333;
			}
			.right {
				display: flex;
				align-items: center;
				color: #999;
				.tis {
					font-size: 26upx;
					margin-right: 5upx;
					max-height: 120upx;
					image {
						width: 100upx;
						height: 100upx;
						border-radius: 100%;
						margin: 10upx 0;
					}
				}
				.icon {
					width: 40upx;
					color: #cecece;
				}
			}
		}
	}
}
</style>
