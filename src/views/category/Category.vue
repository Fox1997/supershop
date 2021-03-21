<template>
<div class="category">
  <nav-bar class="nav-bar">
    <div slot="center">分类</div>
  </nav-bar>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"Category",
    components:{
      NavBar
    }
}
</script>



//     data(){
//       return{
//         sc:null
//       }
//     },
//     components:{

//     },
//     mounted(){
//       this.sc=new BScroll('.wrapper',{
//         probeType:3,
//         // 0,1都不能监听滚动，2不能监听惯性滚动
//         pullUpLoad:true
//         //上拉加载更多

//       })
//       this.sc.on('scroll',(position) => {
//         console.log(position);
//       })
//       this.sc.on('pullingUp',() =>{
//         console.log('上拉加载更多');
//       })
//     }
// }
// </script>

<style scoped>
/* .wrapper {
  height: 100px;
  background-color: cadetblue;
  overflow: hidden;

} */
</style>