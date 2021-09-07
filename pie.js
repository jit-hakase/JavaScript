let chart = {}
let option = {
    title: {
        text: 'Memory Used Rate'
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
                borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 5
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 70,
                 label: {
                    position: 'center',
                    textStyle: {
                       fontSize: 30,
                       color:'#39CCCC'
                    },
                    formatter: (arg) => {
                        return arg.value + '%'
                    }}
                },
                {value: 30}
            ]
        }
    ]
}
chart.setOption(option)
