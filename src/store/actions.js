import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutation-types'
export default{
    addCart(context,payload){
        //同一个商品进行数量添加
        let Oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
        if(Oldproduct){
            // product.count +=1
            context.commit(ADD_COUNT,Oldproduct)
        }else {
            payload.count =1 
            context.commit(ADD_TO_CART,payload)
            
        }
        
    }
}