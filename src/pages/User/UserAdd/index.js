import React, { Component } from 'react'
import style from './index.module.less'
import { Card, Button } from 'antd'
class UserAdd extends Component {
    state = {}
    handleOk =  () => {
            // 获取输入内容
            let userName = this.refs.us.value
            let passWord = this.refs.ps.value
            console.log(userName,passWord); 
    }
        render() {
            return (
                <div className={style.box}>
                    <Card title='管理员添加'>
                        管理员姓名:<input type="text" ref='us' /><br />
                管理员密码:<input type="text" ref='ps' /><br />
                        <Button type="primary" onClick={()=>{
                   this.handleOk()
                        }}>添加</Button>
                    </Card>
                </div>
            )
        }
    }

    export default UserAdd