<template>
	<view class="flight am_light_bg flex" @tap="handleTap">
		<view v-for="(item,index) in cells" :key="index"  class="flt prop flex-sub" :class="darkBg? 'am_light_bg':'am_white_bg'">
			{{flt[item]}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Flight',
		props: {
			flight: {
				type: Object
			},
			standTime: {
				type: Boolean,
				default: true
			},
			darkBg: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				cells : ['fltId','depApt','arrApt','std','sta','eta','fltStatusName'],
				sliceItem: ['std','sta','eta']
			}			
		},
		computed: {
			flt: function(){
				let flt = Object.assign({},this.flight)
				if(this.standTime) {
					this.sliceItem.forEach((item)=>{
						flt[item] = flt[item] ? flt[item].slice(10,16) : '--:--'
					})
				}else {
					this.sliceItem.forEach((item)=>{
						flt[item] = flt[item] ? flt[item+'Local'].slice(10,16): '--:--'
					})
				}
				return flt
			}
		},
		methods: {
			handleTap() {
				this.$emit('sltFlt',this.flight)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/color';
	.flight {
		position: relative;
		.flt {
			flex: 0 0 100%; 
			box-sizing: border-box;
			white-space: nowrap;
			font-size: 14px;
			line-height: 28px;
			flex-grow: 1;
			flex-shrink: 0;
			flex-basis: 0;
			text-align: center;
			color: $am_black_font;
		}
	}
</style>
