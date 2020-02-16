<template>
	<view class="flights-container am_light_bg">
		<view class="listTile flex">
			<view v-for="(item,index) in cells" :key="index" class="fltId prop">
				{{item}}
			</view>
		</view>
		<view class="flights am_white_bg">
			<view v-for="(flight,index) in fltList" :key="index">
				<Flight @sltFlt="handleFltSlt" :flight=flight :standTime="standTime" :darkBg="(index+1)%2 ? true:false"></Flight>
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
				standTime: true,
				cells: ['ID','DEP','ARR','STD','STA','ETA','STATE']
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

<style scoped lang="scss">
	@import '../../common/color';
	.flights-container {
		padding: 0 5px;
		.flights {
			position: relative;
			z-index: 1;
			margin-top: 25px;
			padding: 0 5px;
		}
		.listTile {
			position: fixed;
			padding: 0 5px;
			width: 100%;
			z-index: 100;
			top: 0;
			left: 0;
			height: 25px;
			background-color: $am_theme_dep;
			color: #EFEFF7;
			font-weight: bold;
			.prop{
				flex: 0 0 100%;
				box-sizing: border-box;
				white-space: nowrap;
				font-size: 14px;
				line-height: 25px;
				flex-grow: 1;
				flex-shrink: 0;
				flex-basis: 0;
				text-align: center;
			}
		}
	}
</style>
