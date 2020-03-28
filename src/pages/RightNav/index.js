import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom';
import menulist from './menulist.js';
const { SubMenu } = Menu;
class RightNav extends Component {
  state = {
    collapsed: false,
  }
  handleClick=(e)=> {
    // console.log('click ', e);
    let { path } = e.item.props
    this.props.history.replace(path)
  }
  renderItem(data) {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu key={item.key}  title={(() => {
            return (
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            )
          })()}>
            {/* 如果里面还有2级 将渲染的方法在调用一遍 */}
            {this.renderItem(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key} path={item.path}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Menu.Item>
        )
      }
    })
  }
  render() {
    return (
      <Menu onClick={this.handleClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {this.renderItem(menulist)}
      </Menu>
    )
  }
}
export default withRouter(RightNav)