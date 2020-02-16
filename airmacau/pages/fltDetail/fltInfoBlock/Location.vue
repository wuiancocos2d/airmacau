<template>
	<view class="container">
		<view class="flex solid-bottom  justify-between">
			<view class=" padding-sm radius">
				<view class="">From:</view>
				<view class="headInfo am_theme_font">
					{{flt.depApt}}
				</view>
			</view>
			<view class="fltImg_container">
				<image class="fltImg" :src="fltImg"></image>
			</view>
			<view class=" padding-sm  radius">
				<view class="">
					To:
				</view>
				<view class="headInfo am_theme_font">
					{{flt.arrApt}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import FltImg from '@/static/icons/plane_flt.svg'
	export default {
		name: 'Location',
		data() {
			return {
				fltImg: FltImg
			}
		},
		props: {
			flt: {
				type: Object,
				required: true,
				default: function(){
					return {'depApt':'---','arrApt':'---'}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.fltImg_container {
			.fltImg {
				width: 35px;
				height: 35px;

				img {
					width: 100%;
					height: 1005;
				}
			}
		}
		.headInfo {
			font-size: 20px;
			font-weight: bold;
		}
	}
</style>
