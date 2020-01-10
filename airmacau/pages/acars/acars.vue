<template>
	<view id="acars-container">
		<map name="acarsMap" class="acarsmap" :latitude="planelatitude" :longitude="planelongitude" :scale="scale" :markers="marker" :polyline='polyline' ></map>
		<p>{{message}}</p>
	</view>
</template>

<script>
	import {DistanceByWGS} from '@/js_sdk/function/tools.js'
	export default {
		data() {
			return {
				userLatitude: 39.909,
				userlongitude: 116.39742,
				planelatitude: 39.9,
				planelongitude: 116.39,
				scale: 4,
				message: ''
			}
		},
		computed: {
			marker() {
				return [{
					id: 0,
					latitude: this.userLatitude,
					longitude: this.userlongitude,
					iconPath: '../../static/location.png',
					title: 'location',
					anchorX: 0, //label的坐标，原点是 marker 对应的经纬度
					anchorY: 0,
					width: 30,
					height: 30,
					label: {
						content: '',
						color: 'red'
					}
				}, {
					id: 1,
					latitude: this.planelatitude,
					longitude: this.planelongitude,
					width: 30,
					height: 30,
					iconPath: '../../static/plane_i.png'
				}]
			},
			polyline() {
				return [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: [{
							latitude: this.planelatitude,
							longitude: this.planelongitude
						},
						{
							latitude: this.userLatitude,
							longitude: this.userlongitude
						},
					],
					color: "#0000AA", //线的颜色
					width: 2, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}]
			}
		},
		onReady() {
			this.isGetLocation()
		},
		methods: {
			getAuthorizeInfo(a = "scope.userLocation") { //1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
				var _this = this;
				uni.authorize({
					scope: a,
					success() { //1.1 允许授权
						_this.getUserLC();
					},
					fail() { //1.2 拒绝授权
						console.log("你拒绝了授权，无法获得周边信息")
					}
				})
			},
			getUserLC() {
				const that = this
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						that.userLatitude = res.latitude
						that.userlongitude = res.longitude
						DistanceByWGS(that.userLatitude,that.userlongitude,that.planelatitude,that.planelongitude)
					}
				})
			},
			isGetLocation(a = "scope.userLocation") { // 3. 检查当前是否已经授权访问scope属性，参考下截图
				const _this = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting[a]) { //3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
							_this.getAuthorizeInfo()
						} else {
							_this.getUserLC()
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	#acars-container {
		.acarsmap {
			width: 100%;
			height: 80vh;
		}
	}
</style>
