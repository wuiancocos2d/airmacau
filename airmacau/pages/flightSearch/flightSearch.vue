<template>
	<view class="flights">
		<view class="background">
			<image src="../../static/plane.png"></image>
		</view>
		<view class="flights-container">
			<view class="flight-list">
				<view v-for="(flight,index) in flights" :key="index">
					<view class="flight">
						<p>fltPk:{{flight.fltPk}}</p>
						<p>fltId:{{flight.fltId}}</p>
						<p>stdLocal:{{flight.stdLocal}}</p>
						<p>staLocal:{{flight.staLocal}}</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flightInfo: {
					flightNo: "",
					origin: "",
					destination: "",
					flightDate: "",
				},
				flights: [{
						"fltPk": 445440,
						"fltId": "NX008",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMBA",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-10 11:35:00",
						"staLocal": "2019-12-10 15:00:00",
						"etdLocal": null,
						"etaLocal": null,
						"outTimeLocal": null,
						"offTimeLocal": null,
						"onTimeLocal": null,
						"inTimeLocal": null,
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445446,
						"fltId": "NX002",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCC",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-10 03:55:00",
						"staLocal": "2019-12-10 07:10:00",
						"etdLocal": null,
						"etaLocal": null,
						"outTimeLocal": null,
						"offTimeLocal": null,
						"onTimeLocal": null,
						"inTimeLocal": null,
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445453,
						"fltId": "NX006",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCG",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-09 23:10:00",
						"staLocal": "2019-12-10 02:10:00",
						"etdLocal": null,
						"etaLocal": "2019-12-10 02:20:00",
						"outTimeLocal": "2019-12-09 23:11:00",
						"offTimeLocal": "2019-12-09 23:26:00",
						"onTimeLocal": "2019-12-10 02:16:00",
						"inTimeLocal": "2019-12-10 02:39:00",
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445516,
						"fltId": "NX010",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCD",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-10 07:30:00",
						"staLocal": "2019-12-10 10:50:00",
						"etdLocal": null,
						"etaLocal": null,
						"outTimeLocal": null,
						"offTimeLocal": null,
						"onTimeLocal": null,
						"inTimeLocal": null,
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445446,
						"fltId": "NX002",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCC",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-10 03:55:00",
						"staLocal": "2019-12-10 07:10:00",
						"etdLocal": null,
						"etaLocal": null,
						"outTimeLocal": null,
						"offTimeLocal": null,
						"onTimeLocal": null,
						"inTimeLocal": null,
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445453,
						"fltId": "NX006",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCG",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-09 23:10:00",
						"staLocal": "2019-12-10 02:10:00",
						"etdLocal": null,
						"etaLocal": "2019-12-10 02:20:00",
						"outTimeLocal": "2019-12-09 23:11:00",
						"offTimeLocal": "2019-12-09 23:26:00",
						"onTimeLocal": "2019-12-10 02:16:00",
						"inTimeLocal": "2019-12-10 02:39:00",
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					},
					{
						"fltPk": 445516,
						"fltId": "NX010",
						"depApt": "MFM",
						"arrApt": "PEK",
						"acType": "321",
						"acId": "BMCD",
						"fltTask": "W/Z",
						"fltStatus": "0",
						"stdLocal": "2019-12-10 07:30:00",
						"staLocal": "2019-12-10 10:50:00",
						"etdLocal": null,
						"etaLocal": null,
						"outTimeLocal": null,
						"offTimeLocal": null,
						"onTimeLocal": null,
						"inTimeLocal": null,
						"lastFltPk": null,
						"lastFltId": null,
						"lastFltStdLocal": null
					}
				]
			}
		},
		onLoad(options) {
			this.loadFlights(options)
		},
		methods: {
			loadFlights(param) {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.flights {
		.background {
			display: block;

			image {
				width: 100%;
				height: 320rpx;
			}
		}

		.flights-container {
			.flight-list {
				.flight {
					border: 1px solid #e8e8e8;
					box-sizing: border-box;
					margin: 0;
					padding: 0;
					color: rgba(0, 0, 0, 0.65);
					font-size: 14px;
					font-variant: tabular-nums;
					line-height: 1.5;
					list-style: none;
					font-feature-settings: 'tnum';
					position: relative;
					background: #fff;
					border-radius: 2px;
					transition: all 0.3s;
				}
			}
		}
	}
</style>
