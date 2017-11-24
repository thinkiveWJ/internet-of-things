import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import Vue from 'vue'
Vue.prototype.$JSEncrypt = JSEncrypt
/**
 * 获取签名
 * @param that
 * @param callback
 */
function getSignFunc (that, callback) {
  that.$ajax(that, {
    url: '/user/getPublicKey.do',
    data: {}
  }, function (result) {
    let currentTime = result['data']['currentTime']
    let publicKey = result['data']['publicKey']
    let encrypt = new that.$JSEncrypt.JSEncrypt()
    encrypt.setPublicKey(publicKey)
    let sign = encrypt.encrypt('internet_of_things,' + currentTime)
    callback && typeof callback === 'function' && callback(sign, encrypt)
  })
}
export {
  getSignFunc
}
