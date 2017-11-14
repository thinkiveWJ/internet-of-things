import Vue from 'vue'
// ajax请求
import axios from 'axios'
let $axios = axios.create({
  baseURL: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/',
  timeout: 12000,
  method: 'get'
})
$axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
$axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
Vue.prototype.$axios = $axios
function $ajax (that, params, callback) {
  that.$axios(params).then(response => {
    let res = response['data']
    let errorCode = res['code']
    if (errorCode !== 20000) {
      return that.$Notice.error({
        desc: 'Here is the notification description. Here is the notification description. '
      })
    }
    callback && typeof callback === 'function' && callback(res)
  })
}
Vue.prototype.$ajax = $ajax
