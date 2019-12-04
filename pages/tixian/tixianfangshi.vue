<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">提现方式</block>
		</cu-custom>
		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				选择提现方式
			</view>
			<view class="cu-tag radius light bg-gradual-blue" style="font-size: 14px;margin-right: 30upx;" @click="toPages('/pages/tixian/tixianjilu')">提现记录</view>
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
