<template>
	<view class="am_light_bg">
		<amNav :title="'Flight'"></amNav>
		<view class="content">
			<FltInfo></FltInfo>
		</view>
		<view class="box bottomNav">
			<view class="cu-bar tabbar bg-white">
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
				actions: [
					{'name':'Crews','url':'@/pages/fltInfo/fltInfo','logo':crewImg},
					{'name':'Acars','url':'@/pages/fltMap/fltAcars','logo':mapImg}
				]
			}
		},
		computed: {

		},
		methods: {
			goAction: function(url){
				console.log('url',url)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottomNav {
		position: fixed;
		width: 100vw;
		bottom: 0;
	}
</style>
