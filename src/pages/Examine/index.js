import React, { Fragment } from 'react';
import { Component } from 'react';
import articleApi from '../../api/article'
import { Card, Table,Pagination,Popconfirm,message,Button } from 'antd';
class Examine extends Component{
  state={
    data:[],
    count:0,
    columns: [
      {
        title: '用户id',
        dataIndex: '_id',
        key: '_id',
        width: 300
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 100
      },
      {
        title: '类别',
        dataIndex: 'sort',
        key: 'sort',
        width: 100
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        width: 100
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        width: 100
      },
      {
        title: '描述',
        dataIndex: 'text',
        key: 'text',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '图片',
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
        render: (payload) => {
          return(
            <Fragment>
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
          <Button type='warn' size='small'>上架</Button>
          <Button type='primary' size='small'>修改</Button>
            </Fragment>
          )
          }
      },
    ]
  }
  componentDidMount(){
    this.getArticleList()
  }
  getArticleList=async ()=>{
   let res = await articleApi.dataList()
   console.log(res)
   this.setState({data:res.list})
  }
    render(){
      let { columns, data,count } = this.state
      return(
        <div className='examineBox'>
        <Card title="用户列表" bordered={false}>
            <Table columns={columns} dataSource={data} pagination={false} rowKey='_id' scroll={{y:300}} />
          <div>
            <Pagination showQuickJumper defaultPageSize={3} defaultCurrent={1} total={count} onChange={this.onChange} style={{marginTop:20}} />
          </div>
        </Card>
        </div>
      )
    }
}
export default Examine