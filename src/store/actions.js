import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutation-types'
export default{
    addCart(context,payload){
        return new Promise((resolve,reject) => {
           //同一个商品进行数量添加
        let Oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
        if(Oldproduct){
            // product.count +=1
            context.commit(ADD_COUNT,Oldproduct)
            resolve('当前商品数量+1')
        }else {
            payload.count =1 
            context.commit(ADD_TO_CART,payload)
            resolve('添加了新的商品')
            
        }
        })
        
    }
}