<template>
  <div class="goods">
      <!-- 对接受的good数据进行遍历，用goods-list-item展示,
      遍历goods将每一单独的商品信息item传给子组件goodslistitem -->
      <goods-list-item v-for="(item,index) in goods" 
      :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:"GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        // 接收来自home的goods数据，goods=goods[type].list
        goods:{
            type: Array,
            dafault(){
                return []
            }
        }
    }

}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }


</style>