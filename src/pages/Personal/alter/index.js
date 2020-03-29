import React, { Component } from 'react'
import style from './index.module.less'
import {Input,Button} from 'antd'
class Alter extends Component {
state = {}
render() {
 return (
     <div className={style.box}>
        <h1>安全设置</h1>
        <div className={style.big}>
        <p>
           <span>原密码: <Input size="small"   placeholder="原密码" /></span><br/>
           </p>
           <p>
           <span> 新密码：<Input size="small"  placeholder="新密码"     /></span>  <br/>
           </p>
           <p>
           <span> 确认密码：<Input  size="small" placeholder="确认密码"  /></span> <br/>
           </p>
            <Button type="primary">修改</Button>
            </div>
     </div>
    
    )
}
}

export default Alter