import React, { Component } from 'react'
import style from './index.module.less'
import { Button, Input, Cascader, } from 'antd'
import Site from './site'
const { TextArea } = Input;
class Alter extends Component {
    state = {
        img: 'http://b-ssl.duitang.com/uploads/item/201807/29/20180729105653_jqtuf.thumb.700_0.jpg'
    }
    onChange(value) {

    }
    render() {
        return (
            <div className={style.box}>
                <h1>
                    基本设置
                </h1>
                <div style={{
                    width: 200,
                    height: 300,
                    position: "absolute",
                    right: 80
                }}>
                    <img style={{ width: 200, height: 200, borderRadius: '50%',padding:20 }} src={this.state.img} alt="" />
                    <input type="file" ref='img' />
                    <button onClick={this.upload}>上传头像</button>
                    {/* <img width='100' height='100' src={config.serverIp + path} alt="/" /> */}
                    <button onClick={this.submit}>确认添加</button>
                </div>
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