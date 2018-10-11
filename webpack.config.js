const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

//dep是需要的依赖
let htmlTemp = (plugins) => {
  return {
    template: './index.html',
    filename: plugins[plugins.length - 1] + '.html', // 根据output的path
    hash: true,
    inject: true, // 将脚本放到body下面
    chunks: [...plugins]
  }
}

let cleanOpts = ['dist/js/*.js', 'dist/*.html', 'dist/css/*.css']

var config = {
  entry: {
    index: './src/js/index.js',
    vue: 'vue'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]?[hash]",
          outputPath: "imgs"
        }
      },
      {
        test: /\.(htm|htm)l$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src', 'audio:src'],
            minimize: true
          }
        }
      },
      {
        test:/\.vue$/,  //.vue文件的加载器
        loader:'vue-loader'  //vue-loader会把vue单文件直接转成js
      }
    ]
  },
  resolve: {  //解析模块
    extensions: ['.js', '.vue', '.json'],  //引入路径时，不需写后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')  //用@替换./src: ./src/main => @/main
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vue: { // 抽离第三方插件
          chunks: 'initial',
          test: /node_modules/, // node_modules下的第三方包
          name: "vue", // 打包后的文件名
          minChunks: 2,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin(htmlTemp(['vue', 'index'])),
    //new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "css/style.css"
    }),
    new webpack.ProvidePlugin({
      Vue: "vue"
    }),
    new CopyWebpackPlugin([{
      from: './src/imgs',
      to: 'imgs'
    }]),
    new CleanWebpackPlugin(cleanOpts) // 每次清空dist目录
  ],
  devServer:{
    host: 'localhost',
    port: 8024,
    hot: true,
    open: false
  },
}

module.exports = config