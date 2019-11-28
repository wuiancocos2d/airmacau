<template>
	<view class="content">
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState(['hasLogin']),
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log('login log',this.hasLogin)
			if(!this.hasLogin) {
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
		align-items: center;
		justify-content: center;
		
		width: 100vw;
		height: 100vh;
	}

</style>
