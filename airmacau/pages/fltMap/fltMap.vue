<template>
	<view id="flight-container">
		<map v-if="loaded" name="flightMap" class="fltMap" :latitude="fltlatt" :longitude="fltlont" :scale="scale" :markers="markers"
		 :polyline='polyline'></map>
		<view v-if="modalName === 'Image'" class="bg-img bg-mask flex align-center" :style="{backgroundImage: 'url('+bg+');height: 414upx;'}">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					No Acars Data
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
				fltlatt: '',
				fltlont: '',
				scale: 7,
				loaded: false,
				markers: [],
				modalName: null
			}
		},
		computed: {
			...mapState('flight', ['checkFlt']),
			polyline: function() {
				return [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: this.markers,
					color: "#0000AA", //线的颜色
					width: 2, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}]
			}
		},
		onLoad: function() {
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
						if (res.success) {
							let markers = that.markers = res.result
							const len = that.markers.length
							console.log('mapData ', res.result)
							if (len === 0) {
								that.modalName = 'Image'
							} else {
								markers.forEach((ele,index)=>{
									ele.latitude = ele.latt.slice(1,7)
									ele.longitude = ele.lont.slice(1,7)
									ele.iconPath = '/static/plane_i.png'
									ele.width= 25
									ele.height=25
									if(index === 0) {
										that.fltlatt = ele.latitude 
										that.fltlont = ele.longitude
									}
								})
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
