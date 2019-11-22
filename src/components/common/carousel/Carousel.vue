<template>
  <div>
    <el-carousel indicator-position="outside" height="150px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.src" alt="" srcset="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import {request} from 'network/request'
export default {
  name: "Carousel",
  data() {
    return {};
  },
  props:{
    imgList:{
      type:String,
      default:function(){
        return [{"id":1,"name":"1","src":require("assets/img/home/aisi.jpg")},
        {"id":2,"name":"2","src":require("assets/img/home/dlam.jpg")},
        {"id":3,"name":"3","src":require("assets/img/home/tianyu.jpg")},
        {"id":4,"name":"4","src":require("assets/img/home/xhr.jpg")}]
      }
    }
},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style>
.el-carousel__item img{
  width: 100%;
  height: 100%;
}
</style>
