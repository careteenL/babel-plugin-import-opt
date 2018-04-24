# babel-plugin-import-opt
import element-ui、antd 时缩小引用范围，优化打包

```javascript
import {Button} from 'antd';
```

after fix:

```javascript
import {Button} from 'antd/lib/button';
import 'antd/lib/button/style'
```

## Usage

```bash
npm install babel-plugin-import-opt -D
```

在.babelrc里进行配置

.babelrc
```javascript
{
  "presets": [
    ["es2015", { "modules": false }], "react"
  ],
  "plugins": ["import-opt"]
}
```
目前支持element-ui、antd

扩展支持的库，如果没有css，可以不写cssPath，或设置为空

.babelrc
```javascript
{
  "presets": [
    ["es2015", { "modules": false }], "react"
  ],
  "plugins": [["import-fix", [
    {
      'libraryName': 'element-ui',
      'libraryPath': 'element-ui/lib/${name}.js',
      'namePolicy': 'dash',
      'cssPath': ['element-ui/lib/theme-default/base.css',  'element-ui/lib/theme-default/${name}.css']
    },
    {
      'libraryName': 'antd',
      'libraryPath': 'antd/lib/${name}/index.js',
      'namePolicy': 'dash',
      'cssPath': 'antd/lib/${name}/style/index.css'
    }
  ]]]
}
```
cssPath可以是字符或数组

## Quote

主要是参考antd对import引用的优化，并在此基础上增加配置项，可扩展使用（element-ui）

https://github.com/ant-design/babel-plugin-import
