module.exports = {
    plugins: {
      autoprefixer:{},
      "postcss-px-to-viewport":{
          viewportWidth:375,//视窗的宽度
          viewportHeight:667,//视窗的高度
          unitPrecision:5,//指定px转化成视窗单位值得小数位数
          viewportUnit:'vw',//指定转化成视窗单位
          selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转化的类
          minPixelValue:1,//小于或等于1px，不转化成视窗单位
          mediaQuery:false//允许在媒体查询中转化px
      }
    }
}