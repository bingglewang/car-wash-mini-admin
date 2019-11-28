<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">工作区</block>
		</cu-custom>
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
import uniFab from '@/components/uni-fab/uni-fab.vue';
export default {
	components: {
		uniFab
	},
	data() {
		return {
			horizontal: 'right',
			vertical: 'bottom',
			direction: 'vertical',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF'
			},
			content: [
				{
					iconPath: '/static/img/user_center.png',
					selectedIconPath: '/static/img/user_center.png',
					text: '个人中心',
					active: false
				},
				{
					iconPath: '/static/img/notice_center.png',
					selectedIconPath: '/static/img/notice_center.png',
					text: '消息中心',
					active: false
				}
			]
		};
	},

	onLoad() {},
	methods: {
		trigger(e) {
			console.log(e);
			this.content[e.index].active = !e.item.active;
			if(e.index - 0 == 0){
				this.naviagetorToPages('/pages/user/user')
			}
			if(e.index - 1 == 0){
				this.naviagetorToPages('/pages/notice/notice')
			}
		},
		naviagetorToPages(url) {
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="scss"></style>
