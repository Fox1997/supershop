import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    data(){
        return{
            itemImgListener: null
        }
    },
    mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener=() =>{
        refresh()
        }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
        }
}
export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            isShowBackTop: false
        }
    },
    methods:{
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,300)
          },
          listenShowBackTop(position){
            this.isShowBackTop = (-position.y) >1000
          }
    }
}