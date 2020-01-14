<template>
	<view id="flight-container">
		<map name="flightMap" class="fltMap" 
		:latitude="planelatitude" :longitude="planelongitude" 
		:scale="scale" :markers="marker" 
		:polyline='polyline' ></map>
	</view>
</template>

<script>
	import {DistanceByWGS} from '@/js_sdk/function/tools.js'
	export default {
		name: 'FltDetail',
		data() {
			
		}
	}
</script>

<style>
</style>
