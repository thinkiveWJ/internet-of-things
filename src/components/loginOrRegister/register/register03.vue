<template>
  <div id="register" class="register">
      <div class="register-title text-center">注册</div>
    <div class="register-content">
      <div>邮箱</div>
      <div><i-input type="text" disabled v-model="userName"></i-input></div>
    </div>
      <div class="register-content">
        <div>姓名</div>
        <div><i-input type="text" v-model="name" placeholder="请输入您的姓名"></i-input></div>
      </div>
      <div class="register-content">
        <div>设置密码（8-16位字母加数字组合）</div>
        <div><i-input type="password" v-model="password" placeholder="请输入设置您的密码"></i-input></div>
      </div>
      <div class="register-content">
        <div>确认密码</div>
        <div><i-input type="password" v-model="password2" placeholder="请输入设置您的确认密码"></i-input></div>
      </div>
      <a class="register-btn text-center" @click="userRegister">完成注册</a>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {passwordValidate} from '@/api/validate'
  import {getSignFunc} from '@/api/common'
  export default {
    data () {
      return {
        userName: '',
        name: '',
        password: '',
        password2: ''
      }
    },
    created () {
      this.userName = this.$route.query.mail
    },
    methods: {
      userRegister () {
        if (this.name.length > 10) {
          return this.$Notice.error({
            desc: '您输入的姓名过长'
          })
        }
//        验证8-16位字母加数字组合的密码
        if (!passwordValidate(this.password)) {
          return this.$Notice.error({
            desc: '请输入8-16位字母加数字组合的密码'
          })
        }
//        验证两次密码是否一致
        if (this.password !== this.password2) {
          return this.$Notice.error({
            desc: '您两次输入的密码不一样'
          })
        }
        let code
        let userName
        try {
          code = this.$route.query.code
          userName = this.$route.query.mail
        } catch (e) {

        }
//        获取签名
        getSignFunc(this, (sign, encrypt) => {
          this.$ajax(this, {
            url: '/user/userRegister.do',
            headers: {
              sign: sign,
              code: code
            },
            data: {
              userName: userName,
              name: this.name,
              password: encrypt.encrypt(this.password)
            }
          }, (result) => {
            let data = result['data']
            if (!data) {
              return
            }
            let token = data['token']
            let userId = data['userId']
            this.$store.commit('setNickName', this.name)
            this.$store.commit('setToken', token)
            this.$store.commit('setUserId', userId)
            this.$router.push({path: '/logined/overview'})
          })
        })
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #register.register{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 60%;
    margin: auto;
    height: 330px;
  }
  #register.register .register-title{
    letter-spacing: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  #register.register .register-content{
    font-size: 16px;
  }
  #register.register .register-content + .register-content{
    margin-top: 15px;
  }
  #register.register .register-content img{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  #register.register .register-content > div{
    margin-top: 8px;
  }
  #register.register .register-btn{
    display: block;
    color: #fff;
    background: #2a2e3c;
    padding: 8px 0;
    margin: 30px 0 15px 0;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
  }
</style>
