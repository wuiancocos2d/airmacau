import {CHANGE_CHECKFLT,CHANGE_FLTDATE} from './mutation-types.js'

const state = {
	checkFlt: {},
	flightDate: ''
}

const mutations = {
	[CHANGE_CHECKFLT](state, flt) {
		state.checkFlt = flt
	},
	[CHANGE_FLTDATE](state,date) {
		state.flightDate = date
	}
}

const actions = {
	change_fltDate(context,date) {
		context.commit(CHANGE_FLTDATE,date)
	},
	change_checkFlt(context,flt) {
		context.commit(CHANGE_CHECKFLT,flt)
	}
}

export default {
  state,
  mutations,
  actions
}
