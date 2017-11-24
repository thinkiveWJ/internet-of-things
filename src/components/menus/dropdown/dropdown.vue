<template>
  <i-dropdown id="dropdown">
    <a href="javascript:void(0)">
      下拉菜单
      <i-icon type="arrow-down-b"></i-icon>
    </a>
    <i-dropdown-menu slot="list">
      <i-dropdown-item><a @click="modifyPwd">修改密码</a></i-dropdown-item>
      <i-dropdown-item><a @click="loginOut">退出</a></i-dropdown-item>
    </i-dropdown-menu>
  </i-dropdown>
</template>
<script type='text/ecmascript-6'>
  import {mapGetters} from 'vuex'
  import {getSignFunc} from '@/api/common'
  export default {
    computed: {
      ...mapGetters([
        'getToken',
        'getUserId'
      ])
    },
    methods: {
      modifyPwd () {
//        获取签名以发送邮件
        getSignFunc(this, (sign) => {
          let token = this.getToken
          this.$ajax(this, {
            url: '/user/sendModifyPwdMail.do',
            headers: {
              token: token,
              sign: sign
            },
            data: {
              userId: this.getUserId
            }
          }, (result) => {
            this.$router.push({
              path: '/register02',
              query: {
                id: 'modify'
              }
            })
          })
        })
      },
      loginOut () {
        this.$ajax(this, {
          url: '/user/loginOut.do',
          headers: {
            token: this.getToken
          },
          data: {
            userId: this.getUserId
          }
        }, (result) => {
          sessionStorage.clear()
          this.$router.push({
            path: '/'
          })
        })
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #dropdown.ivu-dropdown a{
    margin: 0px 6px;
    font-size: 16px;
    color: #333;
  }
  #dropdown .ivu-dropdown-menu .ivu-dropdown-item a{
    font-size: 16px !important;
    display: block;
  }
</style>
