<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  /* box-shadow: 0 -2px 2px #cccccc; */
   box-shadow: 0px -10px  20px rgba(211, 211, 211, 0.5);
}
</style>
