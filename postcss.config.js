module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 100, // 根元素字体大小
        // propList: ['width', 'height']    //只处理 width、height 中的单位，但是这样需要添加很多的属性，一般不建议这样用，推荐在不需要转换的属性使用大写的Px来解决这个问题
        propList: ['*']
      }
    }
  }
  