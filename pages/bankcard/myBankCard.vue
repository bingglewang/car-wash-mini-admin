<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的银行卡</block>
		</cu-custom>
		<view class="aui-box-item">
			<view class="aui-card-list" :class="item.isBlue?'aui-card-blue':''" v-for="(item,index) in cardList" :key="index">
				<view class="aui-card-list-bg" :class="item.isBlue?'aui-card-list-loan':''">
					<text style="font-weight: bold;font-size: 20px;">{{item.cardName}}</text>
					<view class="aui-card-list-link">
						查看全部
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		
		<view style="display: flex;justify-content: center;">
			<view class="cu-btn line-blue round lg shadow" @click="toPages('/pages/bankcard/addBankCard')">添加银行卡</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList: [{
						cardName: '中国银行卡',
						isBlue: false
					},
					{
						cardName: '工商银行卡',
						isBlue: true
					}
				]
			}
		},
		methods:{
			toPages(url){
				/* if(!this.hasLogin){
					url = '/pages/login/login';
				} */
				uni.navigateTo({  
					url
				})  
			}
		}
	}
</script>

<style lang="scss" scoped>
	.aui-box-item {
		padding: 15px 10px;
	}

	.aui-card-list {
		height: 140px;
		border-radius: 8px;
		background-image: -webkit-gradient(linear, left top, right top, from(#fe9b2c), to(#ff7b03));
		background-image: -webkit-linear-gradient(left, #fe9b2c, #ff7b03);
		background-image: -moz-linear-gradient(left, #fe9b2c, #ff7b03);
		background-image: linear-gradient(to right, #fe9b2c, #ff7b03);
		background-color: #ff7b03;
		margin-bottom: 20px;
	}

	.aui-card-blue {
		background-image: -webkit-gradient(linear, left top, right top, from(#60a5f5), to(#006ae3));
		background-image: -webkit-linear-gradient(left, #60a5f5, #006ae3);
		background-image: -moz-linear-gradient(left, #60a5f5, #006ae3);
		background-image: linear-gradient(to right, #60a5f5, #006ae3);
		background-color: #006ae3;
	}

	.aui-card-list-bg {
		padding-left: 20px;
		padding-top: 20px;
		background: url("/static/img/icon-pig.png") no-repeat right;
		background-size: contain;
		height: 140px;
		position: relative;
	}

	.aui-card-list-loan {
		background: url("/static/img/icon-loan.png") no-repeat right;
		background-size: contain;
	}

	.aui-card-list-link {
		position: absolute;
		right: 30px;
		bottom: 15px;
		font-size: 0.8rem;
		color: #fff;
		text-align: right;
	}
</style>
