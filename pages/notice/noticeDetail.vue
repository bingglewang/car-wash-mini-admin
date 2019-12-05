<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">消息详情</block>
		</cu-custom>
		<view class='margin-xl bg-white padding-xl radius shadow-lg'>
			<view style="display: flex;align-items: center;justify-content: space-between;">
				<view class='text-center text-lg  text-grey'>{{detail.noticeTitle}}</view>
				<view>
					<text class="cuIcon-time margin-right-xs"></text> 
					{{detail.time}}
				</view>
			</view>
			<view class='text-content'>
				<view class='margin-top-sm'>{{detail.desc}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				detail:{}
			}
		},
		onLoad(options){
			this.detail = JSON.parse(options.noticeDetail);
			console.log("参数："+this.detail.desc)
		}
	}
</script>

<style lang="scss" scoped>
</style>
