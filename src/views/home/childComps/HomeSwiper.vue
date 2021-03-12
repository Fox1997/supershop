<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
      //用于对轮播图加载发送信号控制成1次的flag
      isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('SwiperLoad')
          this.isLoad = true
        }
        
      }
    }
  }
</script>

<style scoped>
</style>