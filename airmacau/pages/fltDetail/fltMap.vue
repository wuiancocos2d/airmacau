<template>
	<view id="flight-container">
		<map name="flightMap" class="fltMap" :latitude="fltJD" :longitude="fltWD" :scale="scale" :markers="marker" :polyline='polyline'></map>
	</view>
</template>

<script>
	import {
		DistanceByWGS
	} from '@/js_sdk/function/tools.js'
	import {getFltAcars} from '@/api/flight.js'
	export default {
		name: 'FltMap',
		data() {
			return {
				fltJD: '',
				fltWD: '',
				scale: 5,
				markers: []
			}
		},
		computed: {
			polyline() {
				return [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: [{
						latitude: this.fltJD,
						longitude: this.fltWD
					}].concat(this.markers),
					color: "#0000AA", //线的颜色
					width: 2, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}]
			}
		},
		methods: {
			getAcars() {
				uni.getStorage({
					key: 'detailFlt',
					success:function(res){
						
					}
				})
			},
			acarsByAC(acId) {
				
				getFltAcars(acId)
			}
		}
	}
</script>

<style>
	.fltMap {
		width: 100%;
		height: 80vh;
	}
</style>
