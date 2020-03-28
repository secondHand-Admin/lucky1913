import React, { Component } from 'react'
import { Menu, Layout } from 'antd';
import {  Route } from 'react-router-dom';
import style from './index.module.less'
import MenuList from './menulist'
import PersonalAlter from '../alter/index'
import PersonalBasic from '../basic/index'
import PersonalBinding from '../binding/index'
import PersonalInform from '../inform/index'
const { Header } = Layout;
class Personal extends Component {
    state = {}
    handle = (e) => {
        let { path } = e.item.props
        this.props.history.replace(path)
    }
    NavList(data) {
        return data.map((item, index) => {
            return (<Menu.Item key={item.key} path={item.path}>
                <span>{item.title}</span>
            </Menu.Item>
            )
        })
    }
    render() {
        return (
            <div className={style.box}>
                <Layout className="layout">
                    <Header style={{padding:'unset'}}>
                        <div className="logo" />
                        <Menu
                            onClick={this.handle}
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            {this.NavList(MenuList)}
                        </Menu>
                        <Route exact path="/admin/set" component={PersonalBasic}></Route>
                        <Route path="/admin/set/basic" component={PersonalBasic}></Route>
                        <Route path="/admin/set/alter" exact component={PersonalAlter}></Route>
                        <Route path="/admin/set/binding" component={PersonalBinding}></Route>
                        <Route path="/admin/set/inform" component={PersonalInform}></Route>
                    </Header>

                </Layout>
            </div>
        )
    }
}

export default Personal