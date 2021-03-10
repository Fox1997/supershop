<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props: {
       path:String,
       activeColor:{
         type:String,
         default:'red'  
       }
    },
    data() {
        return{
            // isActive:true,
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor} : {} 
        }
    },
    methods:{
        itemClick(){
           this.$router.replace(this.path) 
        }
    }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /* 移动端TabBar高度一般是49 */
    height: 49px;
  }
  .tab-bar-item img {
      width: 20px;
      height: 20px;
      margin-top: 3px;
      margin-bottom: 2px;
      vertical-align: middle;
  }
  /* .active {
      color: skyblue;
  } */
</style>