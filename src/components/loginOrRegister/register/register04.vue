<template>
  <div id="reset" class="reset">
      <div class="reset-title text-center">重置密码</div>
      <div class="reset-content">
        <div>邮箱</div>
        <div><i-input type="text" disabled v-model="userName"></i-input></div>
      </div>
      <div class="reset-content">
        <div>设置密码（8-16位字母加数字组合）</div>
        <div><i-input type="password" v-model="password" placeholder="请输入设置您的密码"></i-input></div>
      </div>
      <div class="reset-content">
        <div>确认密码</div>
        <div><i-input type="password" v-model="password2" placeholder="请输入设置您的确认密码"></i-input></div>
      </div>
      <a class="reset-btn text-center" @click="modifyPwd">完成重置密码</a>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {passwordValidate} from '@/api/validate'
  import {getSignFunc} from '@/api/common'
  export default {
    data () {
      return {
        password: '',
        password2: ''
      }
    },
    created () {
      this.userName = this.$route.query.mail
    },
    methods: {
      modifyPwd () {
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
            url: '/user/modifyPwd.do',
            headers: {
              sign: sign,
              code: code
            },
            data: {
              userName: userName,
              newPassword: encrypt.encrypt(this.password)
            }
          }, (result) => {
            this.$router.push({path: '/'})
          })
        })
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #reset.reset{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 60%;
    margin: auto;
    height: 330px;
  }
  #reset.reset .reset-title{
    letter-spacing: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  #reset.reset .reset-content{
    font-size: 16px;
  }
  #reset.reset .reset-content + .reset-content{
    margin-top: 15px;
  }
  #reset.reset .reset-content img{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  #reset.reset .reset-content > div{
    margin-top: 8px;
  }
  #reset.reset .reset-btn{
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
