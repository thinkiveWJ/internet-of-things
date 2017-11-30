<template>
  <div id="overview">
    <!--<div class="welcome">-->
      <!--欢迎回来，Darren-->
    <!--</div>-->

    <div v-for="(item, index) in networkList" :key="index">
      <div class="title" v-cloak="">
       {{item['networkName']}}  <span class="status">{{item['status']}}</span>
      </div>
      <i-row class="main" :gutter="16" type="flex">
        <i-col :span="6" offset="3">
          <router-link :to="{path: 'gateway'}">
            <i-row type="flex" align="middle" class="item">
              <i-col :span="8">
                <img v-lazy="'/static/images/web-gateway.png'" alt="网关">
              </i-col>
              <i-col :span="16" class="text-center">
                <div class="num" v-cloak="">{{item['gatewayCount']}}</div>
                <div class="name">网关</div>
              </i-col>
            </i-row>
          </router-link>
        </i-col>
        <i-col :span="6">
          <router-link :to="{path: 'equipment'}">
            <i-row type="flex" align="middle" class="item">
              <i-col :span="8">
                <img v-lazy="'/static/images/web-eauipment.png'" alt="设备">
              </i-col>
              <i-col :span="16" class="text-center">
                <div class="num" v-cloak="">{{item['deviceCount']}}</div>
                <div class="name">设备</div>
              </i-col>
            </i-row>
          </router-link>
        </i-col>
        <i-col :span="6">
          <router-link :to="{path: 'grouping'}">
            <i-row type="flex" align="middle" class="item">
              <i-col :span="8">
                <img v-lazy="'/static/images/web-Grouping.png'" alt="分组">
              </i-col>
              <i-col :span="16" class="text-center">
                <div class="num" v-cloak="">{{item['groupCount']}}</div>
                <div class="name">分组</div>
              </i-col>
            </i-row>
          </router-link>
        </i-col>
        <!--<i-col :span="6">-->
          <!--<router-link :to="{path: ''}">-->
            <!--<i-row type="flex" align="middle" class="item">-->
              <!--<i-col :span="8">-->
                <!--<img v-lazy="'/static/images/finance.png'" alt="">-->
              <!--</i-col>-->
              <!--<i-col :span="16" class="text-center">-->
                <!--<div class="num">999</div>-->
                <!--<div class="name">办公司</div>-->
              <!--</i-col>-->
            <!--</i-row>-->
          <!--</router-link>-->
        <!--</i-col>-->
      </i-row>
    </div>

    <i-row class="main" :gutter="16" type="flex">
      <i-col :span="12" class="text-left">
        <div class="plan">
          <div class="plan-title">今日计划</div>
          <div class="plan-item clearfix">
            <div class="plan-time left">09:00</div>
            <div class="plan-details left">
              <span class="icon icon01"></span>
              <div>办公司1开灯</div>
              <div>办公司2开灯</div>
            </div>
          </div>
          <div class="plan-item clearfix last">
            <div class="plan-time left">09:00</div>
            <div class="plan-details left">
              <span class="icon icon02"></span>
              <div>办公司1开灯</div>
              <div>办公司2开灯</div>
            </div>
          </div>
        </div>
      </i-col>
    </i-row>

    <i-row class="main message" :gutter="16" type="flex">
      <i-col :span="12">
        <div class="message-title clearfix">消息</div>
        <div class="message-item">
          <div class="message-time">2017-11-15 9:00:00</div>
          <div class="message-details">办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯</div>
        </div>
        <div class="message-item">
          <div class="message-time">2017-11-15 9:00:00</div>
          <div class="message-details">办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯</div>
        </div>
        <div class="message-item">
          <div class="message-time">2017-11-15 9:00:00</div>
          <div class="message-details">办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯办公司1开灯</div>
        </div>
      </i-col>
    </i-row>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        networkList: []
      }
    },
    created () {
      this.$ajax(this, {
        url: '/network/queryNetwork.do',
        data: {}
      }, (result) => {
        result['data'] = result['data'] ? result['data'] : {'networkList': []}
        this.networkList = result['data']['networkList']
        this.networkList = this.networkList ? this.networkList : []
      })
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #overview .main{
    padding: 0 8px;
    margin: 0px !important;
  }
  #overview .main a{
    display: block;
    color: #333;
  }
  /*#overview .main + .main{*/
    /*margin-top: 15px !important;*/
  /*}*/
  #overview .title,
  #overview .message .message-title{
    background:rgba(232,236,241,1);
    font-size: 16px;
    padding-left: 16px;
    font-weight: bold;
    line-height: 61px;
  }
  #overview .title .status{
    font-size: 12px;
    color: #777;
    padding-left: 8px;
  }
  #overview .main .item{
    background:rgba(255,239,238,1);
    padding: 8px;
    border-radius: 6px ;
  }
  #overview .main .item .num{
    font-size: 24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  #overview .main .item .name{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  #overview .ivu-col{
    /*padding-top: 8px !important;*/
    /*padding-bottom: 8px !important;*/
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  #overview .plan .plan-title{
    font-size: 16px;
    margin: 30px 0;
  }
  #overview .plan .plan-item,
  #overview .message .message-item{
    padding-left: 32px;
    padding-right: 32px;
  }
  #overview .plan .plan-item .plan-time{
    padding-right: 40px;
    font-size: 12px;
  }
  #overview .plan .plan-item .plan-details{
    position: relative;
    padding-left: 40px;
    border-left: 1px solid #ddd;
  }
  #overview .plan .plan-item.last .plan-details{
    border-left: none;
  }
  #overview .plan .plan-item + .plan-item .plan-time,
  #overview .plan .plan-item + .plan-item .plan-details{
    padding-top: 15px;
  }
  #overview .plan .plan-item .plan-details .icon{
    position: absolute;
    top: 0px;
    left: -6px;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    background: url("/static/images/time-1.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  #overview .plan .plan-item .plan-details .icon02{
    background: url("/static/images/time-2.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  #overview .plan .plan-item + .plan-item .plan-details .icon{
    top: 15px;
  }
  #overview .message .message-title{
    margin-left: -16px;
    margin-bottom: 30px;
  }
  #overview .message .message-icon{
    padding-right: 16px;
    color: #777;
    line-height: 61px;
    font-size: 30px;
  }
  #overview .message .message-item{
    margin-top: 15px;
  }
  #overview .message .message-item .message-time{
    font-size: 12px;
    color:rgba(153,153,153,1);
    margin-bottom: 8px;
  }
</style>
