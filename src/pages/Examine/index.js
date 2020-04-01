import React, { Fragment } from 'react';
import { Component } from 'react';
import articleApi from '../../api/article'
import { Card, Table, Pagination, Popconfirm, message, Button, Spin } from 'antd';
class Examine extends Component {
  state = {
    data: [],
    count: 0,
    page: 1,
    spinning: false,
    pageSize: 10,
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
                      return '已审核'
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
              </Popconfirm>
              <Button type='primary' size='small' style={{ marginBottom: 10 }}>通过</Button>
              <Button type='danger' size='small'>不通过</Button>
            </Fragment>
          )
        }
      },
    ]
  }
  componentDidMount() {
    this.getArticleList()
  }
  getArticleList = async () => {
    let { page, pageSize } = this.state
    this.setState({ spinning: true })
    let res = await articleApi.dataList(page, pageSize)
    console.log(res)
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