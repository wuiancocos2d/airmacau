<template>
	<view class="detail">
		<view class="flight">
			<Ticket>
				<Location :flt="checkFlt"></Location>			
			</Ticket>
			<Ticket>
				
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
			},
			filterInfos (flt,infos) {
				infos.forEach((element) => {
					element.value = flt[element.vn] ? flt[element.vn] : '---'
				})
				return infos
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {

	}
</style>
