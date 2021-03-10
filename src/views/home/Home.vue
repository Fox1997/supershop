<template>
  <div id="home" class="wrapper">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banner="banner"></home-swiper>
  <recommend-view :recommend="recommend"></recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['流行','新款','精选']"
  @tabClick="tabClick"></tab-control>  
  <goods-list :goods="goods['pop'].list"/>

  </div>
 
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
// import GoodsListItem from 'components/content/goods/GoodListItem'
// 没有default导出只能用{},network
import { getHomeMultidata, getHomeGoods} from "network/home"

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      // SwiperItem,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return{
       banner:[],
       recommend:[],
       goods:{
         'pop':{page:0,list:[]},
         'news':{page:0,list:[]},
         'sell':{page:0,list:[]}
       }
      }
    },
    created(){
      //请求首页显示数据
      this.getHomeMultidata()
      // 请求首页商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend= res.data.recommend.list;
      })
      },
      getHomeGoods(type){
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
      }   

    }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
       /* height: 100vh;
    position: relative; */
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