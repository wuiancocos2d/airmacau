<template>
	<view id="acars-container">
		<map name="acarsMap" class="acarsmap" :latitude="userLatitude" :longitude="userlongitude" :scale="scale" :markers="marker"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userLatitude: 39.909,
				userlongitude: 116.39742,
				planelatitude: 39.9,
				planelongitude: 116.39,
				scale: 9,
				marker: [{
					id: 0,
					// latitude: this.userLatitude,
					// longitude: this.userlongitude,
					iconPath: '../../static/location.png',
					title: 'location',
					anchorX: 0, //label的坐标，原点是 marker 对应的经纬度
					anchorY: 0,
					width: 30,
					height: 30,
					label: {
						content: 'bek',
						color: 'red'
					}
				}, {
					// latitude: 39.909,
					// longitude: 116.39742,
					width: 30,
					height: 30,
					iconPath: '../../static/location.png'
				}],
				polyline: [{

				}]
			}
		},
		onLoad() {
			this.updateUserLC()
		},
		methods: {
			updateUserLC() {
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						uni.getLocation({
							type: 'wgs84',
							success: function(res) {
								console.log('user', res)
								this.userLatitude = res.latitude
								this.userlongitude = res.longitude
							}
						})
					}
				})
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
