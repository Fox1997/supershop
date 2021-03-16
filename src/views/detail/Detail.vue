<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll"
    :probe-type="3" 
     @scroll="contentScroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goodsInfo"/>
    <detail-shop-info :shop="shopInfo"/>
    <detail-img-info :detail-info=" detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info ref="params" :param-info="itemParams"></detail-params-info>
    <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
    <goods-list ref="recommend" :goods="recommends"></goods-list>
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

import {debounce} from "common/utils"
import {itemListenerMixin} from "common/mixin"

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
            recommends:[],
            themeTopY:[],
            getThemeTopY:null,
            currentIndex:0
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
        //      this.$nextTick(() =>{
        //          //等待渲染结果出来。然后获取offsetTop，进行跳转，但是图片未加载完
        //     this.themeTopY = []
        //     this.themeTopY.push(0);
        //     this.themeTopY.push(this.$refs.params.$el.offsetTop);
        //     this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        //     console.log(this.themeTopY);
        // }) 
        })
        //取出推荐数据
        getRecommend().then(res =>{
            // console.log(res);
            this.recommends = res.data.list
        })
        //给getThemeTopY赋值,防抖
        this.getThemeTopY = debounce(()=>{
            this.themeTopY = []
            this.themeTopY.push(0);
            this.themeTopY.push(this.$refs.params.$el.offsetTop-40);
            this.themeTopY.push(this.$refs.comment.$el.offsetTop-40);
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop-40)
            console.log(this.themeTopY);
        })
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh();
            this.getThemeTopY()
        },
        //点击上方的（商品，参数，评论，推荐）进行展示
        titleClick(index){
          this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100)
        },
        //滚动页面将内容和上方（商品，参数，评论，推荐）进行对照
        contentScroll(position){
           const positionY= -position.y;
           for(let i= 0;i< this.themeTopY.length;i++){
               //i 是一个字符串
            //    parseInt(i)
               if(this.currentIndex !== i &&(i<this.themeTopY.length-1 && positionY>= this.themeTopY[i]&&positionY < this.themeTopY[i+1]) )
               {
                   this.currentIndex = i
                //    console.log(this.currentIndex);
                  this.$refs.nav.currentIndex =this.currentIndex
               }
               else if(this.currentIndex !== i && (i==this.themeTopY.length-1 && positionY>= this.themeTopY[i])){
                    this.currentIndex =i
                    this.$refs.nav.currentIndex =this.currentIndex
                //    console.log(this.currentIndex);
               }
           }
        }
    },
    mounted(){   
        
    },
    // updated(){
    //     this.themeTopY = []
    //     this.themeTopY.push(0);
    //     this.themeTopY.push(this.$refs.params.$el.offsetTop);
    //     this.themeTopY.push(this.$refs.comment.$el.offsetTop);
    //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    //     console.log(this.themeTopY);
    // },
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