<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">支付密码</block>
		</cu-custom>
		<form>
			<view class="cu-form-group" v-if="type!=3">
				<view class="title">手机号</view>
				<input placeholder="请输入手机号" name="input"></input>
				<button class='cu-btn bg-gradual-blue shadow'>验证码</button>
			</view>
			<view class="cu-form-group" v-if="type!=3">
				<view class="title">短信验证码</view>
				<input placeholder="请输入短信验证码" name="input"></input>
			</view>
			<view class="cu-form-group" v-if="type == 3">
				<view class="title">原密码</view>
				<input placeholder="请输入原密码" name="input"></input>
			</view>
			<view class="cu-form-group" v-if="type == 3 || type == 2 ">
				<view class="title">新密码</view>
				<input placeholder="请输入新密码" name="input"></input>
			</view>
			<view class="cu-form-group" v-if="type == 3 || type == 2 ">
				<view class="title">再次输入新密码</view>
				<input placeholder="再次输入新密码" name="input"></input>
			</view>
			<view class="cu-form-group" style="align-items: flex-start;" v-if="type == 3 || type == 2 ">
				<text class='text-red'>提示：支付密码必须为6位</text>
				
			</view>
			<view class="bg-white zhifu-button" style="padding-bottom: 50upx;">
				<button type="primary" size="default" class="save-button-addCar">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1
			}
		},
		onLoad(option) {
			this.type = Number.parseInt( option.type)
			console.log("类型："+this.type)
		}
	}
</script>

<style lang="scss" scoped>
	.zhifu-button{
		display: flex;
		align-items: center;
		position: relative;
		.save-button-addCar {
			border-radius: 100px;
			width: 80%;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		}
	}
</style>
