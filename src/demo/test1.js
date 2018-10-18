// 折线图样式的设置
let myChart = echarts.init(document.getElementById('test1'));
// draw chart

// 折线图
let option = {
    title: {
        text: '折线图部分属性配置',
        subtext: '2018-10-18 demo',
        left: 'center',
        textStyle: {
            // fontSize: 20
        }
    },
    tooltip: {
        show: true,
        formatter: '{a0} : {b0} <br /> 有{c0}条数据<br /> {a1} : {b1} <br/> 有{c1}条数据',
        trigger: 'axis', //类型 item axis none
        // triggerOn: 'click' //提示框触发条件
        axisPointer: {
            type: 'cross',
            label: {
                color: 'blue'
            },
            crossStyle: {
                color: 'red'
            },
            backgroundColor: 'rgba(0, 255, 255, 0.5)'
        },
    },
    legend: {
        top: '12%',
        data: ['2018-10-18-1', '2018-10-18-2']
    },
    toolbox: { //工具盒
        orient: 'horizontal', //排列方式
        right: '10%',
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {}
        }
    },
    grid: {
        top: '20%',
        containLabel: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, // 面积折线图
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisPointer: { //设置hover时坐标轴上的样式
            label: {
                backgroundColor: 'red',
                color: '#fff'
            }
        }
    },
    series: [{
        name: '2018-10-18-1',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}, // 面积折线图
        emphasis: { //hover
            itemStyle: {
                color: 'red'
            },
            label: {
                show: true,
                formatter: '{c}'
            }
        },
        smooth: true, // 线条平滑设置,
        itemStyle: { //全局样式
            color: 'rgba(0, 0, 0, 0.5)'
        },
        markPoint: { //点标记
            data: [{
                    name: 'min',
                    type: 'min'
                },
                {
                    name: 'max',
                    type: 'max'
                }
            ],
            label: {
                rotate: -45
            },
            itemStyle: {
                // color: 'green'
                emphasis: {
                    color: 'red'
                }
            },
            emphasis: {
                label: {
                    color: '#ccc'
                }
            }
        },
        markLine: {
            label: {
                position: 'middle'
            },
            data: [{
                    name: 'Y 轴值为 100 的水平线',
                    yAxis: 100
                },
                [
                    // 固定起点的 x 像素位置，用于模拟一条指向最大值的水平线
                    {
                        yAxis: 'max',
                        x: '90%'
                    }, {
                        type: 'max'
                    },
                ],
                [{
                        name: '两个坐标之间的标线',
                        coord: [0, 307] //横坐标可用下标表示
                    },
                    {
                        coord: ['Tue', 600] // 'Tue'或1
                    }
                ],
                [{
                        name: '两个屏幕坐标之间的标线',
                        x: 100, //像素
                        y: 100
                    },
                    {
                        x: 500,
                        y: 200
                    }
                ]
            ]
        }
    }, {
        name: '2018-10-18-2',
        data: [1320, 263, 283, 120, 250, 273, 10],
        type: 'line',
        emphasis: { //hover
            itemStyle: {
                color: 'red'
            },
            label: {
                show: true,
                formatter: '{a}:{b}:{c}'
            }
        },
        markLine: {
            data: [{ //平均值
                name: 'average',
                // 支持 'average', 'min', 'max'
                type: 'average'
            }, ]
        },
        markArea: {
            label: {
                show: true,
                position: 'insideBottomLeft',
                color: 'blue'
            },
            emphasis: {
                itemStyle: {
                    color: 'rgba(255, 0, 0, 0.7)'
                }
            },
            data: [
                [{
                        name: '平均值到最大值',
                        type: 'average'
                    },
                    {
                        type: 'max'
                    }
                ]
            ]
        }
    }]
};

module.export = function () {
    myChart.setOption(option);
}()