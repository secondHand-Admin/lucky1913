import React, { Component } from 'react';
import style from './index.module.less';
import { Layout, Icon } from 'antd';
import RightNav from '../RightNav/index.js'
const { Header, Sider, Content } = Layout;
class Admin extends Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
    return(
      <Layout>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
       <RightNav></RightNav>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', paddingLeft: 16,fontSize:20 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          <span className={style.title}>欢迎来到柚子校园后台管理---lucky1913</span>
        </Header>
        <Content
          className={style.contentBox}
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: window.innerHeight-112,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
    )
  }
}
export default Admin