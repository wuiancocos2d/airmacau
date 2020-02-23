<template>
	<view class="am_light_bg">
		<view class="detail_container">
			<amNav :title="'Flight'"></amNav>
			<view class="content">
				<FltInfo></FltInfo>
			</view>
		</view>
		<view class="fixedmargin"></view>
		<view class="box bottomNav">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" v-for="(item,index) in actions" :key="index" @tap="goAction(item.url)">
					<view class="cuIcon-cu-image">
						<image :src="item.logo"></image>
					</view>
					<view class="text-black">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import FltInfo from './fltInfo.vue'
	import crewImg from '@/static/icons/crews.svg'
	import mapImg from '@/static/icons/map.svg'
	export default {
		components: {
			FltInfo
		},
		data() {
			return {
				currentTabComponent: 'FltInfo',
				tabs: ['Info', 'Acars', 'Passenger'],
				crewImg: crewImg,
				mapImg: mapImg,
				actions: [{
						'name': 'Crews',
						'url': '/pages/fltInfo/fltInfo.vue',
						'logo': crewImg
					},
					{
						'name': 'Acars',
						'url': '/pages/fltMap/fltMap.vue',
						'logo': mapImg
					}
				]
			}
		},
		computed: {

		},
		methods: {
			goAction: function(url) {
				console.log('url' + url)
				uni.navigateTo({
					url: '/pages/fltMap/fltMap'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail_container {
		position: relative;
		margin-bottom: 50px;
	}

	.bottomNav {
		position: fixed;
		width: 100vw;
		bottom: 0;
	}

	.fixedmargin {
		position: relative;
		height: calc(100rpx + env(safe-area-inset-bottom) / 2);
		width: 100%;
	}
</style>
