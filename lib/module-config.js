'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = [{
  'libraryName': 'antd',
  'libraryPath': 'antd/lib/${name}/index.js',
  'namePolicy': 'dash',
  'cssPath': 'antd/lib/${name}/style/index.css'
}, {
  'libraryName': 'element-ui',
  'libraryPath': 'element-ui/lib/${name}.js',
  'namePolicy': 'dash',
  'cssPath': ['element-ui/lib/theme-chalk/base.css', 'element-ui/lib/theme-chalk/${name}.css']
}];