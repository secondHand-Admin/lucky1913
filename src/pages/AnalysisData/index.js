import React, { Component, Fragment } from 'react'
import Echarts from '@components/analysis/echarts'
import { Row, Col, Statistic } from 'antd'
import style from './index.module.less'

class Analysis extends Component {
    state = {
        hashType: null
    }
    render() {
        return (
            <Fragment>
                <Row>
                    <Statistic title="Quantity of Goods" value={112893}
                        style={{ textAlign: 'center' }} />
                    <Col span={24}>
                        <Echarts />
                    </Col>
                </Row>
                {/* <Echarts hashType={this.state.hashType} /> */}
            </Fragment>
        )
    }
    componentDidMount() {
        console.log(this.props)
        window.addEventListener('hashchange', this.hashchang)
    }
    hashchang(e) {
        console.log(e);
    }
}

export default Analysis