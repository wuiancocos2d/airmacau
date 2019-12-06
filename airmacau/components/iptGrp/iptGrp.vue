<template>
	<view class="iptGrp">
		<view class="iptLabel">
			<label for="label">{{labelNm}}</label>
		</view>
		<view class="i-input-view">
			<slot ></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "IptGrp", 
		props: {
			/**
			 * 输入类型
			 */
			label: {
				type: String
			},
			labelNm: {
				type: String
			}

		},
		methods: {
			
		}
	}
</script>
<style>
</style>
