<template>
	<view class="igrid">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'igrid'
	}
</script>

<style lang="scss" >
	.igrid {
		display: flex;
		flex-wrap: nowrap;
	}
</style>
