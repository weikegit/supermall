<template>
  <div id="app">
   <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>

    </div>
   
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue"
export default {
  name: 'app',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";

</style>
