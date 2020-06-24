import React, {Component} from 'react'
import './login.less'
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd'
import logo from './images/logo.png'
/*
* 登陆的路由组件
* */
class Login extends Component {
  handleSubmit = (event) => {
    //阻止默认行为发生
     event.preventDefault()
     const values = this.props.form.getFieldsValue()
     console.log('输入的值',values)

  }
  validatePwd = (rule, value, callback) => {
    console.log('validatePwd()', rule, value)
    if(!value) {
      callback('密码必须输入')
    } else if (value.length<4) {
      callback('密码长度不能小于4位')
    } else if (value.length>12) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  }
  render() {
    const form = this.props.form
    const { getFieldDecorator } = form
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>react后台管理项目</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form
            onSubmit={this.handleSubmit}
            name="normal_login"
            className="login-form"
          >
            <Form.Item>
              {
                getFieldDecorator('usename',{
                  rules:[
                    {required:true,message:'用户名必须输入'},
                    {min:4,message:'用户名至少4位'},
                    {max:12,message:'用户名最多12位'},
                    {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文数字下划线组成'}
                  ]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="用户名" />
                )
              }


            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password',{
                  rules: [
                    {
                      validator: this.validatePwd
                    }
                  ]
                })(

                <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="密码"
                />
                )
              }
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>

    )
  }
}
const Wraplogin = Form.create()(Login)
export default Wraplogin
