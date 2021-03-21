import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//安装插件
Vue.use(Vuex)

const state = {
    cartList:[]
}
//常见store对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
    // mutations:{
    //    addcount (state,payload){
    //         payload.count++
    //    },
    //    addTocart(state,payload){
    //         state.cartList.push(payload)
    //    }
    // },
    // actions:{
    //     addCart(context,payload){
    //         //同一个商品进行数量添加
    //         let Oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
    //         if(Oldproduct){
    //             // product.count +=1
    //             context.commit('addcount',Oldproduct)
    //         }else {
    //             payload.count =1 
    //             context.commit('addTocart',payload)
                
    //         }
            
    //     }
    // },
})

//挂载
export default store