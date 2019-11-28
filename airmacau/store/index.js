import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: ""
	},
	actions:actions,
	mutations:mutations
})

export default store


