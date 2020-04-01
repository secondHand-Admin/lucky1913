import React, { Component, Fragment } from 'react'
import Echarts from '@components/analysis/echarts'
import { Row, Col, Statistic, Spin } from 'antd'
import { getGoods } from '../../api/analysis'

class Analysis extends Component {
    state = {
        hashType: null,
        data: [],
        seriesData: [],
        total: 0,
    }
    render() {
        return (
            <Fragment>
                {!this.state.data.length ?
                    <Spin tip="loading" style={{
                        fontSize: 24, width: "100%", height: '100%',
                        verticalAlign: 'middle', marginTop: '20%'
                    }} size="large" /> :
                    <Fragment>
                        <Row style={{ display: 'flex', flexFlow: 'row  nowrap', justifyContent: 'center', marginTop: 30 }}>
                            <Col style={{ flex: 1 }}>
                                <Statistic title="商品数" value={this.state.total} style={{ textAlign: 'center' }} />
                            </Col>
                            <Col style={{ flex: 1 }}>
                                <Statistic title="分类数" value={this.state.data.length} style={{ textAlign: 'center' }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Echarts seriesData={this.state.seriesData} />
                            </Col>
                        </Row>
                    </Fragment>
                }
            </Fragment>
        )
    }
    async componentDidMount() {
        let data = await getGoods()
        this.setState({ ...this.getter(data) }, () => {
            console.log(this.state.data);
        })
        window.addEventListener('hashchange', this.hashchang)
    }
    hashchang(e) {
        // console.log(e);
    }
    getter(data) {
        let seriesData = []
        let total = 0;
        let newdata = data.list.map(item => {
            let { count, list, countStock, minPrice, maxPrice } = item
            let [produc] = list
            let [kind] = produc.kindname
            let obj = { count, countStock, minPrice, maxPrice, kind: kind ? kind.name : '未分类' }
            total += obj.count
            seriesData.push({ value: obj.count, name: obj.kind })
            return obj
        })
        return { data: newdata, seriesData, total }
    }
}

export default Analysis