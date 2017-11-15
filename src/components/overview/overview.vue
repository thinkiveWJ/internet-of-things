<template>
  <div id="overview">
    <div class="welcome">
      欢迎回来，Darren
    </div>
    <i-row class="main" :gutter="16" type="flex">
      <i-col :span="10">
        <div class="title">
          网络1 <span class="status">在线</span>
        </div>
        <i-row class="contents">
            <i-col :span="12">
              <div class="item">
                <div class="name">会议室1</div>
                <div class="num">5</div>
              </div>
            </i-col>
            <i-col :span="12">
              <div class="item">
                <div class="name">会议室1</div>
                <div class="num">5</div>
              </div>
            </i-col>
            <i-col :span="12">
              <div class="item">
                <div class="name">会议室1</div>
                <div class="num">5</div>
              </div>
            </i-col>
        </i-row>
      </i-col>
      <i-col :span="10" :push="4">
        <div class="title">
          今日计划
        </div>
        <i-row class="contents item">
          <i-col :span="6">9:00</i-col>
          <i-col :span="18">办公司1开灯</i-col>
          <i-col :span="18" :push="6">办公司1开灯关闭人体感应</i-col>
        </i-row>
        <i-row class="contents item">
          <i-col :span="6">12:00</i-col>
          <i-col :span="18">办公司1开灯</i-col>
          <i-col :span="18" :push="6">办公司1开灯关闭人体感应</i-col>
        </i-row>
        <i-row class="contents item">
          <i-col :span="6">13:00</i-col>
          <i-col :span="18">办公司1开灯</i-col>
          <i-col :span="18" :push="6">办公司1开灯关闭人体感应</i-col>
        </i-row>
      </i-col>
      <i-col :span="24">

      </i-col>
    </i-row>

    <i-row class="main message" :gutter="16" type="flex">
      <i-col :span="10">
        <div class="title">消息</div>
        <i-row class="contents item">
          <i-col :span="8">2017-11-15 9:00:00</i-col>
          <i-col :span="16">办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯</i-col>
          <i-col :span="8">2017-11-15 9:00:00</i-col>
          <i-col :span="16">办公司1开灯</i-col>
          <i-col :span="8">2017-11-15 9:00:00</i-col>
          <i-col :span="16">办公司1开灯</i-col>
        </i-row>
      </i-col>
    </i-row>
  </div>
</template>
<script type='text/ecmascript-6'>
</script>
<style type='text/css' rel='stylesheet'>
  #overview .main{
    padding: 0 8px;
    background: #efefef;
    margin: 0px !important;
  }
  #overview .main + .main{
    margin-top: 15px !important;
  }
  #overview .main .title{
    font-size: 16px;
    padding-left: 8px;
    font-weight: bold;
    line-height: 45px;
  }
  #overview .main .title .status{
    font-size: 12px;
    color: #777;
  }
  #overview .main .contents{
    /*padding: 0 12px !important;*/
    /*margin: 12px !important;*/
  }
  #overview .main .item{
    background: #fff;
    padding: 8px;
  }
  #overview .ivu-col{
    /*padding-top: 8px !important;*/
    /*padding-bottom: 8px !important;*/
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
</style>
