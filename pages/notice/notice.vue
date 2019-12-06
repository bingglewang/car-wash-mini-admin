<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的消息</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item,index) in noticeList" :key="index" @click="toPages(index)">
				<view class="cu-avatar radius lg" :style="{'background-image':'url('+item.img+')'}">
				</view>
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon-title text-orange margin-right-xs"></text>
						<text class="text-black" style="font-size: 15px;font-weight: bold;">{{item.noticeTitle}}</text>
					</view>
					<view class="text-gray text-sm desc-text" >
						{{item.desc}}
					</view>
				</view>
				<view class="action">
					<view>
						<text class="cuIcon-time margin-right-xs"></text>
						{{item.time}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeList: [{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '该项目是我个人开发的一款高颜值的微信小程序组件库。这个项目不仅有一些漂亮的基础元素，还有一些实用的组件。扩展中心也会不定期更新一些小程序的解决方案，或者你有一些好的想法可以在GitHub里提交给我，我会加入到扩展里。'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零'
					}, {
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零,'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						noticeTitle: '见附件附件',
						time: '2019-12-05',
						desc: '您有一个订单零点零零'
					}
				]
			}
		},
		methods: {
			toPages(index) {
				/* if(!this.hasLogin){
					url = '/pages/login/login';
				} */
				let url = '/pages/notice/noticeDetail?noticeDetail='+JSON.stringify(this.noticeList[index]);
				
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.desc-text {
		width: 200px;
		padding-left: 40upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
