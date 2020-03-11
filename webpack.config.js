//由于webpack是基于node进行构建的，所以，webpack的配置文件中，任何node的语法都支持
var path = require('path')
//在内存中，根据指定的模板页面，生成一份内存中的首页，同事自动把打包好的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')
//当以命令形式运行webpack或webpack-dev-server的时候，工具会发现，我们并没有提供要打包的文件的入口和出口文件，此时，他会检查项目根目录中的配置文件
//，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),//入口文件
    output:{//指定输出选择
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js',
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename:'index.html' //设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
        
    ],
    module:{ //配置所欲第三方loader模块的
        rules:[//第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg|JPG)$/,use: 'url-loader?limit=76311&' },
            //处理图片的loader,limit 给定的值，大于突破按的值会转成base64如果给定的值小于不会转base64
            {test: /\.(ttf|eot|woff|bmp|woff2|svg)$/,use: 'url-loader' },
            {test: /\.js$/,use: 'babel-loader',exclude:/node_modules/ },
            //在配置babel时，要排除node_modules
            {test: /\.vue$/,use: 'vue-loader'}
        ]
    },
    resolve:{
        // alias:{
        //     'vue$':'vue//dist/vue.js'
        // }
    }
}