import Vue from 'vue'
// ajax请求
import axios from 'axios'
let $axios = axios.create({
  baseURL: 'http://m3.beacool.com/internet_of_things/',
  timeout: 12000
})
Vue.prototype.$axios = $axios
function ajax (that, params, callback) {
  params['method'] = 'post'
  params['data'] = params['data'] ? params['data'] : {}
  // params['data'] = JSON.stringify(params['data'])
  return new Promise((resolve, reject) => {
    that.$axios(params).then(response => {
      let res = response['data']
      let errorCode = res['result']
      if (errorCode !== 0) {
        return that.$Notice.error({
          desc: res['message']
        })
      }
      callback && typeof callback === 'function' && callback(res)
    }).catch((error) => {
      reject(error)
    })
  })
}
Vue.prototype.$ajax = ajax
