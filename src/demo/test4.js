let myChart = echarts.init(document.getElementById('test4'))
echarts.dataTool = require("echarts/extension/dataTool");

myChart.showLoading();
$.get('/src/data/data.xml', function (xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 7; i++) {
        categories[i] = { //categories中也可以设置label itemStyle emphasis等属性
            name: '类目' + i,
            label: {
                color: i == 1 ? 'red' : ''
            }
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
            normal: {
                show: node.symbolSize > 30
            }
        };
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {
            triggerOn: 'click'
        },
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none', //force为热力图 circular为环形图
            data: graph.nodes,
            links: graph.links,
            categories: categories, //节点分类的类目
            roam: true, //开启鼠标缩放和平移漫游
            focusNodeAdjacency: true, //在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            edgeLabel: { //边的label
                show: false,
                formatter: '{b}'
            },
            label: {
                position: 'inside',
                formatter: '{b}',
                fontSize: 8
            },
            lineStyle: {
                color: 'source', //(source/target)源节点或目标节点
                curveness: 0.3 //边的曲度
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            }
        }]
    };
    module.export = function () {
        myChart.setOption(option)
    }()
});