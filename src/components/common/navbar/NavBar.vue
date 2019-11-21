<template>
  <div class="nav-bar"
  >
    <div class="nav-left">
       <slot name="left"></slot>
    </div>
    <div class="nav-center">
       <slot name="center"></slot>
    </div>
    <div class="nav-right">
       <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 10px 10px  20px rgba(211, 211, 211, 0.5);

}
.nav-left,.nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
  text-align: center;
}
</style>
