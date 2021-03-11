<template>
<div class="wrapper">
  <ul class="content">
    <li >分类1 </li> 
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li> 
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>
    <li >分类1 </li>

  </ul>
</div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Category",
    data(){
      return{
        sc:null
      }
    },
    components:{

    },
    mounted(){
      this.sc=new BScroll('.wrapper',{
        probeType:3,
        // 0,1都不能监听滚动，2不能监听惯性滚动
        pullUpLoad:true
        //上拉加载更多

      })
      this.sc.on('scroll',(position) => {
        console.log(position);
      })
      this.sc.on('pullingUp',() =>{
        console.log('上拉加载更多');
      })
    }
}
</script>

<style scoped>
.wrapper {
  height: 100px;
  background-color: cadetblue;
  overflow: hidden;

}
</style>