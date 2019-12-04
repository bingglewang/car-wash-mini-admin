<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">提现记录</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item,index) in xiaoFeiList" :key="index">
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon-title text-orange margin-right-xs"></text> 
						<text class="text-black" style="font-size: 15px;font-weight: bold;">金额{{item.money}}元</text>
					</view>
					<view class="text-gray text-sm" style="padding-left: 40upx;">
						{{item.account}}-{{item.mobile}}
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
				xiaoFeiList:[
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
					},
					{
						money:'36.55',
						account:'wangilloa',
						mobile:'13227355241'
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
