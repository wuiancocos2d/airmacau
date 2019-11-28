<template>
	<view class="i-input-view">
		<input class="i-input-input" :type="type" :value="value" :placeholder="placeholder"/>
	</view>
</template>

<script>
	export default {
		props: {
			/**
			 * 输入类型
			 */
			type: {
				type: String,
				default: 'text'
			},
			/**
			 * 值
			 */
			value: String,
			/**
			 * 占位符
			 */
			placeholder: String,
			/**
			 * 是否显示清除按钮
			 */
			clearable: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 是否显示密码可见按钮
			 */
			displayable: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 自动获取焦点
			 */
			focus: {
				type: [Boolean, String],
				default: false
			}
		}
	}
</script>

<style lang="scss">
	.i-input-view {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		padding: 0 10rpx;
		font-size: 35rpx;
		line-height: 48px;
		.i-input-input {
			flex: 1;
			width: 100%;
			border: none;
			margin-top: 60rpx;
			padding: 5px 15px;
			box-sizing: border-box;
			height: 60rpx;
			border-bottom: 1rpx solid #C8C7CC;
		}
	}
</style>
