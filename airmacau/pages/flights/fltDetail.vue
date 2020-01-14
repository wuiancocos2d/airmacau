<template>
	<view class="detail">
		<uni-nav-bar color="#fafafa" background-color="#2D2F55" :status-bar="true" left-icon="arrowleft" left-text=" " title="Flight Detail"
		 @clickLeft="back" />
		<view class="flight">
			<IGrid>
				<iGridItem col="10">
					<view class="text">Flt No: {{flt.fltId}} Ac ID: {{flt.acId}}</view>
				</iGridItem>
			</IGrid>
		</view>
		<view class="fltLine">
			<IGrid>
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
			</iGrid>
			<iGrid>
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
		<iview class="tapChng">
			
		</iview>
	</view>
</template>

<script>
	import IGrid from '@/components/grid/igrid.vue'
	import iGridItem from '@/components/grid/igridItem.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import {
		fltDetailData
	} from "@/mock/flight_mock.js"
	export default {
		name: 'FltDetail',
		components: {
			IGrid,
			iGridItem,
			uniNavBar
		},

		data() {
			return {
				flt: {},
				times: [
					"std",
					"stdL"
				]
			}
		},
		onLoad: function() {
			this.getFltInfo()
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getFltInfo() {
				this.flt = fltDetailData()
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
			background-color: #242644;
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
	}
</style>
