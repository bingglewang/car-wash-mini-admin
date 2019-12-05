<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的消息</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item,index) in noticeList" :key="index">
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon-title text-orange margin-right-xs"></text> 
						<text class="text-black" style="font-size: 15px;font-weight: bold;">{{item.noticeTitle}}</text>
					</view>
					<view>
						<text class="cuIcon-time margin-right-xs"></text> 
						{{item.time}}
					</view>
					<view class="text-gray text-sm" style="padding-left: 40upx;">
						{{item.desc}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				noticeList:[
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					},
					{
						noticeTitle:'见附件附件',
						time:'2019-12-05 14:12:23',
						desc:'您有一个订单零点零零'
					}
				]
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
</style>
