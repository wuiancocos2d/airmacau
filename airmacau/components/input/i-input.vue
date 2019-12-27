<template>
	<view class="i-input-view">
		<input class="i-input-input" :type="type" :value="value" :placeholder="placeholder" @input="onInput" @focus="onFocus" />
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
		},
		methods: {
			onFocus() {
				this.$emit('focus')
			},
			onInput(e) {
				this.$emit('input', e.target.value)
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
		font-size: 35rpx;
		line-height: 48px;

		.i-input-input {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			font-variant: tabular-nums;
			list-style: none;
			font-feature-settings: 'tnum';
			position: relative;
			display: inline-block;
			width: 100%;
			height: 32px;
			padding: 4px 11px;
			color: #3A3A3F;
			font-size: 14px;
			line-height: 1.5;
			background-color: #fff;
			background-image: none;
			border: 1px solid #ECECEC;
			border-radius: 4px;
			font-weight: bold;
			transition: all 0.3s;
			
		}
	}
</style>
