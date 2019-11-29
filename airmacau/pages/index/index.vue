<template>
	<view class="content">
		<i-apis></i-apis>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import iApis from '../../components/apis/i-apis.vue'
	export default {
		computed: mapState(['hasLogin']),
		components: {
			iApis
		},
		data() {
			return {

			}
		},
		onLoad() {
			if (!this.hasLogin) {
				uni.reLaunch({
					url: '../login/login'
				})
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}
</style>
