import React, { Component } from 'react';
import api from '../../api/goods'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import style from './index.module.less'
class Login extends Component {
    login = () => {
        console.log('登录', this)
        let { validateFields } = this.props.form //用户获取表单数据的值
        validateFields((err, data) => {
            console.log(err, data)
            if (err) {
                // 输入错误
                message.error('输入有误请重试')
            } else {
                api.login(data).then((res) => {
                    console.log(res)
                    if (res.code === 404) {
                        message.error('用户名密码错误')
                    } else {
                        // 登录成功获取token并且保存到localstorage里 
                        localStorage.setItem('token', res.token)
                        message.success('登录成功，3s后跳转首页', 3, () => {
                            this.props.history.replace('/admin')
                        })
                    }

                })
            }
        })
    }
    render() {

        const { getFieldDecorator } = this.props.form;
        // getFieldDecorator返回一个高阶组件 用于和表单进行双向数据绑定
        return (
            <div className={style['login-box']}>

                <div className={style['login-form']}>
                    {/* 用户名 */}
                    <Form.Item>
                        {/* userName 参数1获取第一个数据的key值 */}
                        {getFieldDecorator('userName', {
                            rules: [{ requied: true, message: '请输入用户名' },
                            { min: 3, message: '用户名最小长度3位' },
                            { max: 10, message: '用户名最大长度10位' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    {/* 用户密码 */}
                    <Form.Item>
                        {getFieldDecorator('passWord', {
                            rules: [{ requied: true, message: '请输入密码' },
                            { min: 3, message: '密码最小长度3位' },
                            { max: 10, message: '密码最大长度10位' }]
                        })(
                            <Input
                                prefix={<Icon type="eye-invisible" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="PassWord"
                            />
                        )}
                    </Form.Item>
                    {/* 记住我  提交*/}
                    <Form.Item>
                        <Checkbox className={style.color}>记住账号</Checkbox>

                        <Button type="primary" onClick={this.login} className="login-form-button">
                            登录
          </Button>

                    </Form.Item>
                </div>
            </div>
        )
    }

}
// 通过Form 下的create的方法将组件进行处理  会将antd里的方法注册到 当前组件的Props里
export default Form.create()(Login);