<template>
	
	<view class="telContainer">
		<TeleMenu v-if="pageCur=='menu'"></TeleMenu>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="collect">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icons/collect' + [PageCur=='collect'?'_theme':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='collect'?'text-green':'text-gray'">Favourite</view>
			</view>
			<view class="action" @click="NavChange" data-cur="menu">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icons/contact' + [PageCur == 'menu'?'_theme':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='menu'?'text-green':'text-gray'">Contacts</view>
			</view>
			<view class="action" @click="NavChange" data-cur="search">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icons/search' + [PageCur == 'search'?'_theme':''] + '.png'"></image>
					<view :class="PageCur=='search'?'text-green':'text-gray'">Search</view>
				</view>
			</view>			
		</view>
	</view>	
</template>

<script>
	import TeleMenu from './teleMenu.vue'
	export default {
		name: 'TeleIndex',
		components: {
			TeleMenu
		},
		data() {
			return {
				pageCur: 'menu'
			}
		},
		methods: {
			NavChange(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.telContainer {
		.cu-bar {
			.cuIcon-cu-image {
				image {
					display: block;
					margin: 0 auto;
				}
			}
		}
	}
</style>
