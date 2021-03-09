<template>
  <div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
// 没有default导出只能用{}
import {getHomeMultidata} from "network/home"


export default {
    name:"Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return{
       banner:[],
       recommend:[]
      }
    },
    created(){
      getHomeMultidata().then(res =>{
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend= res.data.recommend.list;
      })
    }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: azure;
}
</style>