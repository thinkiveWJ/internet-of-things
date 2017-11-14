<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    this.$ajax(this, {
      url: 'table/list'
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<style type="text/css">
</style>
