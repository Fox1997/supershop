<template>
  <div class="tab-control">
      <!-- 从home.vue中获取title：{'流行','热卖','精选'}，
      获取处于活跃状态的的index，将index作为参数设置点击事件itemClick -->
      <div v-for="(item,index) in titles" :key="index"
       class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
  
</template>

<script>
export default {
    name:"TabControl",
    props:{
        // 从home中接收titles
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
 .tab-control {
     display: flex;
     text-align: center;
     font-size: 15px;
     height: 40px;
     line-height: 40px;
 }
 .tab-control-item {
     flex: 1;
 }
 .tab-control-item span {
     padding: 5px;
 }
 .active {
     color: var(--color-high-text);
 }
 .active span {
     border-bottom: 2px solid var(--color-tint);
 }
</style>