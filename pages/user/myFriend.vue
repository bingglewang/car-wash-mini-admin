<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我推荐的人</block>
		</cu-custom>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="icon-title text-orange "></text> 我推荐的人
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item " v-for="(item,index) in friendList" :key="index">
				<view class="cu-avatar radius lg" :style="{'background-image':'url('+item.imgUrl+')'}"></view>
				<view class="content">
					<view class="text-pink"><text class="text-cut">{{item.friendName}}</text></view>
					<view class="text-gray text-sm flex"> <text class="text-cut">{{item.desc}}</text></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{item.time}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				friendList:[
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},
					{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
					},{
						imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
						friendName:'莫甘娜',
						desc:'凯尔，你被自己的光芒变的盲目！',
						time:'2019-12-2'
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
