# webpack-study
webpack 的一些练习

## Source map

使用方式：
```javascript
module.exports = {
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项	
```

### source-map

   在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
  效果：
  ![source-map](https://github.com/Feiyizhan/webpack-study/blob/master/image/.1491559307755.png)

 Chrome浏览器支持该选项，调试时会自动跳转到指定的源文件（未压缩的JS或者CSS等）
 ![Alt text](https://github.com/Feiyizhan/webpack-study/blob/master/image/.1491559404537.png)
![Alt text](https://github.com/Feiyizhan/webpack-study/blob/master/image/.1491559425798.png)


### cheap-module-source-map
在一个单独的文件中生成一个不带列映射的map，不带列映射提高项目构建速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；

### eval-source-map
使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；


### cheap-module-eval-source-map
这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
