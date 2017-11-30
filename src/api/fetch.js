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
  params['headers'] = params['headers'] ? params['headers'] : {}
  params['headers']['token'] = sessionStorage.getItem('token')
  params['headers']['origin-type'] = 'web'
  params['data'] = params['data'] ? params['data'] : {}
  // params['data'] = JSON.stringify(params['data'])
  return new Promise((resolve, reject) => {
    that.$axios(params).then(response => {
      let res = response['data']
      let errorCode = res['result']
      if (typeof res === 'string') {
        if (res.indexOf('result=100') > -1 || res.indexOf('result=-1') > -1) {
          return that.$router.push({path: '/'})
        }
        return that.$Notice.error({
          desc: res
        })
      } else if (errorCode !== 0 && errorCode !== 201) {
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
