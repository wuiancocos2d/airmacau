<template>
	<view class="IButton">
		<button class="ibtn" v-bind:class="{primary:type === 'primary',company:type==='company'}" @click="handleClick">
			<slot></slot>
		</button>
	</view>
</template>

<script>
	export default {
		name: 'I-Buttons',
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'default'
			}

		},
		methods:{
			handleClick(e) {
				this.$emit('click',e.target.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ibtn {
		text-align: center;
		font-size: 28rpx;
		font-weight: bold;
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
		line-height: 1.499;
		position: relative;
		display: inline-block;
		white-space: nowrap;
		text-align: center;
		background-image: none;
		border: 1px solid transparent;
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		touch-action: manipulation;
		padding: 15rpx 35rpx;
		border-radius: 4px;

		&.primary {
			background-color: #007AFF;
			color: #F8F8F8;
		}

		&.company {
			background: #FFFFFF;
			color: #513C8A;
			border: 1rpx solid #513C8A;
		}
	}
</style>
