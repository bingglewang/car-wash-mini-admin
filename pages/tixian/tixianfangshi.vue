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
			<view class="cu-item" v-for="(item,index) in tixianTypeList" :key="index" @click="doTiXian">
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
		
		<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green" @tap="hideModal">确定</view>
				</view>
				<view class="grid col-3 padding-sm">
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
						 :data-value="item.value"> {{item.name}}
							<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
						</button>
					</view>
					<view class="padding-xs">
						<view class="cu-btn orange lg block line-orange" >
							<input placeholder="自定义" style="margin-right: 5upx;" />元
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				checkbox: [{
					value: 0,
					name: '10元',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '20元',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '30元',
					checked: true,
					hot: true,
				}, {
					value: 3,
					name: '60元',
					checked: false,
					hot: true,
				}, {
					value: 4,
					name: '80元',
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '100元',
					checked: false,
					hot: false,
				}],
				modalName: null,
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
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			},
			hideModal(e) {
				this.modalName = null
			},
			doTiXian(){
				this.modalName = 'ChooseModal'
			},
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
