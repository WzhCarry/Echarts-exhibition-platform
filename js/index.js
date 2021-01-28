document.write("<script type=’text/javascript‘ src=’js/data.js‘></script>");
///////////////////////////////////////// 左1/////////////////////////////////////// 

document.getElementById("l1_title1").innerHTML = l1_title.name[0];
document.getElementById("l1_company1").innerHTML = l1_company.name[0];
document.getElementById("l1_title2").innerHTML = l1_title.name[1];
document.getElementById("l1_company2").innerHTML = l1_company.name[1];
document.getElementById("l1_title3").innerHTML = l1_title.name[2];
document.getElementById("l1_company3").innerHTML = l1_company.name[2];
document.getElementById("l1_title4").innerHTML = l1_title.name[3];
document.getElementById("l1_company4").innerHTML = l1_company.name[3];
document.getElementById("l1_title5").innerHTML = l1_title.name[4];
document.getElementById("l1_company5").innerHTML = l1_company.name[4];

///////////////////////////////////////// 右1/////////////////////////////////////// 


$(function() {
    var speed = 50; //数字越大速度越慢
    var tab = document.getElementById("demo");
    var tab1 = document.getElementById("demo1");
    var tab2 = document.getElementById("demo2");
    tab2.innerHTML = tab1.innerHTML; //克隆demo1为demo2
    tab.scrollTop = tab.scrollHeight

    function Marquee() {
        if (tab1.offsetTop - tab.scrollTop >= 0) //当滚动至demo1与demo2交界时
            tab.scrollTop += tab2.offsetHeight //demo跳到最顶端
        else {
            tab.scrollTop--
        }
    }
    var MyMar = setInterval(Marquee, speed);
    tab.onmouseover = function() {
        clearInterval(MyMar)
    }; //鼠标移上时清除定时器达到滚动停止的目的
    tab.onmouseout = function() {
        MyMar = setInterval(Marquee, speed)
    }; //鼠标移开时重设定时器
})


document.getElementById("r1_1").innerHTML = r1.name[0];
document.getElementById("r1_2").innerHTML = r1.name[1];
document.getElementById("r1_3").innerHTML = r1.name[2];
document.getElementById("r1_4").innerHTML = r1.name[3];
document.getElementById("r1_5").innerHTML = r1.name[4];
document.getElementById("r1_6").innerHTML = r1.name[5];
document.getElementById("r1_7").innerHTML = r1.name[6];
document.getElementById("r1_8").innerHTML = r1.name[7];
document.getElementById("r1_9").innerHTML = r1.name[8];
document.getElementById("r1_10").innerHTML = r1.name[9];

/////////////////////////////////////// 左3滚动/////////////////////////////////////// 
$(function() {
    var c = document.getElementById("container");
    var con1 = document.getElementById("con1");
    con1.innerHTML += con1.innerHTML; //把自身的内容变为原来的2倍
    // timer,t;
    var iHeight = 24;
    var d = 1000;
    var speed = 80;

    function sTop() {
        if (c.scrollTop % iHeight == 0) { //如果卷去的距离能够除尽一行的高度
        }
        if (c.scrollTop >= con1.scrollHeight / 2) { //如果卷去的高度>=整个ul高度的一半时
            c.scrollTop = 0;
            c.scrollTop = c.scrollTop - con1.scrollHeight / 2; //让ul回到原点  即c.scrollTop=0
        } else {
            c.scrollTop++; //如若不然，继续往上滚动
        }
    }

    function startMove() {
        c.scrollTop++;
        timer = setInterval(sTop, speed);
    }
    startMove();
    c.onmouseover = function() {
        clearInterval(timer);
        clearTimeout(t);
    }
    c.onmouseout = function() {
        timer = setInterval(sTop, speed);
    }
})
document.getElementById("l3_1").innerHTML = l3.l3_1;
document.getElementById("l3_2").innerHTML = l3.l3_2;
document.getElementById("l3_3").innerHTML = l3.l3_3;
document.getElementById("l3_4").innerHTML = l3.l3_4;
document.getElementById("l3_5").innerHTML = l3.l3_5;
document.getElementById("l3_6").innerHTML = l3.l3_6;
document.getElementById("l3_7").innerHTML = l3.l3_7;


