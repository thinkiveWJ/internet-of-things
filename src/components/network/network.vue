<template>
  <div id="network">
    <div class="welcome">
      欢迎回来，Darren
    </div>
    <div class="main" v-for="(item, index) in result" :key="index">
        <div class="title" v-cloak>{{item['name']}}</div>
        <i-row class="contents" :gutter="16" type="flex">
          <i-col :span="8" v-for="(ite, ind) in item['list']" :key="ind">
            <router-link :to="item['link']">
              <i-row justify="center" align="middle" class="item">
                <i-col :span="8">
                  <img v-lazy="ite['img']" alt="">
                </i-col>
                <i-col :span="16">
                  <div class="name" v-cloak>{{ite['name']}}</div>
                  <div class="num" v-cloak>{{ite['num']}}</div>
                </i-col>
              </i-row>
            </router-link>
          </i-col>
        </i-row>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        result: [
          {
            name: '网络1',
            link: {
              path: ''
            },
            list: [
              {
                img: '/static/images/test.png',
                name: '网关',
                num: 1
              },
              {
                img: '/static/images/test.png',
                name: '分组',
                num: 9
              },
              {
                img: '/static/images/test.png',
                name: '设备',
                num: 1
              }
            ]
          },
          {
            name: '网络2',
            link: {
              path: ''
            },
            list: [
              {
                img: '/static/images/test.png',
                name: '网关',
                num: 1
              },
              {
                img: '/static/images/test.png',
                name: '分组',
                num: 9
              },
              {
                img: '/static/images/test.png',
                name: '设备',
                num: 1
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #network .main{
    padding: 8px;
    background: #efefef;
    margin: 0px !important;
  }
  #network .main + .main{
    margin-top: 15px !important;
  }
  #network .main .title{
    font-size: 16px;
    padding-left: 8px;
    font-weight: bold;
    line-height: 45px;
  }
  #network .main .item {
    background: #fff;
    padding: 8px;
    vertical-align: middle;
  }
  #network .main .item img{
    width: 80px;
    height: 80px;
  }
  #network .main .item .name,
  #network .main .item .num{
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }
  #network .main .contents{
    text-align: center;
  }
  #network a{
    color: #333;
  }
</style>
