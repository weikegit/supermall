<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    //传入path路径
    path: String,
    // 传入选中颜色
    activeColor: {
      type: String,
      default: "rgb(0, 160, 133)"
    }
  },
  created() {},
  mounted() {},
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = false
      // /home -> item1(/profile) = false
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

}
.item-icon {
  margin-top: 3px;
}
/* .item-text {
  font-size: 14px;
} */
</style>
