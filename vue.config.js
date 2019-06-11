const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

console.log(`当前运行环境为: ` + process.env.NODE_ENV);
console.log(`当前应用名称为：` + process.env.VUE_APP_TITLE);
console.log(`当前运行模式为：` + process.env.VUE_APP_MODE);
console.log(`当前文件路径为：` + process.env.PUBLIC_PATH);
console.log(`当前请求地址为：` + process.env.BASE_URL);

// 配置代理服务器
module.exports = {
  //打包后的资源存放路径
  publicPath: process.env.PUBLIC_PATH,
  // css-loader
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ["*"]
          })
        ]
      },
      sass: {
        data:
          '@import "@/sass/reset.scss";@import "@/sass/functions.scss";@import "@/sass/variables.scss";@import "@/sass/mixins.scss";@import "@/sass/app.scss";'
      }
    }
  },
  // 代理服务器配置
  devServer: {
    port: "8080",
    open: true
  }
};
