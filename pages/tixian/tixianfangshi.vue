<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">提现方式</block>
			<view slot="right" style="padding-right: 30upx;font-size: 14px;">提现记录</view>
		</cu-custom>
		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				选择提现方式
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item,index) in tixianTypeList" :key="index">
				<view class="cu-avatar radius lg" :style="{'background-image':'url('+item.img+')'}">
				</view>
				<view class="content padding-tb-sm">
					<view style="padding-left: 30upx;">
						<text class="text-black" style="font-size: 15px;font-weight: bold;">提现到{{item.name}}</text>
					</view>
					<view class="text-gray text-sm" style="padding-left: 30upx;">
						银行账号：{{item.account}}
					</view>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tixianTypeList:[
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
					},
					{
						img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						name:'微信',
						account:'jsdfs'
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
