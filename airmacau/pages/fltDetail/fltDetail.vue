<template>
	<view>
		<uni-nav-bar color="#fafafa" background-color="#2D2F55" :status-bar="true" left-icon="arrowleft" left-text=" " title="Flight Info"
		 @clickLeft="back" />
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#2D2F55"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<FltInfo></FltInfo>
			</view>
			<view v-show="current === 1">
				<FltMap></FltMap>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import FltInfo from './fltInfo.vue'
	import FltMap from './fltMap.vue'
	export default {
		components: {
			uniSegmentedControl,
			uniNavBar,
			FltInfo,
			FltMap
		},
		data() {
			return {
				
				items: ['Info', 'Map'],
				current: 0
			}
		},
		computed: {
			polyline() {
				return [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: [{
							latitude: this.depLatitude,
							longitude: this.deplongitude
						}].concat(this.markers),
					color: "#0000AA", //线的颜色
					width: 2, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
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
