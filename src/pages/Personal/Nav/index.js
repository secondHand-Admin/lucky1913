import React, { Component } from 'react'
import { Menu} from 'antd';
import style from './index.module.less'
import MenuList from './menulist'
class Personal extends Component {
state = {}
handle=(e)=>{
    let { path } = e.item.props
   this.props.history.replace(path)
}
NavList(data){
    return data.map((item,index)=>{
       return( <Menu.Item key={item.key} path={item.path}>
        <span>{item.title}</span>
      </Menu.Item>
       )
    })

}
render() {
 return (
     <div className={style.box}>
          <Menu
          onClick={this.handle}
          style={{ width: 224}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
            {this.NavList(MenuList)}
        </Menu>
     </div>
 )
}
}

export default Personal