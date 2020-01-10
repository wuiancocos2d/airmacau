<template>
	<view class="flight-search">
		<view class="searchForm">
			<view class="row">
				<iptGrp :labelNm="'STD From'">
					<i-input type="text" v-model="stdFrom" :placeholder="today"></i-input>
				</iptGrp>
				<iptGrp :labelNm="'STD To'">
					<i-input type="text" v-model="stdTo" :placeholder="today"></i-input>
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
		data(){
			return {
				stdFrom: '',
				stdTo: '',
				today: 'today'
			}
		},
		onLoad() {
			this.localTime()
		},
		methods: {
			submitForm(){
				
			},
			localTime() {
				const now = new Date()
				this.today = now.toJSON().slice(0,10).replace(/-/g,'/');
			}
		}
	}
</script>

<style>
</style>
