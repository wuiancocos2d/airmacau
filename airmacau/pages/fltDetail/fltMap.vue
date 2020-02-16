<template>
	<view id="flight-container">
		<map v-if="loaded" name="flightMap" class="fltMap" :latitude="fltJD" :longitude="fltWD" :scale="scale" :markers="marker"
		 :polyline='polyline'></map>
		<view v-if="modalName === 'Image'" class="bg-img bg-mask flex align-center" :style="{backgroundImage: 'url('+bg+');height: 414upx;'}">
					<view class="padding-xl text-white">
						<view class="padding-xs text-xxl text-bold">
							No Acars Data
						</view>
						<view class="padding-xs text-lg">
							
						</view>
					</view>
				</view>
	</view>
</template>

<script>
	import {
		DistanceByWGS
	} from '@/js_sdk/function/tools.js'
	import {
		getFltAcars
	} from '@/api/flight.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	import Bg from '@/static/empty.jpg'
	export default {
		name: 'FltMap',
		data() {
			return {
				bg: Bg,
				fltJD: '',
				fltWD: '',
				scale: 5,
				markers: [],
				loaded: false,
				modalName: null
			}
		},
		computed: {
			...mapState('flight', ['checkFlt']),
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
			...mapActions('flight', ['change_checkFlt']),
			getAcars() {
				this.acarsByAC(this.checkFlt)
			},
			acarsByAC(flt) {
				const that = this
					getFltAcars(flt.acId, flt.std, flt.sta).then(
						res => {
							if(res.success) {
								that.markers = res.result
								console.log('markeses ',res)
								if(that.markers.length === 0) {
									that.modalName = 'Image'
								}else {
									that.loaded = true
								}
							}
						}
					).catch(err => {
						console.log('err', err)
					})
			},
			hideModal(e) {
				this.modalName = null
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
