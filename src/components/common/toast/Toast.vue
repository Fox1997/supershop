<template>
  <div >
    <div v-show="isShow" class="toast">{{message}} </div>
  </div>
</template>

<script>
export default {
 name:"Toast",
 props:{
    //  message:{
    //      type:String,
    //      default:''
    //  },
    //  show:{
    //      type:Boolean,
    //      default:false
    //  }
 },
 data(){
     return{
         message:'',
         isShow:false
     }
 },
 methods:{
     show(message,time){
         //默认时间2秒
         time = time || 2000
         this.isShow = true;
         this.message = message;
         setTimeout(()=>{
           this.isShow = false;
           this.message = ''
       },time)
     }
 }
}
</script>

<style scoped>
 .toast{
   position:fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   padding: 8px 10px;
   color: #fff;
   background-color: rgba(0,0,0,.7); 
    z-index:999 
 }
</style>