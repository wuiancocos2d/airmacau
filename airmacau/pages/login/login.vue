<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avatar">
				<image src="../../static/logo-with20.svg" mode="whid"></image>
			</view>
		</view>
		<view class="loginForm">
			<form @submit="handleSubmit">
				<view class="i-form-item">
					<view class="ipt">
						<i-input placeholder="Username" v-model="usrnm"></i-input>
					</view>
				</view>
				<view class="i-form-item">
					<view class="ipt">
						<i-input placeholder="Password" :type="'password'" v-model="pswd"></i-input>
					</view>
				</view>
				<view class="subBtn">
					<button color="linear-gradient(to right, #4bb0ff, #6149f6)" round size="large" type="info" @tap="handleSubmit">登錄</button>
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
	import UserAPI from '../../api/userAPI.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			iInput
		},
		data() {
			return {
				loging: false,
				usrnm: '',
				pswd: '',
				errMsg: ''
			};
		},
		methods: {
			...mapMutations(['USER_LOGIN']),
			handleSubmit() {
				const user = {
					'username': this.usrnm,
					'password': this.pswd
				}
				UserAPI.loginUser(user).then(res => {
					if(res.data && res.data.code === "200") {
						this.USER_LOGIN(user)
						this.toMain()
					}
				}).catch(err=> {
					console.error('is catch user login',err)
					this.errMsg = err
				})
			},
			toMain() {
				uni.reLaunch({
					url: '../index/index'
				})
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
