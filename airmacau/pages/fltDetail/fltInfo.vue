<template>
	<view class="detail">
		<view class="flight">
			<Ticket>
				<Location :flt="checkFlt"></Location>
			</Ticket>
		</view>
	</view>
</template>

<script>
	import Ticket from '@/components/ticket/ticket.vue'
	import Location from './fltInfoBlock/Location.vue'
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
			Location
		},
		data() {
			return {
				gridStyle: {
					"border-bottom": "1px solid #aaaaaa"
				},
				infoGrp: []
			}
		},

		computed: {
			...mapState('flight', ['checkFlt'])
		},
		methods: {
			...mapActions('flight', ['change_checkFlt']),
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {

	}
</style>
