import React, { Component } from 'react';
import style from './index.module.less';
class Home extends Component{
  render(){
    return(
      <div className={style.bg}>
        <div className={style.admin}>
          <div>
            <img src="/admin3.png" alt=""/>
          </div>
          <p className={style.back}>欢迎回来~</p>
        </div>
      </div>
    )
  }
}
export default Home