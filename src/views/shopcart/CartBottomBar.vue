<template>
  <div class="bottom-bar">
      <div class="check-content">
        <check-button :is-checked="isSelectAll" 
        class="check-button"
        @click.native="checkAll"/>
        <span>全选</span>
      </div>
    <div class="price">
        合计：{{totalPrice}}
    </div>
    <div class="cal">
     去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
 name:"CartBottomBar",
 components:{
     CheckButton
 },
 methods:{
     checkAll(){
         if(this.isSelectAll){
             //全部选中，修改成全部不选中
             this.cartList.forEach(item => item.checked = false)
         }else{
             //全部不选中或者部分未选中，修改成全部选中
             this.cartList.forEach(item => item.checked = true)
         }
     }
 },
 computed:{
     ...mapGetters(['cartList']),
     totalPrice(){
        return '￥'+this.cartList.filter(item => {
            return item.checked
        }) .reduce((preValue,item) => {
            return preValue+item.price * item.count
        },0)
     },
     checkLength(){
         return this.cartList.filter(item => item.checked).length
     },
     isSelectAll(){
        // return   !(this.cartList.filter(item => !item.checked).length)
        if(this.cartList.length === 0)
        {
            return false
        }else{
            return !this.cartList.find(item =>!item.checked)
        }
        
     }
 }
}
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    position: relative;
    line-height: 40px;
    background-color: #eee;
    display: flex;
}
.check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
}
.check-button {
    widows: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
}
.price {
    margin-left: 30px;
    flex: 1;
}
.cal{
   width: 80px; 
   background-color: palevioletred;
   text-align: center ;
   
}
</style>