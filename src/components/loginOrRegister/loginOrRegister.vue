<template>
  <div id="loginOrRegister">
    <i-row type="flex" :gutter="16" align="middle">
      <i-col :span="8">
        <img v-lazy="'/static/images/Sign-img.png'" alt="登录页面背景">
      </i-col>
      <i-col :span="16">
        <router-view></router-view>
      </i-col>
    </i-row>
  </div>
</template>
<script type='text/ecmascript-6'>
</script>
<style type='text/css' rel='stylesheet'>
  #loginOrRegister{
    padding: 0 8px;
    background: #fff;
    margin-left: -16px;
    height: 100%;
  }
  #loginOrRegister .ivu-col{
    height: 100%;
    position: relative;
  }
  #loginOrRegister .ivu-col img{
    width: 100%;
    height: 100%;
    display: block;
    font-size: 0;
  }
</style>
