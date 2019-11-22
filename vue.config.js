module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? '/my-vue-admin/' : "/",
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