<template>
	<view class="">
		<uni-nav-bar :background-color="background" :color="color" :status-bar="true" left-icon="arrowleft" left-text=" " :title="title"
		 @clickLeft="back" />
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		name: 'AmNav',
		components: {
			uniNavBar
		},
		props: {
			backN: {
				type: Number,
				default: 1
			},
			color: {
				type: String,
				default: '#fafafa'
			},
			title: {
				type: String,
				default: 'Airmacau'
			},
			background: {
				type: String,
				default: '#4a148c'
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
</style>
