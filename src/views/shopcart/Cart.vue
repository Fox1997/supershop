<template>
<div class="cart">
  <!-- 导航  -->
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <!-- 商品列表 -->
  <cart-list></cart-list>

  <!-- 底部汇总 -->
 <cart-bottom-bar></cart-bottom-bar>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './CartList'
import CartBottomBar from './CartBottomBar'

import {mapGetters} from 'vuex'

export default {
    name:"Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar

    },
    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      // 用法一
      ...mapGetters(['cartLength'])
      //用法二
      // ...mapGetters({
      //   length:'cartLength',
      //   list:'cartList'
      // })
    }
}
</script>

<style scoped>
 .nav-bar{
   background-color: var(--color-tint);
   color: #fff;
   /* font-weight: 700; */

 }
  .cart {
     height: 100vh;
 }
</style>