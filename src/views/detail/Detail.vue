<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="scroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goodsInfo"/>
    <detail-shop-info :shop="shopInfo"/>
    <detail-img-info :detail-info=" detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info :param-info="itemParams"></detail-params-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"></goods-list>
    </scroll>   
  </div>

</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {itemListenerMixin} from "common/mixin"
// import {debounce} from 'common/utils'
import {getDetail,Goods,getRecommend} from "network/detail"
export default {
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailShopInfo,
      DetailImgInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList
    },
    mixins:[itemListenerMixin],
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
            shopInfo:{},
            detailInfo:{},
            itemParams:{},
            commentInfo:{},
            recommends:[]
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
           // console.log(data.detailInfo.detailImage[0].list);
            //取出参数信息
            this.itemParams = data.itemParams;
            //取出评论信息
            if(data.rate.cRate !==0)
            {
                this.commentInfo = data.rate.list[0];
            }   
        })
        //取出推荐数据
        getRecommend().then(res =>{
            // console.log(res);
            this.recommends = res.data.list
        })
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    },
    mounted(){      
    },
    destroyed(){
        this.$bus.$off('itemImageLoad',this.itemImgListener)
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