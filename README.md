### 创建项目

yarn create react-app 21-opsany 

### 安装插件

0.antd 

yarn add antd

1.路由
yarn add react-router-dom

2.less
yarn add @craco/craco

yarn add craco-less  

2.1 在根目录下添加craco.config.js 配置 

```
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        javascriptEnabled:true,
                    }
                }
            }
        }
    ]
}
```

2.2 修改 package.json 

```
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```