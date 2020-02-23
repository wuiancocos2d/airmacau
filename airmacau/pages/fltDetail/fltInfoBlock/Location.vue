<template>
	<view class="container">
		<view class="flex solid-bottom  justify-between">
			<view class=" padding-sm radius">
				<view class="">From:</view>
				<view class="headInfo am_theme_font">
					{{checkFlt.depApt}}
				</view>
			</view>
			<view class="fltImg_container">
				<image class="fltImg" :src="fltImg"></image>
				<view class="am_theme_font">
					{{checkFlt.fltId}}
				</view>
			</view>
			<view class=" padding-sm  radius">
				<view class="">
					To:
				</view>
				<view class="headInfo am_theme_font">
					{{checkFlt.arrApt}}
				</view>
			</view>
		</view>
		<view class="">
			<InfoGrid :isBlock="false" :col="3" :fdata="infos"></InfoGrid>
		</view>
	</view>
</template>

<script>
	import FltImg from '@/static/icons/plane_flt.svg'
	import InfoGrid from './infoGrid.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Location',
		components: {
			InfoGrid
		},
		props: {
				checkFlt: {
					type: Object,
					required: true
				}
		},
		computed: {
			infos: function() {
				let fltInfo = [{
						'vn': 'acId',
						'name': 'ACId'
					},
					{
						'vn': 'acType',
						'name': 'ACType'
					},
					{
						'vn': 'fltStatusName',
						'name': 'Status'
					},
					{
						'vn':'cancelReasonCn',
						'name':'Reason'
					},
					{
						'vn': 'fltTaskName',
						'name': 'Task'
					},{
						'vn': 'brdGateStand',
						'name': 'Gate/Stand'
					}
				]
				return this.filterInfos(this.checkFlt,fltInfo)
			}
		},
		data() {
			return {
				fltImg: FltImg,
				flt: this.c
			}
		},
		methods: {
			filterInfos(flt, infos, filter) {
				infos.forEach((element) => {
					element.value = flt[element.vn] ? flt[element.vn] : '---'
					if (filter) {
						element.value = filter(element.value)
					}
				})
				return infos
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
