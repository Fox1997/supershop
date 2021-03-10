<template>
  <div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banner="banner"></home-swiper>
  <recommend-view :recommend="recommend"></recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>  
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

// 没有default导出只能用{}
import {getHomeMultidata} from "network/home"


export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      // SwiperItem,
      RecommendView,
      FeatureView,
      TabControl
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
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    /* 吸顶功能 */
    top: 44px;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>