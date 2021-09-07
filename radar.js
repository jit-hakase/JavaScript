let chart = {}
let option = {
    title: {
        text: 'Ability'
    },
    radar: {
        indicator: [
            { name: 'Linux', max: 100 },
            { name: 'C++', max: 100 },
            { name: 'JavaScript', max: 100 },
            { name: 'Java', max: 100 },
            { name: 'SQL', max: 100 },
            { name: 'Python', max: 100 }
        ]
    },
    series: [{
        type: 'radar',
        data: [
            {
                value: [100, 100, 100, 100, 100, 100],
            },
            {
                areaStyle: {},
                value: [78, 92, 68, 73, 64, 76],
            }
        ]
    }]
}
chart.setOption(option)
