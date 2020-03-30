import React, { Component } from 'react'
import style from './index.module.less'
import { Input, Button, message } from 'antd'
import adminApi from '../../../api/admin'
let id = localStorage.getItem('_id')
let name= localStorage.getItem("name")
class Alter extends Component {
    state = {

    }
    submit = async () => {
        let oldpw = this.refs.name.state.value
        let newpwA = this.refs.newpwA.state.value
        let newpwB = this.refs.newpwB.state.value
      
        if (name !== oldpw) {
            return message.error('输入的名称错误')
        } else if (newpwA !== newpwB) {
            return message.error('密码不一致')
        } else {      
            let { code, msg } = await adminApi.amend(id,oldpw,newpwA)
            if (code) {
                return message.error(msg)
            } else {
                return message.success(msg)
            }
        }
    }
    render() {
        return (
            <div className={style.box}>
                <h1>安全设置</h1>
                <div className={style.big}>
                    <p>
                        <span>名称: <Input size="small" placeholder="名称" ref='name' /></span><br />
                    </p>
                    <p>
                        <span> 新密码：<Input size="small" placeholder="新密码" ref='newpwA' /></span>  <br />
                    </p>
                    <p>
                        <span> 确认密码：<Input size="small" placeholder="确认密码" ref='newpwB' /></span> <br />
                    </p>
                    <Button type="primary" onClick={this.submit}>修改</Button>
                </div>
            </div>

        )
    }
}

export default Alter