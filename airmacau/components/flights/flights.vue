<template>
	<view class="flights-container">
		<view class="listTile">
			<view class="fltId prop">
				ID
			</view>
<!-- 			<view class="acId prop">
				ACID
			</view> -->
			<view class="depApt prop">
				DEP
			</view>
			<view class="arrApt prop">
				ARR
			</view>
			<view class="std prop">
				STD
			</view>			
			<view class="sta prop">
				STA
			</view>
			<view class="eta prop">
				ETA
			</view>
			<view class="state prop">
				State
			</view>
		</view>
		<view class="flights">
			<view v-for="(flight,index) in fltList" :key="index">
				<Flight @sltFlt="handleFltSlt" :flight=flight :standTime="standTime"></Flight>
			</view>
		</view>
	</view>
</template>

<script>
	import Flight from './flight.vue'
	export default {
		name: 'Flights',
		components: {
			Flight
		},
		data() {
			return {
				standTime: true
			}
		},
		props: {
			fltList: {
				require: true
			}
		},
		methods:{
			handleFltSlt(flt) {
				this.$emit('sltFlt',flt)
			}
		}
	}
</script>

<style>
	@import './flights.css'
</style>
