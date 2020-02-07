<template>
	<view class="detail">
		<view class="flight">
			<IGrid>
				<iGridItem col="10">
					<view class="text">Flt No: {{flt.fltId}} Ac ID: {{flt.acId}}</view>
				</iGridItem>
			</IGrid>
		</view>
		<view class="fltLine">
			<IGrid iStyle="gridStyle">
				<iGridItem col="10">
					<view class="dst">
						<view>From: {{flt.depApt}}</view>
						<view class="std">
							<view class="bk">
								STD: {{flt.std}}
							</view>
							<view class="lct">
								STD	Local: {{flt.stdLocal}}
							</view>
						</view>
					</view>
				</iGridItem>
			</IGrid>
			<IGrid iStyle="gridStyle">
				<iGridItem col="10">
					<view class="dst">
						To: {{flt.arrApt}}
						<view class="std">
							<view class="bk">
								STD:
								{{flt.sta}}
							</view>
							<view class="lct">
								STD Local:
								{{flt.staLocal}}
							</view>
						</view>
					</view>
				</iGridItem>
			</IGrid>
		</view>
		<iview class="infoBlock">
			<IGrid>
				<iGridItem col="2">
					<view class="infor">
						Trip Fuel
					</view>
					<view class="value">
						{{flt.tripFuel}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						AC Seat
					</view>
					<view class="value">
						{{flt.acSeat}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Jump Seat
					</view>
					<view class="value">
						{{flt.jumpSeat}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Trip Fuel
					</view>
					<view class="value">
						{{flt.tripFuel}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						pax Bkg Lf
					</view>
					<view class="value">
						{{flt.paxBkgLf}}
					</view>
				</iGridItem>
			</IGrid>
			<IGrid>
				<iGridItem col="2">
					<view class="infor">
						Seat Busi
					</view>
					<view class="value">
						{{flt.seatBusi}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Child
					</view>
					<view class="value">
						{{flt.child}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Door Close
					</view>
					<view class="value">
						{{flt.acDoorClose}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Door Open
					</view>
					<view class="value">
						{{flt.acDoorOpen}}
					</view>
				</iGridItem>
				<iGridItem col="2">
					<view class="infor">
						Take off fuel
					</view>
					<view class="value">
						{{flt.takeoffFuel}}
					</view>
				</iGridItem>
			</IGrid>
		</iview>
	</view>
</template>

<script>
	import IGrid from '@/components/grid/igrid.vue'
	import iGridItem from '@/components/grid/igridItem.vue'
	import {
		fltDetailData
	} from "@/mock/flight_mock.js"
	import {getflightinfoByFltPk} from '@/api/flight.js'
	export default {
		name: 'FltDetail',
		components: {
			IGrid,
			iGridItem
		},

		data() {
			return {
				flt: {},
				gridStyle: {"border-bottom":"1px solid #aaaaaa"}
			}
		},
		mounted: function() {
			this.getFltInfo()
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getFltInfo() {
				const that = this
				uni.getStorage({
					key: 'detailFlt',
					success:function(res){
						console.log(' data fltPk',res.data.fltPk)
						getflightinfoByFltPk(res.data.fltPk).then(
							fltRes => {
								that.flt = JSON.parse(fltRes.data.data.detail).result
							}
						).catch(err=> {
							console.log('getflightinfoByFltPk err',err)
						})
					},
					fail: function(err){
						console.log('getFltInfo key detailFlt erro ',err)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		.flight {
			position: relative;
			top: -1px;
			font-size: 16px;
			background-color: #1a237e;
			color: #FFFFFF;
			padding: 0 15px;

			.text {
				line-height: 30px;
				font-size: 15px;
			}
		}

		.time {
			padding: 0 10px;
		}
		.infoBlock {
			background-color: #007AFF;
			border-bottom: 1px solid #bdbdbd;
		}
		.tapChng {
			text-align: center;
		}
	}
</style>
