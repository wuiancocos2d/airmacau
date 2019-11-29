import Vue from 'vue'
import * as types from './mutation-types.js'
export default {
	[types.USER_LOGIN](state,user) {
		state.userInfo = user
		state.hasLogin = true
	}
}