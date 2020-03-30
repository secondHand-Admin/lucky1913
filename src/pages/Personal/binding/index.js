import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd'
import style from './index.module.less'
class Alter extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className={style.box}>
        <h1>账号绑定</h1>
        <p style={{ width: "80%", margin: " 0 auto" }}><span>
          <Icon type="taobao" style={{ fontSize: "40px", color: " #ff4000" }} />绑定淘宝</span> <Button type="primary" onClick={this.showModal} style={{ width: 65, height: 40, float: "right" }}>绑定</Button>
        </p> <br />
        <p style={{
          width: "80%",
          margin: " 0 auto"
        }}><span><Icon type="alipay" style={{ fontSize: "40px", color: "#2eabff" }} />绑定支付宝</span> <Button type="primary" onClick={this.showModal} style={{ width: 65, height: 40, float: "right" }}>绑定</Button></p><br />
        <p style={{
          width: "80%",
          margin: " 0 auto"
        }}><span><Icon type="dingding" style={{ fontSize: "40px", backgroundColor: "#2eabff" }} />绑定钉钉</span> <Button type="primary" onClick={this.showModal} style={{ width: 65, height: 40, float: "right" }}>绑定</Button></p>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          不要点了，我做不了这个功能，嘻嘻
                </Modal>
      </div>

    )
  }
}

export default Alter