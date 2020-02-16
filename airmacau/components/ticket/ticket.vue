<template>
	<view class="container">
		<view class="ticket padding-xl radius shadow-warp bg-white margin-top solids-right olid-bottom">
			<slot></slot>
			<view v-if="hasSub" class="subBtn">
				<view class="padding-xl">
					<button class="cu-btn round block bg-purple lg" @tap="handleSub">
						<text :class="[ spin ? 'cuIcon-loading2 cuIconfont-spin':'']"></text>
						{{subName}}
					</button>
				</view>
				<view class="ticketR"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'Ticket',
		props: {
			width: {
				type: String,
				default: '300'
			},
			subName: {
				type: String,
				default: 'Submit'
			},
			spin: {
				type: Boolean,
				default: false
			},
			hasSub: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleSub() {
				if(!this.spin) {
					this.$emit('subTab')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 10px;
	}
	.ticket {
		position: relative;
		border-radius: 15px;
		background-color: #FFFFFF;
		.ticketR,&:after {
			position: absolute;
			top: -2px;
			width: 50px;
			height: 25px;
			text-align: center;
			line-height: 100px;
			left: 50%;
			margin-left: -25px;
			border-radius: 0 0 50px 50px;
			background-color: #F2F2F2;
		}
	}
</style>
