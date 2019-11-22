<template>
  <el-carousel indicator-position="outside" height="150px">
    <el-carousel-item v-for="item in homeimg" :key="item.id">
     <img :src="item.src" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import {request} from 'network/request'
export default {
  name: "Carousel",
  data() {
    return {};
  },
  props: {
    homeimg:{
      type:Array,
      default(){
        return [ {"id":1,"name":"1","src":"./img/home/aisi.jpg"},
        {"id":2,"name":"2","src":"./img/home/dlam.jpg"},
        {"id":3,"name":"3","src":"./img/home/tianyu.jpg"},
        {"id":4,"name":"4","src":"./img/home/xhr.jpg"}]
      }
    }
  },
  created() {},
  mounted() {

  },
  computed:{
   
  },
  methods: {}
};
</script>

<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
