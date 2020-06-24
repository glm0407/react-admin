/*
入口文件
* */
import React from 'react'
import  ReactDOM from 'react-dom'

import App from './App'  //引入自定义模块必须加./

//讲App组件标签渲染后index页面的div上
ReactDOM.render(<App />,document.getElementById('root'))
