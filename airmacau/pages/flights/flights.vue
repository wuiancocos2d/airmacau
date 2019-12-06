<template>
	<view class="flight-content">
		<view class="searchForm">
			<view class="row">
				<iptGrp :labelNm="'Flight Number'">
					<input type="text">
				</iptGrp>
			</view>
			<view class="row">

			</view>
		</view>
	</view>
</template>

<script>
	import IptGrp from '@/components/iptGrp/iptGrp.vue'
	export default {
		components: {
			"iptGrp": IptGrp
		},
		data() {
			return {
				flightNo: "",
				origin: "",
				destination: ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchForm {
		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;

			.iptGrp {
				box-sizing: border-box;
				width: 49.9%;
				padding: 0
			}
		}
	}
</style>
