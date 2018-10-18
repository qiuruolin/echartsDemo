let myChart = echarts.init(document.getElementById('test2'))

//柱状图
let option = {
    color: ['#3398DB', '#536819'],
    title: {
        text: '柱状图部分属性配置',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: '10%',
        feature: {
            saveAsImage: {},
            dataZoom: {
                yAxisIndex: false //使用时要注意，堆叠数据如果yAxisIndex不设置为false，会导致y轴无法根据堆叠的值设定刻度值的大小
            },
            restore: {},
            magicType: { //动态类型切换
                type: ['line', 'bar', 'stack', 'tiled']
            }
        }
    },
    dataZoom: [{
            type: 'slider',
        },
        {
            type: 'inside' //设置响应鼠标滚动等
        }
    ],
    legend: {
        top: '8%',
        left: 0,
        data: ['data1', 'data2']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: { //刻度相关设置
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    label: {
        show: true,
    },
    series: [{
            name: 'data1',
            stack: '总量', //设置数据堆叠，需要堆叠的数据需要设置相同的值
            type: 'bar',
            // barWidth: '60%',
            data: [10, 52, 100, 334, 390, 330, 220],
            markLine: {
                label: {
                    position: 'middle'
                },
                itemStyle: {
                    color: 'red'
                },
                data: [
                    [{
                            // 起点和终点的项会共用一个 name
                            name: '最小值到最大值',
                            type: 'min'
                        },
                        {
                            type: 'max'
                        }
                    ]
                ]
            }
        },
        {
            name: 'data2',
            stack: '总量',
            type: 'bar',
            // barWidth: '60%',
            data: [100, 52, 10, 334, 390, 330, 220],
            label: {
                position: 'top'
            },
            markPoint: {
                data: [{
                    name: 'min',
                    type: 'min'
                }]
            }
        }
    ]
}

module.export = function () {
    myChart.setOption(option)
}()