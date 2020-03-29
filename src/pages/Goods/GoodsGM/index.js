import React, { Component } from 'react'
import API from '../../../api/goods'
import { Card, message, Table } from 'antd'
// import style from './index.module.less'
class GoodsGM extends Component {
    state = {
        page: 1,//页码数
        pageSize: 2,//每页显示的几条数据
        list: [],//列表数据
        count: 0,//总数量
        columns: [
            { title: '编号', dataIndex: '_id', key: '_id', width: 100, fixed: 'left' },
            { title: '名称', dataIndex: 'name', key: 'name', width: 120 },
            { title: '时间', dataIndex: 'createTime', key: 'createTime', width: 120 },
            { title: '库存', dataIndex: 'stock', key: 'stock', width: 80 },
            { title: '价格', dataIndex: 'price', key: 'price', width: 120 },
            { title: '类别', dataIndex: 'kind', key: 'kind', width: 120, render(kind) {
                 return (<span>{kind ? kind.kindName : '暂无类别'}</span>) }    },
            { title: '图片', dataIndex: 'path', key: 'path', render(path) {
                    // 图片是base64 还是正常的图片路径
                    // let result = path
                    // if (path.indexOf('base64') === -1) {
                    //     result = rootPath + path
                    // }
                    // return (<img width='150' height='80' src={result} />)
                }, width: 150
            },
            { title: '描述', dataIndex: 'desc', key: 'desc', width: 200 },
            { title: '单位', dataIndex: 'unit', key: 'unit', width: 80 },
            { title: '状态', dataIndex: 'putaway', key: 'putaway', render(putaway) {
                    console.log(putaway)
                    let obj = { '-1': { color: 'red', msg: '已下架' }, '0': { color: 'yellow', msg: '未上架' }, '1': { color: 'green', msg: '已上架' } }
                    // return (<Tag color={obj[putaway].color}>{obj[putaway].msg}</Tag>)
                }, width: 120
            },
            { title: '操作', key: 'action', width: 120, fixed: 'right',  }
            // { title: '操作', key: 'action', width: 120, fixed: 'right', render: (recode) => {
            //         return (
            //             <div>
            //                 <Popconfirm title='你确定要删除该商品嘛?'
            //                     onConfirm={() => { this.delGodds(recode._id) }}
            //                 >
            //                     <Button type='danger' size='small'>删除</Button>
            //                 </Popconfirm>
            //                 <Popconfirm title='你确定要修改该商品的状态嘛?'
            //                     onConfirm={() => { this.putAwayGodds(recode._id, recode.putaway) }}
            //                 >
            //                     <Button type='warn' size='small'>上架</Button>
            //                 </Popconfirm>
            //                 <Button type='primary' size='small' onClick={() => {
            //                     // 跳转到修改页面 传递要修改的id 
            //                     this.props.history.replace('/admin/goodsInfoUpdate/' + recode._id)
            //                 }}>修改</Button>
            //             </div>
            //         )
            //     }
            // }
        ]
    }
    componentDidMount() {
        this.getListData()
    }
    getListData = async () => {
        // 获取商品数据
        let { page, pageSize } = this.state
        let { code, msg, list, count } = await API.list(page, pageSize) // 解构数据
        if (code !== 0) {
            return message.error(msg)
        }
        this.setState({ list, count })


    }

    render() {
        let { list, columns } = this.state
        return (
            <Card title='商品列表'>
                <Table columns={columns} dataSource={list}></Table>
            </Card>

        );
    }
}
export default GoodsGM;