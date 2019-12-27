<template>
	<view class="flight-content">
		<view class="background">
			<image class="background-image" src="../../static/flight-bk.png"></image>
		</view>
		<view class="searchForm">
			<view class="row">
				<iptGrp :labelNm="'Flight Code'">
					<i-input type="text" v-model="flightInfo.flightNo" placeholder="001"></i-input>
				</iptGrp>
			</view>
			<view class="row">
				<iptGrp :labelNm="'Origin'">
					<i-input type="text" v-model="flightInfo.origin" placeholder="MFM"></i-input>
				</iptGrp>
				<iptGrp :labelNm="'Destination'">
					<i-input type="text" v-model="flightInfo.destination" placeholder="PEK"></i-input>
				</iptGrp>
			</view>
			<view class="row">
				<iptGrp :labelNm="'Date'">
					<i-input type="text" @focus="openDate" v-model="flightInfo.flightDate" placeholder="2019-12-12"></i-input>
				</iptGrp>
			</view>
			<view class="row submitRow">
				<i-button :type="'company'" @click="submitForm">Search</i-button>
			</view>
		</view>
		<view>
			<uni-calendar ref="calendar" :insert="insert" :lunar="true" @change="dateChange" @confirm="dateConfirm"></uni-calendar>
		</view>
	</view>
</template>

<script>
	import IptGrp from '@/components/iptGrp/iptGrp.vue'
	import iInput from '@/components/input/i-input.vue'
	import iButton from '@/components/buttons/i-buttons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			"iptGrp": IptGrp,
			iInput,
			uniCalendar,
			iButton
		},
		data() {
			return {
				flightInfo: {
					flightNo: "",
					origin: "",
					destination: "",
					flightDate: "",
				},
				insert: false
			}
		},
		methods: {
			openDate() {
				this.$refs.calendar.open()
			},
			dateChange(e) {
				console.log(e);
			},
			dateConfirm(e) {
				this.flightInfo.flightDate = e.fulldate
			},
			submitForm() {
				uni.reLaunch({
					url: '../flightSearch/flightSearch?FN='+this.flightInfo.flightNo+'&OR='+this.flightInfo.origin+'&DT='+this.flightInfo.destination+'&FD='+this.flightInfo.flightDate,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.background {
		display: flex;
		width: 100%;
		.background-image {
			width: 100%;
			height: auto;
			min-height: 200rpx;
		}
	}
	.searchForm {
		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			margin-top: 45rpx;

			&.submitRow {
				display: flex;
				justify-content: center;
				text-align: center;
				margin-top: 65rpx;
			}

			.iptGrp {
				box-sizing: border-box;
				width: 49.9%;
				padding: 0 25rpx;
			}
		}
	}
</style>
