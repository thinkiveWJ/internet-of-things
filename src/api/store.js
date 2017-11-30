import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: '',
    userId: '',
    mail: '',
    nickName: ''
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
    },
    setNickName (state, nickName) {
      sessionStorage.setItem('nickName', nickName)
      state.nickName = nickName
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
    },
    getNickName: state => {
      let nickName = sessionStorage.getItem('nickName')
      state.nickName = nickName
      return state.nickName
    }
  }
})
export {
  store
}
