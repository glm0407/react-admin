//应用的根组件
import React,{Component} from 'react'
import {Button} from 'antd'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {
  render() {
    //创建了虚拟dom对象  生成的是真实的dom对象
    return   (
      //路由器（在每一个路由器里面配置路由）
      <BrowserRouter>
        <Switch>/*只匹配其中一个*/
          {/*注册路由*/}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>

        </Switch>

      </BrowserRouter>
    )
  }
}
