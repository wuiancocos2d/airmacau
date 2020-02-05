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
		mounted: function() {
			this.getAcars()
		},
		methods: {
			getAcars() {
				const that = this
				uni.getStorage({
					key: 'detailFlt',
					success:function(res){
						console.log('res data',res.data)
						that.acarsByAC(res.data)
					},
					fail: function(err){
						console.log('map get Acars error',err)
					}
				})
				console.log('getAcars')
			},
			acarsByAC(flt) {
				const now = 
				getFltAcars(flt.acId,flt.std,flt.sta).then(
					res => {
						console.log('res',res)
					}
				).catch(err=> {
					console.log('err',err)
				})
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
