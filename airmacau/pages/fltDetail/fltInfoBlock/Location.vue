<template>
	<view class="container">
		<view class="flex solid-bottom  justify-between">
			<view class=" padding-sm radius">
				<view class="">From:</view>
				<view class="headInfo am_theme_font">
					{{flt.depApt}}
				</view>
			</view>
			<view class="fltImg_container">
				<image class="fltImg" :src="fltImg"></image>
				<view class="am_theme_font">
					{{flt.fltId}}
				</view>
			</view>
			<view class=" padding-sm  radius">
				<view class="">
					To:
				</view>
				<view class="headInfo am_theme_font">
					{{flt.arrApt}}
				</view>
			</view>
		</view>
		<view class="">
			<InfoGrid :isBlock="false" :col="4" :data="infos"></InfoGrid>
		</view>
	</view>
</template>

<script>
	import FltImg from '@/static/icons/plane_flt.svg'
	import InfoGrid from './infoGrid.vue'
	export default {
		name: 'Location',
		components: {
			InfoGrid
		},
		computed: {
			infos: function() {
				let fltInfo = [{
						'vn': 'acId',
						'name': 'ACId'
					},
					{
						'vn': 'acType',
						'name': 'ACType'
					},
					{
						'vn': 'fltStatusName',
						'name': 'Status'
					},
					{
						'vn': 'fltTaskName',
						'name': 'Task'
					}
				]
				fltInfo.forEach((element) => {
					element.value = this.flt[element.vn] ? this.flt[element.vn] : '---'
				})
				console.log('fltInfo',fltInfo)
				return fltInfo
			}
		},
		data() {
			return {
				fltImg: FltImg,
				flt: {
					"fltTask": "N/M",
					"paxBooking": 0,
					"arrApt": "MFM",
					"transC48": 0,
					"transPax": 0,
					"doorIn": null,
					"stdLocal": "2020-02-16 05:55:00",
					"memo": null,
					"seatBusi": 24,
					"infant": 0,
					"seats": 179,
					"noOilLoad": 48800,
					"cargoWeightTrans": null,
					"cancelExternalReasonCn": null,
					"delayCode": "AT04",
					"offTimeLocal": "2020-02-16 06:19:00",
					"eta": "2020-02-16 08:20:00",
					"etd": null,
					"jumpSeat": 0,
					"bookingNsB": 0,
					"inTimeLocal": "2020-02-16 08:21:00",
					"bookingNsE": 0,
					"outTimeLocal": "2020-02-16 06:08:00",
					"delayCodeRls": null,
					"vip": "0",
					"acDoorOpen": "2020-02-16 08:24:00",
					"sta": "2020-02-16 08:30:00",
					"std": "2020-02-16 05:55:00",
					"paxY": 0,
					"pax": 0,
					"paxBkgLf": 0,
					"cancelReasonEn": null,
					"luggagePiece": null,
					"maxToro": 89000,
					"transY48": 0,
					"onTimeLocal": "2020-02-16 08:15:00",
					"eavarageLuggage": null,
					"cargoWeight": null,
					"paxBkg": "0/0",
					"fltTaskName": "调机",
					"adult": 0,
					"outTime": "2020-02-16 06:08:00",
					"child": 0,
					"fltStatus": "0",
					"staLocal": "2020-02-16 08:30:00",
					"paxC": 0,
					"paxF": 0,
					"mealF": 0,
					"onTime": "2020-02-16 08:15:00",
					"cancelExternalReasonEn": null,
					"transY": 0,
					"takeoffFuel": 10280,
					"fltPk": 483322,
					"delayMemo": null,
					"cancelReason": null,
					"acType": "321",
					"brdGateStand": ",b",
					"mealT": 0,
					"mealS": 0,
					"cancelReasonCn": null,
					"etdLocal": null,
					"acSeat": "24/155",
					"delayDept": "WEATHER",
					"mailWeight": null,
					"etaLocal": "2020-02-16 08:20:00",
					"seatNorm": 155,
					"acId": "BMCA",
					"inTime": "2020-02-16 08:21:00",
					"depApt": "CTU",
					"fltStatusName": "正常",
					"acDoorClose": "2020-02-16 06:03:00",
					"transF": 0,
					"fltId": "NX707",
					"delayTime": 13,
					"transF48": 0,
					"offTime": "2020-02-16 06:19:00",
					"tripFuel": 5550,
					"transC": 0
				}
			}
		},
		// props: {
		// 	flt: {
		// 		type: Object,
		// 		required: true,
		// 		default: function(){
		// 			return {'depApt':'---','arrApt':'---'}
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.container {
		.fltImg_container {
			.fltImg {
				width: 35px;
				height: 35px;

				img {
					width: 100%;
					height: 1005;
				}
			}
		}

		.headInfo {
			font-size: 20px;
			font-weight: bold;
		}
	}
</style>
