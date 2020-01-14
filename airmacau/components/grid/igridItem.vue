<template>
	<view class="igrid-item" :class="{'col': 'col-' + col}">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		name: 'igridItem',
		props: {
			col: {
				type: Number,
				default: 1
			}
		}
	}
</script>

<style lang="scss">
	
	.igrid-item {
		overflow: hidden;
		min-height: 1;
		&.col-1 {
			width: 10%;
		}
		&.col-2 {
			width: 20%;
		}
		&.col-3 {
			width: 33.333%;
		}
		&.col-4 {
			width: 40%;
		}
		&.col-5 {
			width: 50%;
		}
		&.col-6 {
			width: 60%;
		}
		&.col-7 {
			width: 70%;
		}
		&.col-8 {
			width: 80%;
		}
		&.col-9 {
			width: 90%;
		}
		&.col-10 {
			width: 100%;
		}
	}
</style>
