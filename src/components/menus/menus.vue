<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}" id="menus">
    <i-row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <i-menu :active-name="activeMenu" theme="dark" width="auto">
          <div class="layout-logo-left"></div>
          <i-menu-item :name="item['link']['path']" v-for="(item, index) in menus" :key="index">
            <router-link :to="item['link']">
              <i-icon :type="item['icon']" :size="iconSize"></i-icon>
              <span class="layout-text" v-cloak>{{item['name']}}</span>
            </router-link>
          </i-menu-item>
          <!--<i-menu-item name="1">-->
            <!--<router-link :to="{path: '/logined/overview'}">-->
              <!--<i-icon type="ios-navigate" :size="iconSize"></i-icon>-->
              <!--<span class="layout-text">总览</span>-->
            <!--</router-link>-->
          <!--</i-menu-item>-->
          <!--<i-menu-item name="2">-->
            <!--<router-link :to="{path: '/logined/overview2'}">-->
              <!--<i-icon type="ios-keypad" :size="iconSize"></i-icon>-->
              <!--<span class="layout-text">Option 2</span>-->
            <!--</router-link>-->
          <!--</i-menu-item>-->
        </i-menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <i-icon type="navicon" size="32"></i-icon>
          </i-button>
          <div class="right logout">
            <i-avatar icon="person"/>
            <v-dropdown></v-dropdown>
          </div>
          <div class="clearfix"></div>
        </div>
        <!--<div class="layout-breadcrumb">-->
          <!--<i-breadcrumb>-->
            <!--<i-breadcrumb-item href="#">网络管理</i-breadcrumb-item>-->
            <!--<i-breadcrumb-item href="#">网关管理</i-breadcrumb-item>-->
            <!--<i-breadcrumb-item>设备管理</i-breadcrumb-item>-->
          <!--</i-breadcrumb>-->
        <!--</div>-->
        <div class="layout-content"  id="layout-content">
          <router-view></router-view>
          <!--<div class="layout-content-main">Content</div>-->
        </div>
        <!--<div class="layout-copy">-->
          <!--2011-2016 &copy; TalkingData-->
        <!--</div>-->
      </i-col>
    </i-row>
  </div>
</template>
<script type='text/ecmascript-6'>
  import dropdown from './dropdown/dropdown.vue'
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        activeMenu: 'overview',
        menus: [
          {
            name: '总览',
            link: {
              path: 'overview'
            },
            icon: 'Overview-icon'
          },
          {
            name: '网络',
            link: {
              path: 'internet'
            },
            icon: 'net-icon'
          }
        ]
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      },
      initActiveMenu () {
        let path = this.$route.path
        path = path ? path.split('/') : ''
        path = path ? path[path.length - 1] : ''
        path = path === 'equipment' || path === 'grouping' || path === 'gateway' || path === 'power' ? 'internet' : path
        this.activeMenu = path
      }
    },
    components: {
      'v-dropdown': dropdown
    },
    created () {
      this.initActiveMenu()
    },
    watch: {
      '$route' () {
        this.initActiveMenu()
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  .layout{
    /*border: 1px solid #d7dde4;*/
    /*background: #efefef;*/
    /*position: relative;*/
    /*border-radius: 4px;*/
    overflow: hidden;
    height: 100%;
  }
  /*.layout-breadcrumb{*/
    /*padding: 10px 15px 0;*/
  /*}*/
  .layout-content{
    /*min-height: 200px;*/
    padding: 15px;
    /*overflow: hidden;*/
    background: #fff;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    /*border-radius: 4px;*/
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: rgba(37,40,49,1);
    /*position: absolute;*/
    top: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
  }
  .layout-header{
    height: 60px;
    background: #efefef;
    /*background: #fff;*/
    /*box-shadow: 0 1px 1px rgba(0,0,0,.1);*/
  }
  .layout-logo-left{
    /*width: 90%;*/
    height: 30px;
    /*background: #5b6270;*/
    /*border-radius: 3px;*/
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
  #menus .logout{
    margin:15px 80px 15px 15px;
  }
  #menus .ivu-menu-item{
    padding: 0 !important;
  }
  #menus .ivu-menu-item a{
    padding: 14px 24px;
    color: rgba(255,255,255,.7);
    display: block;
  }
  #menus .ivu-menu-item-active.ivu-menu-item-selected a{
    color: #2d8cf0;
  }
  .ivu-icon-Overview-icon{
    background: url("/static/images/Overview.png") 0 0 no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .ivu-icon-net-icon{
    background: url("/static/images/net.png") 0 0 no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .ivu-col-span-5 .ivu-icon{
    width: 16px;
    height: 16px;
  }
  .ivu-col-span-2 .ivu-icon{
    width: 24px;
    height: 24px;
  }
</style>
