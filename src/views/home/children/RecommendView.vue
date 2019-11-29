<template>
    <el-row class="recommend">
        <el-col :span="6" v-for="item in recommends" :key="item.id" class="grid-content bg-purple recommend-box">
          <a href="">
            <img :src="item.src" alt="">
            <div>{{item.title}}</div>
          </a>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style>
/*.recommend{*/
  /*display: flex;*/
/*}*/
  .recommend-box{
    /*flex: 1;*/
    text-align: center;
    font-size: 10px;
    padding-bottom: 10px;
  }
.recommend-box img{
  width: 50px;
  height: 50px;

}
</style>
