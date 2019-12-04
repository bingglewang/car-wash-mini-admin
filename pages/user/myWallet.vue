<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的钱包</block>
		</cu-custom>
		<view style="height: 200upx;background-color: #333333;display: flex;align-items: center;" class="padding">
			<view>
				<view class="text-white">账户余额</view>
				<view class="text-white margin-top" style="text-align: center;font-size: 16px ;">0.00</view>
			</view>
			<view style="margin-left: auto;">
					<view class="cu-tag round light bg-white shadow" style="padding-left: 20px;padding-right: 20px;padding-bottom: 15px;padding-top: 15px;" @click="toPages('/pages/tixian/tixianfangshi')">提现</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				消费记录
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item,index) in xiaoFeiList" :key="index">
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon-title text-orange margin-right-xs"></text> 
						<text class="text-black" style="font-size: 15px;font-weight: bold;">金额{{item.money}}元</text>
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-time margin-right-xs"></text> 
						{{item.time}}
					</view>
				</view>
				<view class="action">
					<text class="text-green">{{item.type}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				xiaoFeiList:[
					{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},
					{
						money:'56',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},
					{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},
					{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},
					{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
					},
					{
						money:'36.55',
						time:'2019-12-04 14:57:52',
						type:'洗车收入'
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
</style>
