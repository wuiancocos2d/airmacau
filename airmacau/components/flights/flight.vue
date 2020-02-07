<template>
	<view class="flight" @tap="handleTap">
		<view class="fltId prop">
			{{flight.fltId}}
		</view>
<!-- 		<view class="acId prop">
			{{flight.acId}}
		</view> -->
		<view class="depApt prop">
			{{flight.depApt}}
		</view>
		<view class="arrApt prop">
			{{flight.arrApt}}
		</view>
		<view class="std prop">
			<view v-if="standTime">{{flight.std.slice(10, 16)}}</view>
			<view v-else>
				{{flight.stdLocal.slice(10, 16)}}
			</view>
		</view>		
		<view class="sta prop">
			<view v-if="standTime">{{flight.sta.slice(10, 16)}}</view>
			<view v-else>
				{{flight.staLocal.slice(10, 16)}}
			</view>
		</view>
		<view class="eta prop">
			<view v-if="standTime">{{flight.eta.slice(10, 16)}}</view>
			<view v-else>
				{{flight.etaLocal.slice(10,16)}}
			</view>
		</view>
		<view class="state prop">
			{{flight.fltStatusName}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Flight',
		props: {
			flight: {
				type: Object
			},
			standTime: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleTap() {
				this.$emit('sltFlt',this.flight)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './flights.css'
</style>
