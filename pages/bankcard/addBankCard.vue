<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">添加提现方式</block>
		</cu-custom>

		<view class="cu-bar bg-white" v-if="!isSelected">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 提现方式
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-blue shadow" @tap="showModal" data-target="RadioModal">选择提现方式</button>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in radioList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.radioValue}}</view>
								<radio class="round" :class="radio=='radio' + index?'checked':''" :checked="radio=='radio' + index?true:false"
								 :value="item.radioKey"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>


		<form v-if="isSelected">
			<view class="cu-form-group" v-for="(item,index) in formList" :key="index">
				<view class="title">{{item.title}}</view>
				<input :placeholder="item.placeholder" name="input" :value="item.value" :disabled="item.isDisable" @input="updateValue(index,$event)" style="text-align: right;"></input>
			</view>
			<view class="bg-white zhifu-button">
				<button type="primary" size="default" class="save-button-addCar" @click="doSave">保存</button>
			</view>
		</form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSelected:false,
				modalName : null,
				radio: '',
				radioList:[
					{
						radioKey:'yinhangka',
						radioValue:'银行卡'
					},
					{
						radioKey:'weixin',
						radioValue:'微信'
					},
					{
						radioKey:'zhifubao',
						radioValue:'支付宝'
					}
				],
				formList:[],
				houtaiObject: 
					{
						yinhangka:[
							    {
									title: '提现方式',
									placeholder: '银行卡',
									isDisable:true,
									value: '银行卡',
									key: "key0"
								},
							    {
									title: '开户行',
									placeholder: '请输入开户行',
									isDisable:false,
									value: '',
									key: "key1"
								},
								{
									title: '银行卡账户名称',
									placeholder: '请输入银行卡开户人姓名',
									isDisable:false,
									value: '',
									key: "key2"
								},
								{
									title: '银行卡号',
									placeholder: '请输银行卡号',
									isDisable:false,
									value: '',
									key: "key3"
								}
						],
						weixin:[
							{
								title: '微信',
								placeholder: '微信',
								isDisable:true,
								value: '微信',
								key: "key0"
							},
							{
								title: '微信昵称',
								placeholder: '请填写微信昵称',
								isDisable:false,
								value: '',
								key: "key1"
							},{
								title: '微信账号',
								placeholder: '请填写微信账号或微信绑定得手机号',
								isDisable:false,
								value: '',
								key: "key2"
							}
						],
						zhifubao:[
							{
								title: '支付宝',
								placeholder: '支付宝',
								isDisable:true,
								value: '支付宝',
								key: "key0"
							},
							{
								title: '支付宝昵称',
								placeholder: '请填支付宝昵称',
								isDisable:false,
								value: '',
								key: "key1"
							},
							{
								title: '支付宝账号',
								placeholder: '请填支付宝账号或支付宝绑定的手机号',
								isDisable:false,
								value: '',
								key: "key2"
							}
						]
					}
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
				console.log("选中得值："+this.radio);
				this.hideModal(e);
				this.isSelected = !this.isSelected;
				this.formList = this.houtaiObject[this.radio]
			},
			doSave() {
				let that = this;
				that.formList.forEach(function(item) {
					console.log(item.key, item.value)
				})
			},
			updateValue(index, e) {
				this.formList[index].value = e.detail.value;
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
