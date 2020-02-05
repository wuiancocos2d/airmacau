<template>
	<view class="fltList">
		<Flights :fltList="fltList" @sltFlt="goAcars"></Flights>
	</view>
</template>

<script>
	import Flights from '@/components/flights/flights.vue'
	export default {
		name: 'FltList',
		components: {
			Flights
		},
		data() {
			return {
				fltList: []
			}
		},
		onLoad:function() {
			this.getFltList()
		},
		methods: {
			getFltList() {
				const that = this
				uni.getStorage({
					key: 'datefltList',
					success: (res)=>{
						that.fltList = res.data
					}
				})
			},
			goAcars(flt) {
				uni.setStorage({
					key: 'detailFlt',
					data: flt,
					success: function(){
						uni.navigateTo({
							url: '../fltDetail/fltDetail',
							fail: function(err){
								console.log('nav detail error',err)
							}
						})
					}
				})
			}
			
		}
	}
</script>

<style>
</style>
