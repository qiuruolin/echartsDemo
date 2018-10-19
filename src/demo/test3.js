let myChart = echarts.init(document.getElementById('test3'))

let option = {
    color: ['#3398DB', 'pink'],
    title: {
        text: 'dataset相关设置',
        subtext: '声明单独的数据集，进行单独管理',
        left: 'center'
    },
    legend: {
        data: ['data1', 'data2'],
        right: 0,
        top: '5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'data1',
        type: 'bar',
        seriesLayoutBy: 'row'
        // data: [10, 52, 200, 334, 390, 330, 220]
    }, {
        name: 'data2',
        type: 'bar',
        seriesLayoutBy: 'row'
        // data: [10, 52, 200, 334, 390, 330, 220]
    }],
    dataset: {
        //第一种：xAxis自动对应到了第一列，每个系列会对应每一列
        // source: [
        //     ['date', 'data1', 'data2'],
        //     ['Mon', 10, 20],
        //     ['Tue', 30, 10],
        //     ['Wed', 50, 66],
        //     ['Thu', 374, 102],
        //     ['Fri', 193, 330],
        //     ['Sat', 464, 278],
        //     ['Sun', 56, 82]
        // ]

        //第二种， 使用对象形式
        // dimensions: ['product', 'data1', 'data2'],
        // source: [{
        //         product: 'Mon',
        //         'data1': 10,
        //         'data2': 20
        //     },
        //     {
        //         product: 'Tue',
        //         'data1': 30,
        //         'data2': 10
        //     },
        //     {
        //         product: 'Wed',
        //         'data1': 50,
        //         'data2': 66
        //     },
        //     {
        //         product: 'Thu',
        //         'data1': 374,
        //         'data2': 102
        //     },
        //     {
        //         product: 'Fri',
        //         'data1': 193,
        //         'data2': 330
        //     },
        //     {
        //         product: 'Sat',
        //         'data1': 464,
        //         'data2': 278
        //     },
        //     {
        //         product: 'Sun',
        //         'data1': 56,
        //         'data2': 82
        //     },
        // ]

        //seriesLayoutBy: row/column 可以指定行/列
        source: [
            ['product', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            ['data1', 10, 52, 200, 334, 390, 330, 220],
            ['data2', 120, 12, 180, 234, 674, 127, 663]
        ],
        // sourceHeader: false //设置是否包含第一行/列
    }
};

module.export = function () {
    myChart.setOption(option)
}()