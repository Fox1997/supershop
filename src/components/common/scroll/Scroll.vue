<template>
   <!-- ref 可以明确拿到某个组件，避免class的重名，
   如果ref绑定在组件上，通过this.$refs.ref_name拿到组件对象，
    如果ref绑定在元素上，通过this.$refs.ref_name拿到元素对象
    -->
  <div class="wrapper" ref="wrapper">
      <div class="content">
            <slot></slot>
      </div>     
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:"Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted(){
        // document.querySelector('.wrapper')会引发出现多个class="wrapper"时，
        //  拿出的class错误
        // this.scroll=new BScroll(document.querySelector('.wrapper'),{
        // })
        this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        // 0,1都不能监听滚动，2不能监听惯性滚动
        pullUpLoad:this.pullUpLoad,
        click: true,
        //上拉加载更多
        })
        this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })
        this.scroll.on('pullingUp',() =>{
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
      })
    }
}
</script> 

<style scoped>

</style>