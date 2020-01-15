<template>
	<view id="flight-container">
<!-- 		<map name="flightMap" class="fltMap" 
		:latitude="depLatitude" :longitude="deplongitude" 
		:scale="scale" :markers="marker" 
		:polyline='polyline' ></map> -->
	</view>
</template>

<script>
	import {DistanceByWGS} from '@/js_sdk/function/tools.js'
	export default {
		name: 'FltAcars',
		data() {
			return {
				depLatitude: '',
				deplongitude: '',
				arrLatitude: '',
				arrLongitude: '',
				scale: 4,
				markers: [],
				
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
		onLoad: function(){
			this.getDep()
			this.getMakers()
		},
		methods: {
			getDep() {},
			getMakers () {
				
			}
		}
	}
</script>

<style>
</style>
