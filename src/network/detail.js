import {request} from "./request";

export function getDetail(iid) {
   return request({
       url:'/detail',
       params:{
           iid
       }
   }) 
}
export function getRecommend(){
    return request({
        url:'/recommend',
    })
}

export class Goods {
    constructor(itemInfo,columns,service){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = service;
        this.realPrice = itemInfo.lowNowPrice;
    }
}
// export class GoodsParam{
//     constructor (info,rule){
//         this.image = info.images ? info.images[0]:'';
//         this.infos = info.set;
//         this.sizes = rule.tables;
//     }
// }

// export class Shop {
//     constructor(shopInfo){

//     }
// }