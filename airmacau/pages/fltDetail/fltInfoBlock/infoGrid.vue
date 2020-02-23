<template>
	<view  class="{block: isBlock}">
		<view class="dviding" v-if="dividing"></view>
		<view>
			<view class="grid margin-bottom text-center" :class="'col-' + colNum ">
				<view class="infoGrp" v-for="(item,index) in fdata" :key="index">
					<view class="title am_normal_font">
						{{item.name}}:
					</view>
					<view class="value am_theme_font">
						{{item.value}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'InfoGrid',
		props: {
			col: {
				type: Number,
				default: function() {
					return 1
				}
			},
			dividing: {
				type: Boolean,
				default: false
			},
			isBlock: {
				type: Boolean,
				default: true
			},
			fdata: {
				type: Array,
				default: function() {
					return []
				}
			},
			fLeft: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			colNum() {
				return this.col
			}
		}
	}
</script>

<style lang="scss" scoped>
	.infoGrp {

	}
</style>
