<template>
  <div id="register" class="register">
      <div class="register-title text-center" v-cloak>{{title}}</div>
      <div class="register-content">
        <div><img v-lazy="'/static/images/Sign-my.png'" alt="邮箱">邮箱</div>
        <div><i-input type="text" v-model="emailVal" placeholder="请输入您的邮箱"></i-input></div>
      </div>
      <a class="register-btn text-center" @click="sendRegisterMailFunc">下一步</a>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {emailValidate} from '@/api/validate.js'
  import {getSignFunc} from '@/api/common.js'
  export default {
    data () {
      return {
        emailVal: '',
        sign: '',
        title: ''
      }
    },
    created () {
      this.getContent()
    },
    watch: {
      '$route' () {
        this.getContent()
      }
    },
    methods: {
      getContent () {
        let id = this.$route.query.id
        this.title = id === 'forget' ? '找回密码' : '注册'
      },
//      发送邮件以注册
      sendRegisterMailFunc () {
//        获取签名
        getSignFunc(this, (sign) => {
          let url = '/user/sendRegisterMail.do'
          if (this.title === '找回密码') {
            url = '/user/sendGetBackPwdMail.do'
          }
          let email = this.emailVal
//          验证邮箱格式
          if (!emailValidate(email)) {
            return this.$Notice.error({
              desc: '请输入正确的邮箱'
            })
          }
//          发送注册链接的邮件
          this.$ajax(this, {
            url: url,
            headers: {
              sign: sign
            },
            data: {
              mail: email
            }
          }, (result) => {
            this.$store.commit('setMail', email)
            this.$router.push({path: '/register02'})
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
    height: 300px;
  }
  #register.register .register-title{
    letter-spacing: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  #register.register .register-content{
    font-size: 16px;
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
