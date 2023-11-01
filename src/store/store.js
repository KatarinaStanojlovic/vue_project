import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users.js'
import cats from './modules/cats.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      users: users,
      cats: cats
    }
})