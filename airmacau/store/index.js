import Vue from 'vue'
import Vuex from 'vuex'

import flight from './flight'
import user from './user'

// import music from './modules/music'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    flight: {
      namespaced: true,
      ...flight
    }
  }
})

export default store
