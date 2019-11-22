<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="rgb(3, 214, 175)">
          <i slot="item-icon" class="item-icon fa fa-home fa-2x"></i>
          <div slot="item-name" class="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="rgb(3, 214, 175)">
          <i slot="item-icon" class="item-icon fa fa-th-large fa-2x"></i>
          <div slot="item-name" class="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/recommend" activeColor="rgb(3, 214, 175)">
          <i slot="item-icon" class="item-icon fa fa-star-o fa-2x"></i>
          <div slot="item-name" class="item-text">推荐</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="rgb(3, 214, 175)">
          <i slot="item-icon" class="item-icon fa fa-shopping-cart fa-2x"></i>
          <div slot="item-name" class="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="rgb(3, 214, 175)">
          <i slot="item-icon" class="item-icon fa fa-user-circle-o fa-2x"></i>
          <div slot="item-name" class="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar"
import TabBarItem from "../common/tabbar/TabBarItem"
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components:{
      TabBar,
      TabBarItem
    }
};
</script>

<style>

</style>
