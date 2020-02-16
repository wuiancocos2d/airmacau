<template>
	<view class="flight-search">
		<Ticket subName='Search' :spin="spin" :hasSub="true" @subTab="submitForm">
			<view class="searchForm">
				<view class="cu-form-group">
					<view class="title">Flight Date</view>
					<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
			</view>
		</Ticket>
	</view>
</template>

<script>
	import Ticket from '@/components/ticket/ticket.vue'
	import {mapActions} from 'vuex'
	export default {
		components: {
			Ticket
		},
		data() {
			return {
				date: '',
				spin: false
			}
		},
		onLoad() {
			this.localTime()
		},
		methods: {
			...mapActions('flight',['change_fltDate']),
			submitForm() {
				this.change_fltDate(this.date)
				uni.navigateTo({
					url: '../flights/fltList'
				})
			},
			localTime() {
				const now = new Date()
				this.date = now.toJSON().slice(0, 10).replace(/-/g, '-');
			},
			DateChange(e) {
				this.date = e.detail.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flight-search {
		padding-top: 100px;
		background-color: #F2F2F2;
	}
</style>
