<template>
	<view class="apis-container">
		<uni-grid :column="3" :showBorder="false">
			<uni-grid-item class="icon-container" v-for="(item,index) in apis" :key="index" @tap="toUrl(item.url)">
				<view class="icon">
					<uni-icons :type="item.icon" size="30" :color="'#513C8A'" ></uni-icons>
				</view>
				<view class="txt">
					{{item.name}}
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	export default {
		name: 'Apis',
		components: {
			uniIcons,
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				itemsPerRow: 5,
				apis: [{
						"name": "Flight Info",
						"icon": "paperplane",
						"url": "/pages/flights/flights"
					},
					{
						"name": "Tele",
						"icon": "contact"
					},
					{
						"name": 'ACARS',
						"icon": 'map',
						"url": "/pages/acars/acars"
					}
				]
			}
		},
		methods:{
			toUrl(url){
				uni.redirectTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.apis-container {
		width: 100vw;
		.icon-container {
			text-align: center;
		}
	}
</style>
