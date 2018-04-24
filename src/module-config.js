export const config = [
  {
    'libraryName': 'antd',
    'libraryPath': 'antd/lib/${name}/index.js',
    'namePolicy': 'dash',
    'cssPath': 'antd/lib/${name}/style/index.css'
  },
  {
    'libraryName': 'element-ui',
    'libraryPath': 'element-ui/lib/${name}.js',
    'namePolicy': 'dash',
    'cssPath': ['element-ui/lib/theme-default/base.css', 'element-ui/lib/theme-default/${name}.css']
  }
]
