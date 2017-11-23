```javascript
├── dist               // 编译之后输出文件的目录
├── src                // 应用逻辑代码存放区域
│   ├── lib            // 存放npm上找不到的第三方库
│   │   ├── backbone.js
│   │   └── underscore.js
│   ├── static         // 存放静态资源
│   │   └── logo.png
│   ├── app.html       // 部件模板
│   ├── app.js         // 部件代码
│   └── app.less       // 部件样式
├── index.html         // 应用首页模板
├── index.js           // 应用入口
├── package.json       // 工程配置文件
└── webpack.config.js  // webpack配置文件
```

```javascript
npm install --save less
// less模块的加载器，配合下面css-loader 和 style-loader
npm install --save less-loader
npm install --save css-loader
npm install --save style-loader  // 以上两个插件的根基
// 用来处理 图片 字体 的模块，是由下面file-loader封装的。可自定义文件名
npm install --save url-loader
npm install --save file-loader  
npm install --save html-loader   // 加载html文件用的
npm install --save text-loader   // 加载纯文本用的
npm install --save html-webpack-plugin        // 生成html文件插件
npm install --save extract-text-webpack-plugin // 单独提取css文件插件
npm install --save webpack                    // 提供webpack对象
npm install --save webpack-dev-server // webpack-server开发包，方便调试
npm install --save vue
```