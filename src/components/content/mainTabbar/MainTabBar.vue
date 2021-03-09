<template>
   <tab-bar>
      <!-- <tab-bar-item path='/home' activeColor="red"> -->
      <tab-bar-item path='/home'> 
        <img slot="item-icon" src="~assets/image/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~assets/image/tabbar/class.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/class_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcar'>
        <img slot="item-icon" src="~assets/image/tabbar/shopcar.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/shopcar_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mine'>
        <img slot="item-icon" src="~assets/image/tabbar/mine.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/mine_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }

}
</script>

<style>

</style>