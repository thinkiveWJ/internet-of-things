<template>
  <div id="login">
      <div class="login">
        <div class="login-title text-center">登录</div>
        <div class="login-content">
          <div><img v-lazy="'/static/images/Sign-my.png'" alt="邮箱">邮箱</div>
          <div><i-input type="text" v-model="name" placeholder="请输入您的邮箱"></i-input></div>
        </div>
        <div class="login-content">
          <div><img v-lazy="'/static/images/Sign-password.png'" alt="密码">密码</div>
          <div><i-input type="password" v-model="password" placeholder="请输入您的密码"></i-input></div>
        </div>
        <a class="login-btn text-center" @click="loginFunc">登录</a>
        <div class="clearfix login-footer">
          <router-link :to="{path: '/register', query: {id: 'forget'}}" class="left reset">忘记密码</router-link>
          <router-link :to="{path: '/register'}" class="right register">邮箱注册</router-link>
        </div>
      </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {passwordValidate, emailValidate} from '@/api/validate'
  import {getSignFunc} from '@/api/common'
  export default {
    data () {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      loginFunc () {
        if (!emailValidate(this.name)) {
          return this.$Notice.error({
            desc: '您输入的邮箱不对'
          })
        }
        //        验证8-16位字母加数字组合的密码
        if (!passwordValidate(this.password)) {
          return this.$Notice.error({
            desc: '您输入的密码不对'
          })
        }
//        获取签名以便对密码RSA加密
        getSignFunc(this, (sign, encrypt) => {
          this.$ajax(this, {
            url: '/user/userLogin.do',
            headers: {
              sign: sign
            },
            data: {
              userName: this.name,
              password: encrypt.encrypt(this.password)
            }
          }, (result) => {
            let data = result['data']
            if (!data) {
              return
            }
            let token = data['token']
            let userId = data['userId']
            this.$store.commit('setMail', this.name)
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
  #login .login{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 60%;
    margin: auto;
    height: 300px;
  }
  #login .login .login-title{
    letter-spacing: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  #login .login .login-content{
    font-size: 16px;
  }
  #login .login .login-content + .login-content{
    margin-top: 15px;
  }
  #login .login .login-content img{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  #login .login .login-content > div{
    margin-top: 8px;
  }
  #login .login .login-btn{
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
  #login .login .login-footer a{
    color: #999;
  }
</style>
