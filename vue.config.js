module.exports ={
    configureWebpack:{
        resolve:{
            // 配置文件夹别名
            alias:{
                // '@':'src'
                'assets':'@/assets',
                'network':'@/network',
                'components':'@/components',
                'common':'@/common',
                'views':'@/views',

            }
        }
    }
}