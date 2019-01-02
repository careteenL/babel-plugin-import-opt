# [babel-plugin-import-opt](https://github.com/careteenL/babel-plugin-import-opt)
[![](https://img.shields.io/badge/Powered%20by-babel-plugin-import-opt-brightgreen.svg)](https://github.com/careteenL/babel-plugin-import-opt)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/careteenL/babel-plugin-import-opt/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/careteenL/babel-plugin-import-opt.svg?branch=master)](https://travis-ci.org/careteenL/babel-plugin-import-opt)
[![npm](https://img.shields.io/badge/npm-0.1.3-orange.svg)](https://www.npmjs.com/package/babel-plugin-import-opt)
[![NPM downloads](http://img.shields.io/npm/dm/babel-plugin-import-opt.svg?style=flat-square)](http://www.npmtrends.com/babel-plugin-import-opt)

import element-ui、antd 时缩小引用范围，优化打包

使用前用法：
```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```

使用后用法：
```js
import Button from 'element-ui/lib/button'
import 'element-ui/lib/theme-chalk/button.css'
const components = [
  Button
]
components.forEach(component => {
  Vue.component(component.name, component)
})
```
一般项目中并不会使用到`element-ui`提供的所有组件，按需引入后打包体积可以大幅度减少。

## 快速使用

```shell
npm i babel-plugin-import-opt -D
```

在.babelrc里进行配置

.babelrc
```json
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime", "import-opt"]
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

## issue模板

- [Issue Template](./ISSUETEMPLATE.md)

## 更新日志

- [Changelog](./CHANGELOG.md)

## Quote

主要是参考antd对import引用的优化，并在此基础上增加配置项，可扩展使用（element-ui）

https://github.com/ant-design/babel-plugin-import
