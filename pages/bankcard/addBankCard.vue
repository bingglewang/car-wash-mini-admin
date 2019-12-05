<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">添加银行卡</block>
		</cu-custom>

		<form>
			<view class="cu-form-group">
				<view class="title">收款银行</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择收款银行'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">收款银行支行</view>
				<input placeholder="请输入收款银行支行" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">银行卡</view>
				<input placeholder="请输入银行卡号" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收款名</view>
				<input placeholder="请输入收款名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收款地区</view>
				<picker mode="region" @change="RegionChange" :value="region">
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view>
			<view class="bg-white zhifu-button">
				<button type="primary" size="default" class="save-button-addCar">保存</button>
			</view>
		</form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: [
					"工商银行",
					"农业银行",
					"招商银行",
					"建设银行",
					"中国银行",
					"平安银行",
					"上海银行",
					"光大银行",
					"邮政储蓄银行",
					"浦发银行",
					"民生银行",
					"广发银行",
					"交通银行",
					"兴业银行",
					"北京农业商业银行",
					"上海银行",
					"渤海银行",
					"中信银行",
					"浙商银行",
					"东亚银行",
					"华夏银行",
					"杭州银行",
					"上海农业商业银行"
				],
				region: ['广东省', '广州市', '海珠区']
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			RegionChange(e) {
				this.region = e.detail.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zhifu-button {
		display: flex;
		align-items: center;
		position: relative;
		padding-top: 50upx;
		padding-bottom: 50upx;
		border-top: 1upx solid #eee;

		.save-button-addCar {
			border-radius: 100px;
			width: 80%;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		}
	}
</style>
