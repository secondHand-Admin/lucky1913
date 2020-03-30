import React, { Component } from "react"
import { Card, message } from 'antd';
import API from '../../../api/goods'
import style from './index.module.less'

class GoodsAdd extends Component {
    state = {
        "name": "",
        "ss": '',
        "src": "",
        "link": "",
        "stock": 0,
        "putaway": 0,
        "price": 0,
        "unit": "件",

        "types": []
    }
    submit = async () => {
        if (!this.state.src) { return message.info('请先上传图片') }
        let { code, msg } = await API.add(this.state)

        if (code) {
            return message.error(msg)
        }

        this.props.history.replace('/admin/goodsInfo')
    }
    // 上传图片
    upload = async () => {
        // 1. 获取图片里的内容
        let file = this.refs.img.files[0]
        if (!file) { return message.error('请先选择一张图片') }
        // 图片的验证
        let { size, type } = file
        let types = ['jpg', "jpeg", 'gif', 'png']
        if (size > 2000000) { return message.warning('内容过大') }
        if (types.indexOf(type.split('/')[1]) === -1) { return message.warning('图片格式错误') }
        let formdata = new FormData()
        formdata.append('img', file)
        // let { code, msg, src } = await API.Img(formdata)
        let { code, msg, src } = await API.Img(formdata)
        console.log({ code, msg, src });
        if (code) { return message.error(msg) }
        this.setState({ src })

    }

    render() {
        let { name, ss, src, link, stock, putaway, price, unit, types, kind } = this.state
        return (
            <Card title='商品添加'  className={style.box}>
                名称: <input type='text' value={name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} /><br />
            描述: <input type='text' value={ss} onChange={(e) => {
                    this.setState({ ss: e.target.value })
                }} /><br />
            链接: <input type='text' value={link} onChange={(e) => {
                    this.setState({ link: e.target.value })
                }} /><br />
            库存: <input type='number' value={stock} onChange={(e) => {
                    this.setState({ stock: e.target.value })
                }} /><br />
            发布状态:
                <select value={putaway} onChange={(e) => {
                    this.setState({ putaway: Number(e.target.value) })
                }}>
                    <option value={-1}>下架</option>
                    <option value={1}>上架</option>
                </select>

                <br />
            价格: <input type='number' value={price} onChange={(e) => {
                    this.setState({ price: e.target.value })
                }} /><br />
            单位: <input type='text' value={unit} onChange={(e) => {
                    this.setState({ unit: e.target.value })
                }} /><br />


                {/* 缩略图 */}
            缩略图:
                <input type="file" ref='img' /> <button onClick={this.upload}>上传图片</button>

                <img width='120' height='80' src={src} alt="" />
                <button onClick={this.submit}>添加</button>
            </Card>
        );
    }
}

export default GoodsAdd;
