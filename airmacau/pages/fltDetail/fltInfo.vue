<template>
	<view class="detail">
		<view class="flight">
			<Ticket>
				<Location :checkFlt="checkFlt" :flt="checkFlt"></Location>
			</Ticket>
			<Ticket>
				<view>
					<view class="cu-bar bg-white">
						<view class="action">
							<text class="cuIcon-title am_theme_font"></text>Times
						</view>
					</view>
					<InfoGrid :isBlock="false" :col="2" :fdata="dTimes"></InfoGrid>
					<InfoGrid :isBlock="false" :col="2" :fdata="aTimes"></InfoGrid>
				</view>
			</Ticket>
			<Ticket>
				<view>
					<view class="cu-bar bg-white">
						<view class="action">
							<text class="cuIcon-title am_theme_font"></text>Fuel
						</view>
					</view>
					<InfoGrid :isBlock="false" :col="2" :fdata="fuel"></InfoGrid>
				</view>
			</Ticket>
			<Ticket>
				<view>
					<view class="cu-bar bg-white">
						<view class="action">
							<text class="cuIcon-title am_theme_font"></text>Seats
						</view>
					</view>
					<InfoGrid :isBlock="false" :col="2" :fdata="seats"></InfoGrid>
				</view>
			</Ticket>
		</view>
	</view>
</template>

<script>
	import Ticket from '@/components/ticket/ticket.vue'
	import Location from './fltInfoBlock/Location.vue'
	import InfoGrid from './fltInfoBlock/infoGrid.vue'
	import {
		fltDetailData
	} from "@/mock/flight_mock.js"
	import {
		getflightinfoByFltPk
	} from '@/api/flight.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'FltDetail',
		components: {
			Ticket,
			Location,
			InfoGrid
		},
		data() {
			return {
				gridStyle: {
					"border-bottom": "1px solid #aaaaaa"
				}
			}
		},

		computed: {
			...mapState('flight', ['checkFlt']),
			dTimes: function() {
				let dTimes = [{
						'vn': 'etd',
						'name': 'ETD'
					},
					{
						'vn': 'std',
						'name': 'STD'
					},
					{
						'vn': 'etdLocal',
						'name': 'Etd L'
					},
					{
						'vn': 'stdLocal',
						'name': 'Std L'
					}
				]
				return this.filterInfos(this.checkFlt, dTimes, this.formatTime)
			},
			aTimes: function() {
				let aTimes = [{
						'vn': 'eta',
						'name': 'ETA'
					},
					{
						'vn': 'sta',
						'name': 'STA'
					},
					{
						'vn': 'etaLocal',
						'name': 'Eta L'
					},
					{
						'vn': 'staLocal',
						'name': 'Sta L'
					}
				]
				return this.filterInfos(this.checkFlt, aTimes, this.formatTime)
			},
			fuel: function() {
				let fuel = [{
						'vn': 'noOilLoad',
						'name': 'NoOilLoad'
					},
					{
						'vn': 'maxToro',
						'name': 'max Toro'
					},
					{
						'vn': 'tripFuel',
						'name': 'Trip Fuel'
					},
					{
						'vn': 'takeoffFuel',
						'name': 'Takeoff Fuel'
					}
				]
				return this.filterInfos(this.checkFlt, fuel)
			},
			seats: function() {
				let seats = [{
						'vn': 'seats',
						'name': 'Seats'
					},
					{
						'vn': 'paxBkg',
						'name': 'BKG'
					},
					{
						'vn': 'acSeat',
						'name': 'AC Seat'
					},
					{
						'vn': 'adult',
						'name': 'Adult'
					}
				]
				return this.filterInfos(this.checkFlt, seats)
			}
		},
		methods: {
			...mapActions('flight', ['change_checkFlt']),
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			filterInfos(flt, infos, filter) {
				infos.forEach((element) => {
					element.value = flt[element.vn] ? flt[element.vn] : '---'
					if (filter) {
						element.value = filter(element.value)
					}
				})
				return infos
			},
			formatTime(time) {
				return time === '---' ? '---' : time.slice(5, 16)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {}
</style>
