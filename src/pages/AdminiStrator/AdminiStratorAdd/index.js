import React, { Component } from 'react'
import style from './index.module.less'
import { Card, Button, message } from 'antd'
import adminapi from '../../../api/admin'
class UserAdd extends Component {
    state = {
        dataSource: []
    }
    handleOk = async () => {
        // 获取输入内容
        let userName = this.refs.us.value
        let passWord = this.refs.ps.value
        //   获取成功后添加接口
        let usandpass = await adminapi.AdminiStratorAdd({ userName, passWord })
        if (usandpass.code !== 0) {
            return message.Error(usandpass.msg)
        }
        message.success(usandpass.msg)
    }
    render() {
        return (
            <div className={style.box}>
                <Card title='管理员添加'>
                    <div>
                        管理员姓名: <input type="text" ref='us' />
                    </div>
                    <br />
                    <div>
                        管理员密码: <input type="text" ref='ps' />
                    </div>
                    <br />
                    <Button type="primary" onClick={() => {
                        this.handleOk()
                    }}>添加</Button>
                </Card>
            </div>
        )
    }
}

export default UserAdd