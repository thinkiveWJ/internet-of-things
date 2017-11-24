<template>
  <div id="register" class="register text-center">
      <div class="register-title" v-cloak>{{title}}</div>
      <div class="register-info">
        <div>验证邮件已发送到您的邮箱</div>
        <div class="email" v-cloak>{{mail}}</div>
        <div v-cloak>请前往邮箱，并根据验证验证邮件的提示完成{{desc}}</div>
      </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getMail'
      ])
    },
    data () {
      return {
        mail: '',
        title: '',
        desc: ''
      }
    },
    methods: {
      getContent () {
        this.mail = this.getMail
        let id = this.$route.query.id
        if (id === 'forget') {
          this.desc = this.title = '找回密码'
        } else if (id === 'modify') {
          this.desc = this.title = '修改密码'
        } else {
          this.desc = this.title = '注册'
        }
      }
    },
    created () {
      this.getContent()
    },
    watch: {
      '$route' () {
        this.getContent()
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
    height: 180px;
  }
  #register.register .register-title{
    letter-spacing: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  #register.register .register-info{
    margin-top: 45px;
    font-size: 16px;
  }
  #register.register .register-info > div{
    margin-top: 15px;
  }
  #register.register .register-info .email{
    font-weight: bold;
  }
</style>
