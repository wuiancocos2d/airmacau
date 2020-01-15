<template>
	<view class="igrid" :style="iStyle">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'igrid',
		props: {
			iStyle: Object
		}
	}
</script>

<style lang="scss">
	.igrid {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
</style>
