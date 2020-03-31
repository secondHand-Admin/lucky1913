import React, { Component, Fragment } from "react";
import echart from 'echarts'
import theme from './echarts.project.json'

echart.registerTheme('one', theme)

class Echarts extends Component {
    state = {
        type: ['pie', 'line', 'bar'],
        data: []
    }

    render() {
        return (
            <Fragment>
                <div ref='draw' style={{ height: 700 }}></div>
            </Fragment>
        )
    }
    componentDidMount() {
        let darw = echart.init(this.refs.draw, 'one')
        darw.setOption(this.option)
    }
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
            type: 'scroll',
            orient: 'horizontal',
            left: "20%",
            right: "20%",
            bottom: 10,
        },
        series: [
            {
                name: '名称',
                type: 'pie',
                radius: '55%',
                center: ['45%', '55%'],
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' },
                    { value: 400, name: '搜索引擎4' },
                    { value: 400, name: '搜索引擎2' },
                    { value: 400, name: '搜索引擎3' },
                    { value: 400, name: '搜索引擎5' },
                    { value: 400, name: '搜索引擎7' },
                    { value: 400, name: '搜索引擎55' },
                    { value: 400, name: '搜索引擎3' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                width: '100%'
            }
        ]
    };
}

export default Echarts