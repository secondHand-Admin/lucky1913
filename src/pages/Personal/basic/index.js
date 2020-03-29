import React, { Component } from 'react'
import style from './index.module.less'
import { Button, Input, Cascader, } from 'antd'
import Site from './site'
const { TextArea } = Input;
class Alter extends Component {
    state = {}
    onChange(value) {

    }
    render() {
        return (

            <div className={style.box}>
                <h1>
                    基本设置
                </h1>
                <div className={style.left}>
                    <span>邮箱</span> <br />
                    <Input placeholder="你的邮箱" /> <br />
                    <span>昵称</span>   <br />
                    <Input placeholder="你的昵称" /> <br />
                    <span>个人简介</span>   <br />
                    <TextArea rows={4} /> <br />
                    <span>地址</span> <br />
                    <Cascader options={Site} onChange={this.onChange} placeholder="广东省/广州市/天河区" />
                    <Button type="primary">提交更新</Button>
                </div>

            </div>
        )
    }
}

export default Alter