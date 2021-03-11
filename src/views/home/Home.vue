<template>
  <div id="home" class="wrapper">
  <nav-bar class="home-nav">
  <div slot="center">购物街</div>
  </nav-bar>
  <!-- 导航栏 -->
  <scroll class="content" 
  ref="scroll" :probe-type="3" 
  @scroll="contentScroll"
  :pull-up-load="true">
  <home-swiper :banner="banner"/>
  <!-- 四个圈圈 -->
  <recommend-view :recommend="recommend"/>
  <!-- 本周流行 -->
  <feature-view/>
  <!-- 商品类别选择栏 接收tabControl传来的tabClick和index，
  根据index（0,1,2）来与三种类型进行绑定 -->
  <tab-control class="tab-control" :titles="['流行','新款','精选']"
  @tabClick="tabClick"/>
  <!-- 不同类别商品列表 ，将获取的数据传给Good-list组件-->
  <goods-list :goods="showGoods"/>
  </scroll>
  <!-- 组件不能直接通过@click监听点击事件,用@click.native监听 -->
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
 
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
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
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
       banner:[],
       recommend:[],
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
       },
       currentType:'pop',
       isShowBackTop: false
      }
    },
    computed:{
      showGoods(){
        // 根据不同类别获取商品列表
        return this.goods[this.currentType].list
      }
    },
    created(){
      //请求首页显示数据
      this.getHomeMultidata()
      // 请求首页商品数据，传入不同的type来获取数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      // 事件监听相关方法
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break 
        }
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0)
      },
      // 返回的隐藏显示
      contentScroll(position){
        this.isShowBackTop = (-position.y) >1000
      },
      // 网络请求相关方法
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
        // 将数据放入goods[type]中，页码累加
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
      }   

    }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative; 
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