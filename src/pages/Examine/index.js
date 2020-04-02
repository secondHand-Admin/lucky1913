import React, { Fragment } from 'react';
import { Component } from 'react';
import articleApi from '../../api/article'
import { Card, Table, Pagination, Popconfirm, message, Button, Spin,Input } from 'antd';
const { TextArea } = Input;
class Examine extends Component {
  state = {
    data: [],
    count: 0,
    page: 1,
    spinning: false,
    pageSize: 10,
    visible:false,
    columns: [
      {
        title: '用户id',
        dataIndex: '_id',
        key: '_id',
        width: 230
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
        width: 100,
        render: (sort) => {
          return (
            <span>{sort ? sort : '其它'}</span>
          )
        }
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
        render: (state) => {
          return (
            <Fragment>
              <span>
                {(() => {
                  switch (state) {
                    case -1:
                      return '等待审核'
                    case 1:
                      return '已审核'
                    case 0:
                      return '申请驳回'
                    default:
                      break;
                  }

                })()}</span>
            </Fragment>
          )
        }
      },
      {
        title: '图片',
        key: 'src',
        dataIndex: 'src',
        width: 130,
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
          return (
            <Fragment>
              <Popconfirm title="请确认是否删除该信息" onConfirm={() => {
                  this.del(payload._id)
                  message.success('删除成功')
                }}
                onCancel={() => {
                  message.error('取消操作')
                }}
                okText="是"
                cancelText="否"
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Popconfirm
                title="是否同意发布？"
                onConfirm={() => {
                  this.update(payload._id,1)
                  message.success('成功发布')
                }}
                onCancel={() => {
                  message.error('取消操作')
                }}
                okText="是"
                cancelText="否"
              >
              <Button type='primary' size='small' style={{ marginTop:5,marginBottom:5 }}>通过</Button>
              </Popconfirm>
              <Popconfirm
                title="确定不通过发布？"
                onConfirm={() => {
                  this.update(payload._id,0)
                  message.success('不通过')
                }}
                onCancel={() => {
                  message.error('取消操作')
                }}
                okText="是"
                cancelText="否"
              >
              <Button type='danger' size='small'>不通过</Button>
              </Popconfirm>
            </Fragment>
          )
        }
      },
    ]
  }
  componentDidMount() {
    this.getArticleList()
  }
  del=async (id)=>{
   let res =await articleApi.delList(id)
  //  console.log(res.msg)
  this.getArticleList()
  }
  update=async (id,state)=>{
    let res=await articleApi.updateList(id,state)
    // console.log(state,res.result)
    this.getArticleList()
  }
  getArticleList = async () => {
    let { page, pageSize } = this.state
    this.setState({ spinning: true })
    let res = await articleApi.dataList(page, pageSize)
    // console.log(res)
    this.setState({ data: res.list, spinning: false })
  }
  onChange = (page) => {
    this.setState({ page }, () => {
      this.getArticleList()
    })
  }
  render() {
    let { columns, data, count, spinning } = this.state
    return (
      <div className='examineBox'>
        <Card title="用户列表" bordered={false}>
          <Spin spinning={spinning}>
            <Table columns={columns} dataSource={data} pagination={false} rowKey='_id' scroll={{ y: 400 }} />
          </Spin>
          <div>
            <Pagination defaultCurrent={1} showQuickJumper pageSize={10} total={100} onChange={this.onChange} />
          </div>
        </Card>
      </div>
    )
  }
}
export default Examine