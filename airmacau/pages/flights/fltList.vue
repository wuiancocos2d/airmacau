<template>
	<view class="fltList am_light_bg">
		<Flights :fltList="fltList" @sltFlt="goAcars"></Flights>
	</view>
</template>

<script>
	import Flights from '@/components/flights/flights.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	
	import {
		getFltByStdRange
	} from '@/api/flight.js'
	import {mapState, mapActions } from 'vuex'
	export default {
		name: 'FltList',
		components: {
			Flights,
			uniNavBar
		},
		data() {
			return {
				fltList: []
			}
		},
		computed: {
			...mapState('flight',['flightDate'])
		},
		onLoad:function() {
			this.getFltList()
		},
		methods: {
			...mapActions('flight', ['change_fltDate','change_checkFlt']),
			getFltList() {
				const that = this
				getFltByStdRange(that.flightDate, that.flightDate).then(res => {
					that.fltList = res.result
				}).catch(err => {
					console.log('fltApi error', err)
				})
			},
			goAcars(flt) {
				this.change_checkFlt(flt).then(()=>{
					uni.navigateTo({
						url: '../fltDetail/fltDetail'
					})
				})

			},
			// back() {
			// 	uni.navigateBack({
			// 		delta: 1
			// 	})
			// }
			
		}
	}
</script>

<style lang="scss" scoped>
	.fltList {
		
	}
</style>
