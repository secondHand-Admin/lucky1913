import React, { Component, Fragment } from "react";
import echart from 'echarts'
import theme from './echarts.project.json'

echart.registerTheme('one', theme)

class Echarts extends Component {
    state = {
        seriesData: [],

    }

    render() {
        return (
            <Fragment>
                <div ref='draw' style={{ height: 700 }}></div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.setState({ ...this.props }, e => {
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    top: '20%',
                    right: "20%",
                    bottom: 10,
                },
                series: [
                    {
                        name: '分类名字',
                        type: 'pie',
                        radius: '55%',
                        center: ['45%', '55%'],
                        data: this.state.seriesData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            this.initEharts(option)
        })
    }

    initEharts(option) {
        this.Echats = echart.init(this.refs.draw, 'one')
        this.Echats.setOption(option)
    }

}

export default Echarts