import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: '',
    userId: '',
    mail: ''
  },
  mutations: {
    setToken (state, token) {
      sessionStorage.setItem('token', token)
      state.token = token
    },
    setUserId (state, userId) {
      sessionStorage.setItem('userId', userId)
      state.userId = userId
    },
    setMail (state, mail) {
      sessionStorage.setItem('mail', mail)
      state.mail = mail
    }
  },
  getters: {
    getToken: state => {
      let token = sessionStorage.getItem('token')
      state.token = token
      return state.token
    },
    getUserId: state => {
      let userId = sessionStorage.getItem('userId')
      state.userId = userId
      return state.userId
    },
    getMail: state => {
      let mail = sessionStorage.getItem('mail')
      state.mail = mail
      return state.mail
    }
  }
})
export {
  store
}