/////////////////////////////////////////  右2 柱状图 /////////////////////////////////////// 
$(function() {
    var myColor = ["#6495ED", "#4169E1", "#4682B4", "#87CEFA", "#00BFFF", "#B0E0E6"];
    // 1. 实例化对象
    var myChart2 = echarts.init(document.querySelector(".chart2"));
    // 2. 指定配置和数据
    var option = {
        grid: {
            top: "5%",
            left: "40%",
            bottom: "2%",
            right: "12%"
                // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [{
                type: "category",
                inverse: true,
                data: r_bar.name,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色,大小为9
                axisLabel: {
                    color: "#fff",
                    fontSize: "12"
                }
            },
            {
                data: r_bar.data,
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [{
                name: "条",
                type: "bar",
                data: r_bar.percentage,
                yAxisIndex: 0,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function(params) {
                        // params 传进来的是柱子对象
                        // console.log(params);
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 10,
                //柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据  data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 11,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 2,
                    barBorderRadius: 10
                }
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart2.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart2.resize();
    });
});


/////////////////////////////////////////  右3 /////////////////////////////////////// 
$(function() {
    var c = document.getElementById("container2");
    var con2r = document.getElementById("con2");
    con2r.innerHTML += con2r.innerHTML; //把自身的内容变为原来的2倍
    // timer,t;
    var iHeight = 24;
    var d = 1000;
    var speed = 80;

    function sTop() {
        if (c.scrollTop % iHeight == 0) { //如果卷去的距离能够除尽一行的高度
        }
        if (c.scrollTop >= con2r.scrollHeight / 2) { //如果卷去的高度>=整个ul高度的一半时
            c.scrollTop = 0;
            c.scrollTop = c.scrollTop - con2r.scrollHeight / 2; //让ul回到原点  即c.scrollTop=0
        } else {
            c.scrollTop++; //如若不然，继续往上滚动
        }
    }

    function startMove() {
        c.scrollTop++;
        timer = setInterval(sTop, speed);
    }
    startMove();
    c.onmouseover = function() {
        clearInterval(timer);
        clearTimeout(t);
    }
    c.onmouseout = function() {
        timer = setInterval(sTop, speed);
    }
})
document.getElementById("r3r_1").innerHTML = r3r.r3r_1;
document.getElementById("r3r_2").innerHTML = r3r.r3r_2;
document.getElementById("r3r_3").innerHTML = r3r.r3r_3;
document.getElementById("r3r_4").innerHTML = r3r.r3r_4;
document.getElementById("r3r_5").innerHTML = r3r.r3r_5;
document.getElementById("r3r_6").innerHTML = r3r.r3r_6;
document.getElementById("r3r_7").innerHTML = r3r.r3r_7;
document.getElementById("r3r_8").innerHTML = r3r.r3r_8;
document.getElementById("r3r_9").innerHTML = r3r.r3r_9;
document.getElementById("r3r_10").innerHTML = r3r.r3r_10;


document.getElementById("r3l_1").innerHTML = r3l.r3l_1;
document.getElementById("r3l_2").innerHTML = r3l.r3l_2;
document.getElementById("r3l_3").innerHTML = r3l.r3l_3;
document.getElementById("r3l_4").innerHTML = r3l.r3l_4;
document.getElementById("r3l_5").innerHTML = r3l.r3l_5;
document.getElementById("r3l_6").innerHTML = r3l.r3l_6;
document.getElementById("r3l_7").innerHTML = r3l.r3l_7;
document.getElementById("r3l_8").innerHTML = r3l.r3l_8;
document.getElementById("r3l_9").innerHTML = r3l.r3l_9;
document.getElementById("r3l_10").innerHTML = r3l.r3l_10;



///////////////////////////////////////// 中地图 /////////////////////////////////////// 
$(function() {
    var myChart = echarts.init(document.querySelector(".chartmap"));
    var geoCoordMap = {
        华东: [121.4648, 31.2891],
        北京: [116.4551, 40.2539],
        华南: [113.5107, 23.2196],
        华中: [110.3896, 30.6628],
    };

    var HZData = [
        [{ name: "华中" }, { name: "北京", value: 100 }],
        [{ name: "华中" }, { name: "华东", value: 100 }],
        [{ name: "华中" }, { name: "华南", value: 100 }]
    ];

    var HNData = [
        [{ name: "华南" }, { name: "北京", value: 100 }],
        [{ name: "华南" }, { name: "华东", value: 100 }],
        [{ name: "华南" }, { name: "华中", value: 100 }]
    ];

    var BJData = [
        [{ name: "北京" }, { name: "华东", value: 100 }],
        [{ name: "北京" }, { name: "华中", value: 100 }],
        [{ name: "北京" }, { name: "华南", value: 100 }]
    ];
    var HDData = [
        [{ name: "华东" }, { name: "北京", value: 100 }],
        [{ name: "华东" }, { name: "华中", value: 100 }],
        [{ name: "华东" }, { name: "华南", value: 100 }]
    ];

    var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ["#065aab", "#066eab", "#00BFFF", "#B0E0E6"]; //航线的颜色
    var series = [];
    [
        ["华中", HZData],
        ["华南", HNData],
        ["华东", HDData],
        ["北京", BJData]
    ].forEach(function(item, i) {
        series.push({
            name: item[0] + " To",
            type: "lines",
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: "red", //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + " To",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + " To",
            type: "lines",
            zlevel: 3,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
                color: "yellow"
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + " To",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 4,
            rippleEffect: {
                brushType: "stroke"
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    formatter: "{b}"
                }
            },
            symbolSize: function(val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    var option = {
        tooltip: {
            trigger: "item",
            formatter: function(params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "";
                } else if (params.seriesType == "lines") {
                    return (
                        params.data.fromName +
                        "->" +
                        params.data.toName
                    );
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: "vertical",
            bottom: "100rem",
            left: "left",
            data: ["华中 To", "华南 To", "华东 To", "北京 To"],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true,
                    color: "#fff"
                }
            },
            // 把中国地图放大了1.2倍
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: "rgba(20, 41, 87,0.6)",
                    borderColor: "#195BB9",
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        myChart.resize();
    });
});



//////////////////////////////左2的网状图//////////////////////////////////////////
$(function() {
    var chart1 = echarts.init(document.getElementById("chart1"));
    var option = {
        radar: [{ // 雷达图坐标系组件，只适用于雷达图。
            center: ['50%', '50%'], // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: 60, // 圆的半径，数组的第一项是内半径，第二项是外半径。
            startAngle: 90, // 坐标系起始角度，也就是第一个指示器轴的角度。[ default: 90 ]
            name: { // (圆外的标签)雷达图每个指示器名称的配置项。
                formatter: '{value}',
                textStyle: {
                    fontSize: 12, //标签的大小设置
                    color: '#B0C4DE'
                }
            },
            nameGap: 12, // 指示器名称和指示器轴的距离。[ default: 15 ]
            splitNumber: 4, // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
            shape: 'circle', // 雷达图绘制类型，支持 'polygon'(多边形) 和 'circle'(圆)。[ default: 'polygon' ]
            axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
                lineStyle: {
                    color: '#fff', // 坐标轴线线的颜色。
                    width: 0.5, // 坐标轴线线宽。
                    type: 'solid', // 坐标轴线线的类型。
                }
            },
            splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                lineStyle: {
                    color: '#fff', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    // color: ['#B0C4DE'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            indicator: [{ // 雷达图的指示器，用来指定雷达图中的多个变量（维度）,跟data中 value 对应
                name: l2_net.name[0], // 指示器名称   
                // max: 10000, // 指示器的最大值，可选，建议设置 
                // color: '#B0C4DE', // 标签特定的颜色。
            }, {
                name: l2_net.name[1],
                // max: 8000,
            }, {
                name: l2_net.name[2],
                // max: 4000,
            }, {
                name: l2_net.name[3],
                // max: 4000,
            }, {
                name: l2_net.name[4],
                // max: 4000,
            }, {
                name: l2_net.name[5],
                // max: 4000,
            }]
        }],
        series: [{
            name: '雷达图', // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: 'radar', // 系列类型: 雷达图
            itemStyle: { // 折线拐点标志的样式。
                normal: { // 普通状态时的样式
                    lineStyle: {
                        width: 1
                    },
                    opacity: 0.7
                },
                emphasis: { // 高亮时的样式
                    lineStyle: {
                        width: 1
                    },
                    opacity: 1
                }
            },
            label: {
                show: true,
                position: [10, 5],
                color: '#ffeb7b',
            },
            data: [{ // 雷达图的数据是多变量（维度）的
                value: l2_net.value, // 其中的value项数组是具体的数据，每个值跟 radar.indicator 一一对应。
                symbol: 'circle', // 单个数据标记的图形。
                symbolSize: 5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                itemStyle: { // 单个拐点标志的样式设置。
                    normal: {
                        borderColor: '#191970', // 拐点的描边颜色。[ default: '#000' ]
                        borderWidth: 3, // 拐点的描边宽度，默认不描边。[ default: 0 ]
                    }
                },
                lineStyle: { // 单项线条样式。
                    normal: {
                        opacity: 0.3 // 图形透明度
                    }
                },
                areaStyle: { // 单项区域填充样式
                    normal: {
                        color: '#6495ED' // 填充的颜色。[ default: "#000" ]
                    }
                }
            }]
        }, ]
    };

    // 使用刚指定的配置项和数据显示图表
    chart1.setOption(option)
})



/////////////////////////////// 中间上半部分 ///////////////////////////////////
document.getElementById("center_1_num").innerHTML = center.num[0];
document.getElementById("center_1_name").innerHTML = center.name[0];
document.getElementById("center_2_num").innerHTML = center.num[1];
document.getElementById("center_2_name").innerHTML = center.name[1];
document.getElementById("center_3_num").innerHTML = center.num[2];
document.getElementById("center_3_name").innerHTML = center.name[2];
document.getElementById("center_4_num").innerHTML = center.num[3];
document.getElementById("center_4_name").innerHTML = center.name[3];