import React, { Component } from 'react'
import style from './index.module.less'
import { Card, Table, Button, Spin, Popconfirm,message } from 'antd'
// import adminapi from '../../api/admin'

// 声明表头的数据格式
// let columns = 
class Admins extends Component {
    state = {
        dataSource: [],
        visible: false,
        spinning: false,
        columns:[
            {
                title: 'id',
                dataIndex: '_id',
                key: '_id',
            },
            {
                title: '账号',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: "操作",
                key: 'action',
                render: (record) => {    
                    return (
                        <div>
                            <Popconfirm
                                title="确定删除吗？"
                                onConfirm={() => { 
                                    this.del(record._id)
                                    message.success('删除成功');
                                }}
                                onCancel={()=>{
                                    message.error('取消删除');
                                }}
                            >
                                <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                        </div>
                    )
                },
            }
        ]
    }
  
    render() {
        let { dataSource, spinning,columns } = this.state
        return (
            <div className={style.admins}>
                <Card title="管理员列表">
                    <Spin spinning={spinning}>
                    <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
                    </Spin>
                </Card>
              
            </div>
        )
    }
}
export default Admins
