<template>
  <div class="home">
    <nav-bar>
      <div slot="left">
        <div class="fenlei" @click="fenleiClick">
          <i class="fa fa-th-large fa-2x"></i>
          <div class="text">分类</div>
        </div>
      </div>
      <div slot="center" class="shop-name">
        <div>
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </nav-bar>
    <home-banner :homeimg="imgList">
      
    </home-banner>
    <!-- <el-carousel indicator-position="outside" height="150px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <a href="">
        <img :src="item.src" alt srcset />
        </a> 
      </el-carousel-item>
    </el-carousel> -->
    <h3>我是首页</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "components/common/navbar/NavBar";
import { getHomeCarousel } from "network/home";
import HomeBanner from 'components/common/carousel/Carousel';
export default {
  name: "home",
  components: {
    NavBar,
    HomeBanner
    // CarOusel
  },
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    fenleiClick() {
      this.$router.push("/category");
    }
  },
  created() {
    getHomeCarousel().then(res =>{
      console.log(res);
      this.imgList = res.data.home.img
    })
  },
  mounted() {
    
  },
  computed: {}
};

</script>
<style>
.shop-name {
  font-weight: bold;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.fenlei {
  padding: 5px 0 0 5px;
  line-height: normal;
  font-size: 12px;
}
.fenlei .text {
  margin-top: -3px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input__inner{
  height: 35px;
  line-height: 35px;
}
.el-input-group__append{               
  /* background: rgb(0, 115, 107); */
    background: var(--color-text);
  color: #fff;
}
</style>
