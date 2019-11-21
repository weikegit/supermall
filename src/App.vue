<template>
  <div id="app">
   <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
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
