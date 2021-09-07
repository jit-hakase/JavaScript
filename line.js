let chart = {}
let option = {
    title: {
        text: 'kohlrabi Price'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Week1', 'Week2', 'Week3', 'Week4']
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Week1',
        data: [91, 130, 99, 40, 33, 27, 26],
        type: 'line'
    },
    {   
        name: 'Week2',
        data: [81, 115, 44, 67, 87, 101, 135],
        type: 'line'
    },
    {   
        name: 'Week3',
        data: [107, 117, 144, 164, 155, 91, 72],
        type: 'line'
    },
    {   
        name: 'Week4',
        data: [124, 155, 131, 99, 84, 108, 122],
        type: 'line'
    }]
}
chart.setOption(option)
