let chart = {}
let option = {
    title: {
        text: 'Candlesticks'
    },
    tooltip: {
      trigger: 'axis'  
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [{
        type: 'k',
        data: [
            [20, 34, 10,38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
        ]
    }]
}
chart.setOption(option)
