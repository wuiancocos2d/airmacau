<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avatar">
				<image src="../../static/logo-with20.svg" mode="whid"></image>
			</view>
		</view>
		<view class="loginForm">
			<form @submit="handleSubmit" >
				<view class="i-form-item">
					<view class="ipt">
						<i-input placeholder="Username"></i-input>
					</view>
				</view>
				<view class="i-form-item">
					<view class="ipt">
						<i-input placeholder="Password" :type="'password'"></i-input>
					</view>
				</view>
				<view class="subBtn">
					<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" round size="large" type="info">登錄</van-button>
				</view>
			</form>
		</view>
		<view class="bottomBG">
			<image src="../../static/loginBk.png" alt=""></image>
		</view>
	</view>
</template>

<script>
	import iInput from '../../components/input/i-input.vue'
	export default {
		components: {
			iInput
		},
		data() {
			return {
				
			};
		},
		methods: {
			handleSubmit() {
				
			}
		}
	}
</script>

<style lang="scss">
.content {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		padding-top: 150rpx;
		background-color: #F8F8F8;
		 .avatarWrapper {
			margin-top: 100rpt;
			.avatar {
				overflow: hidden;
				image {
					display: block;
					width: 350rpx;
					height: 98rpx;
					margin: 0 auto;
				}
			}
		}
		.loginForm {
			box-sizing: border-box;
			margin: 100rpx auto 0;
			width: 80vw;
			background-color: #F8F8F8;
			.subBtn {
				margin-top: 100rpx;
			}
		}
		.bottomBG {
			position: fixed;
			bottom: 15rpx;
			height: 200rpx;
			width: 100vw;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
