import React, { Component } from 'react'
import API from '../../../api/goods'
import { Card, message, Table, Popconfirm, Tag, Button, Pagination } from 'antd'
// import style from './index.module.less'
class GoodsGM extends Component {
    state = {
        page: 1,//页码数
        pageSize: 5,//每页显示的几条数据
        list: [],//列表数据
        count: 0,//总数量
        columns: [
            { title: '编号', dataIndex: '_id', key: '_id', width: 100, height: 80 },
            { title: '名称', dataIndex: 'name', key: 'name', width: 120, height: 80 },
            { title: '时间', dataIndex: 'createTime', key: 'createTime', width: 120, height: 80 },
            { title: '库存', dataIndex: 'stock', key: 'stock', width: 80, height: 80 },
            { title: '价格', dataIndex: 'price', key: 'price', width: 120, height: 80 },
            {
                title: '类别', dataIndex: 'kind', key: 'kind', width: 120, height: 80, render(kind) {
                    return (<span>{kind ? kind.kindName : '暂无类别'}</span>)
                }
            },
            {
                title: '图片', dataIndex: 'src', key: 'src', render(path) {
                    let src = path
                    return (<img width='120' height='80' src={src} alt='' />)
                }, width: 150, height: 80
            },
            { title: '描述', dataIndex: 'desc', key: 'desc', width: 200 },
            { title: '单位', dataIndex: 'unit', key: 'unit', width: 80 },
            {
                title: '状态', dataIndex: 'putaway', key: 'putaway', render(putaway) {

                    let obj = { '-1': { color: 'red', msg: '已下架' }, '0': { color: 'yellow', msg: '未上架' }, '1': { color: 'green', msg: '已上架' } }
                    return (<Tag color={obj[putaway].color}>{obj[putaway].msg}</Tag>)
                }, width: 120, height: 80
            },

            {
                title: '操作', key: 'action', width: 120, height: 80, render: (recode) => {
                    return (
                        <div>
                            <Popconfirm title="请确认删除" cancelText="No" okText="Yes"
                                onConfirm={() => { this.delGoods(recode._id) }}>
                                <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                            <Button type='warn' size='small' onClick={() => { this.putAway(recode._id, recode.putaway) }}>上架</Button>
                            <Button type='primary' size='small' onClick={() => {
                                // 跳转到修改页面 传递要修改的id 
                                this.props.history.replace('/admin/goodsInfoUpdate/' + recode._id)
                            }}>修改</Button>
                        </div>
                    )
                }
            }
        ]
    }
    componentDidMount() {
        this.getListData()
    }

    //                  获取商品数据
    getListData = async () => {
        let { page, pageSize } = this.state
        let { code, msg, list, count } = await API.list(page, pageSize) // 解构数据
        if (code !== 0) {
            return message.error(msg)
        }
        this.setState({ list, count })
    }
    //                    删除商品
    delGoods = async (_id) => {
        let { code, msg } = await API.del(_id)
        if (code) { return message.error(msg) }
        this.getListData()
    }
    //                    上架商品

    putAway = async (_id, putaway) => {
        if (putaway === 0 || putaway === -1) {
            putaway = 1

        } else {
            putaway = -1
        }
        let { code, msg } = await API.putaway(_id, putaway)
        if (code) { return message.error(msg) }
        this.getListData()
    }


    //                    修改商品


    render() {
        let { list, columns } = this.state
        return (
            <Card title='商品列表'>
                <Button type='primary' onClick={() => {
                    this.props.history.push('/admin/goodsAdd')
                }}>商品添加</Button>
                <Table scroll={{ y: 390 }} columns={columns} dataSource={list} pagination={false} rowKey='_id'></Table>
                <Pagination size="small" total={100} onChange={(page, pageSize) => {
                    //只要页码数发生改变就会触发          
                    this.setState({ page }, () => {
                        this.getListData()
                    })
                }} />
            </Card>

        );
    }
}
export default GoodsGM;