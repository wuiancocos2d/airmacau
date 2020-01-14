<template>
	<view class="flight-search">
		<view class="searchForm">
			<view class="row">
				<iptGrp :labelNm="'Date'">
					<i-input @focus="openCalendar" type="text" v-model="date" :placeholder="today"></i-input>
				</iptGrp>
			</view>
			<view class="row submitRow">
				<i-button :type="'company'" @click="submitForm">Search</i-button>
			</view>
		</view>
		<uni-calendar ref="calendar" :insert="false" :showMonth="true" @confirm="dateChng" @change="dateChng" />
	</view>
</template>

<script>
	import IptGrp from '@/components/iptGrp/iptGrp.vue'
	import iInput from '@/components/input/i-input.vue'
	import iButton from '@/components/buttons/i-buttons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import fltAPI from '@/api/flight.js'
	export default {
		components: {
			"iptGrp": IptGrp,
			iInput,
			uniCalendar,
			iButton
		},
		data() {
			return {
				date: ''
			}
		},
		onLoad() {
			this.localTime()
		},
		methods: {
			submitForm() {
				fltAPI.getFltByStdRange(this.date, this.date).then(res => {
					const fltRsp = JSON.parse(res.data.data.detail)
					if (fltRsp.success) {
						const fltList = fltRsp.result
						uni.setStorage({
						    key: 'datefltList',
						    data: fltList,
						    success: function () {
								console.log('fltRsp', fltRsp.result)
						        uni.navigateTo({
						        	url: '../flights/fltList'
						        })
						    }
						})
					}
				}).catch(err => {
					console.log('fltApi error', err)
				})
			},
			localTime() {
				const now = new Date()
				this.date = now.toJSON().slice(0, 10).replace(/-/g, '-');
			},
			dateChng(newDate) {
				this.date = newDate.fulldate
			},
			openCalendar() {
				this.$refs.calendar.open()
			}
		}
	}
</script>

<style>
</style>
