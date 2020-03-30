import React, { Component } from 'react';
import { Card,Table, Divider } from 'antd';
class Userlist extends Component{
  render(){
    const columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '性别',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '年龄',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '用户等级',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Divider type="vertical" />
            <a>删除</a>
          </span>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    return(
      <div style={{ padding: '30px' }}>
        <Card title="用户列表" bordered={false}>
        <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    )
  }
}
export default Userlist