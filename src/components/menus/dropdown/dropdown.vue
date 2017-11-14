<template>
  <i-dropdown id="dropdown">
    <a href="javascript:void(0)">
      下拉菜单
      <i-icon type="arrow-down-b"></i-icon>
    </a>
    <i-dropdown-menu slot="list">
      <i-dropdown-item><a href="">驴打滚</a></i-dropdown-item>
    </i-dropdown-menu>
  </i-dropdown>
</template>
<script type='text/ecmascript-6'>
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
