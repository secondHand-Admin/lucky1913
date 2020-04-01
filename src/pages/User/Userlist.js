import React, { Component } from 'react';
import { Card, Table, Popconfirm, message,Pagination,Spin } from 'antd';
import userApi from '../../api/user'
class Userlist extends Component {
  state = {
    data: [],
    spinning:false,
    page:1,
    pagesize:3,
    count:0,
    columns: [
      {
        title: '用户id',
        dataIndex: '_id',
        key: '_id',
        width: 300
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 100
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 100
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 100
      },
      {
        title: '用户等级',
        dataIndex: 'leavel',
        key: 'leavel',
      },
      {
        title: '头像',
        key: 'src',
        dataIndex: 'src',
        width:130,
        render: (path) => {
          let src = path
          return (
            < img src={src} style={{ width: 100, height: 80, borderRadius: 40 }} alt="" />
          )
        }
      },
      {
        title: '操作',
        key: 'action',
        render: (payload) => (
          <Popconfirm
            title="请确认是否删除该用户"
            onConfirm={() => {
              this.del(payload._id)
              message.success('删除成功')
            }}
            onCancel={() => {
              message.error('取消删除')
            }}
            okText="是"
            cancelText="否"
          >
            <a href="#">删除</a>
          </Popconfirm>
        ),
      },
    ]
  }
  renderUserList = async () => {
    let {page,pagesize}=this.state
    this.setState({ spinning: true })
    // 分页显示
    let data = await userApi.userList(page,pagesize)
    // console.log(data,pagesize)
    this.setState({ data: data.userList,spinning: false,count:data.count })
  }
  del = async (id) => {
    let res = await userApi.userdel(id)
    if (res.code) {
      return false
    }
    // 删除成功后重新渲染页面
    this.renderUserList()
  }
  componentDidMount() {
    this.renderUserList()
  }
  onChange=(page,pagesize)=>{
    // console.log('分页',page,pagesize)
    // setstate是异步
    this.setState({page},()=>{
      this.renderUserList()
    })
  }
  render() {
    let { columns, data,spinning,count } = this.state
    return (
      <div style={{ padding: '30px' }}>
        <Card title="用户列表" bordered={false}>
          <Spin spinning={spinning}>
            <Table columns={columns} dataSource={data} pagination={false} rowKey='_id' scroll={{y:300}} />
          </Spin>
          <div>
            <Pagination showQuickJumper defaultPageSize={3} defaultCurrent={1} total={count} onChange={this.onChange} style={{marginTop:20}} />
          </div>
        </Card>
      </div>
    )
  }
}
export default Userlist