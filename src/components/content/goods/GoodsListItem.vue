<template>
  <div class="goods-item" @click="itemClick">
      <!-- @load监听图片是否加载完成 -->
      <img v-lazy="showImage" alt="" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect"> {{goodsItem.cfav}} </span>
      </div>
  </div>
  
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        // 接收来自父组件的goods-item 
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
        imgLoad(){
          // if(this.$route.path.indexOf('/home')){
          //   this.$bus.$emit('itemImageLoad')
          // }else if(this.$route.path.indexOf('/detail')){
          //   this.$bus.$emit('detailItemImgLoad')
          // }   
          this.$bus.$emit('itemImageLoad')
        },
        itemClick(){
          //跳转到详情页,将每个图片的id传过去，存在路由之中
          this.$router.push('/detail/'+this.goodsItem.iid)
        }
    }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>