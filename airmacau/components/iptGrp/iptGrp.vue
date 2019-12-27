<template>
	<view class="iptGrp">
		<view class="iptLabel">
			<label class="labelCls" for="label">{{labelNm}}</label>
		</view>
		<view class="i-input-view">
			<slot ></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "IptGrp", 
		props: {
			/**
			 * 输入类型
			 */
			label: {
				type: String
			},
			labelNm: {
				type: String
			}

		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.iptGrp {
		padding: 0 20rpx;
		.iptLabel {
			.labelCls {
				color:#8E8E8E;
				font-size: 25rpx;
				font-weight: bold;
			}
		}
	}
</style>
