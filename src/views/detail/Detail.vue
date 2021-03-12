<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="scroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goodsInfo"/>
    <detail-shop-info :shop="shopInfo"/>
    <detail-img-info :detail-info=" detailInfo" @imageLoad="imageLoad"/>
    </scroll>   
  </div>

</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail,Goods} from "network/detail"
export default {
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailShopInfo,
      DetailImgInfo
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
            shopInfo:{},
            detailInfo:{}
        }
    },
    created(){
        // 从路由获取iid
        this.iid = this.$route.params.iid
        // 根据iid请求详细数据
        getDetail(this.iid).then(res => {
            // console.log(res);
            const data = res.result
            //取出轮播图数据
            this.topImages=data.itemInfo.topImages
            // 创建商品对象
            this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //取出商铺信息
            this.shopInfo = data.shopInfo;
            //取出详情信息
            this.detailInfo = data.detailInfo;
            console.log(data.detailInfo.detailImage[0].list);
        })
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
.detail{
   height: 100vh;
   background-color: #fff; 
   position: relative;
   z-index: 1;
}
.content{
    background-color: #fff;
    height: calc(100% - 44px);
}
</style>