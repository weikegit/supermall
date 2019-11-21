module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'network':'@/network',
        'components':'@/components',
        'views':'@/views',
      }
    },
    // devServer:{
    //   overlay:{
    //     warnings:false,
    //     errors:false
    //   },
    //   lintOnSave:false
    // }
  }
}