<template>
  <div class="home">
    <nav-bar>
      <div slot="center" class="shop-name">购物街</div>
    </nav-bar>
    <h3>我是首页</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "components/common/navbar/NavBar"
import {request} from 'network/request'
export default {
  name: 'home',
  components: {
   NavBar
  }
}
//ajax请求
request({
  url:'/json/homedata.json',
  method:"GET"
}).then(res => {
  console.log(res)
}).catch(err =>{
  console.log(err)
})
</script>
<style>
.shop-name{
  font-weight: bold;
}
</style>
