import React, { Component } from 'react'
import style from './index.module.less'
import { Button, Input, Cascader, message } from 'antd'
import Site from './site'
import adminApi from '../../../api/admin'
import uploadApi from '../../../api/admin'
const { TextArea } = Input;
let id = localStorage.getItem('_id')
let password = localStorage.getItem("passWord")
class Alter extends Component {
    state = {
        site: '广东省/广州市/天河区',
        name: null,
        article: null,
        mail: null,
        path: ""
    }

    // 修改管理员信息
    list = async () => {
        let list = await adminApi.List()

        list.adminList.map((item) => {
            if (item._id === id) {
                this.setState({ name: item.userName })
                this.setState({ article: item.article })
                if (item.img) {
                    this.setState({ path: item.img })
                }

            }
            return item._id
        })


    }
    upload = async () => {
        //获取图片内容
        let file = this.refs.img.files[0]
        if (!file) {
            return message.error('请选择上传得图片')
        }
        // 图片验证
        let { size, type } = file
        let types = ['jpg', 'jpeg', 'gif', 'png']
        if (size > 1000000) {
            return message.warning('图片过大')
        }
        if (types.indexOf(type.split('/')[1]) === -1) {
            return message.warning('图片类型错误，图片类型只支持jpg,jpeg,gif,png')
        }
        // 调用接口 将图片转换为formdata
        let formdata = new FormData()
        formdata.append('img', file)
        let { code, msg, src } = await uploadApi.img(formdata)
        if (code) {
            return message.error(msg)
        }
        this.setState({ path: src })

    }
    submit = async () => {
        if (!this.state.path) { return message.info('请上传图片') }
        // 获取地址   
        let site = this.refs.site.state.value
        this.setState({ site: site })
        // 邮箱
        let mail = this.refs.mail.state.value
        this.setState({ mail: mail })
        //获取输入的名字
      

        let name = this.refs.name.state.value
        //获取个人简介 
        let article = this.refs.article.state.value
        this.setState({ article: article })
        // 获取src
        let img = this.state.path
        if (name == null) {
            return message.info('请输入昵称')
        }
        if (!mail) {
            return message.info('请输入邮箱')
        }
        let { code, msg } = await adminApi.amend(id, name, password, img)
        if (code) {
            return message.error(msg)
        } else {
            localStorage.setItem('name', name)
            return message.success(msg)

        }

    }
    componentDidMount() {
        this.list()
    }

    render() {
        return (
            <div className={style.box}>
                <h1>
                    基本设置
                </h1>

                <div className={style.box}>
                    <h1>
                        基本设置
                </h1>
                    {/* 头像 */}
                    <div style={{
                        width: 200,
                        height: 300,
                        position: "absolute",
                        right: 80
                    }}>
                        <img style={{ width: 200, height: 200, borderRadius: '50%', padding: 20 }} src={this.state.path} alt="" />

                        <input type="file" ref='img' />
                        <button onClick={this.upload}>上传图片</button>
                    </div>
                    {/* 基本信息 */}
                    <div className={style.left}>
                        <span >邮箱</span> <br />
                        <Input placeholder={this.state.mail} ref='mail' /><br />
                        <span>昵称</span>   <br />
                        <Input placeholder={this.state.name} ref='name' /> <br />
                        <span>个人简介</span>   <br />
                        <TextArea rows={4} placeholder={this.state.article} ref='article' /> <br />
                        <span>地址</span> <br />
                        <Cascader options={Site} placeholder={this.state.site} ref='site' />
                        <Button type="primary" onClick={this.submit}>提交更新</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alter