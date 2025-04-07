var firstChart = {
    series: [{
        name: 'series1',
        data: [0, 10, 20, 30, 40]
    }],
    chart: {
        height: 350,
        type: 'area',
        
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'category',
        categories: [
           "week1", "week2", "week3", "week4", "week5", "week6", "week7"
        ],
        labels: {
            style: {
                colors: '#7E84A3',
                fontSize: '14px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#7E84A3',
                fontSize: '14px'
            }
        }
    },
    colors: ['#FF7F3E', '#00E396'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.55,
            opacityTo: 1,
            stops: [0, 100]
        }
    }
};

var chartOne = new ApexCharts(document.querySelector("#chart"), firstChart);
chartOne.render();
setInterval(() => {
    var newData = firstChart.series[0].data.map(value => value + Math.floor(Math.random() * 10 - 5)); 
    chartOne.updateSeries([{
        data: newData
    }]);
}, 2000);

/*=====second chart=====*/
var secondChart = {
    series: [{
        name: 'series1',
        data: [0, 10, 20, 30, 40]
    }],
    chart: {
        height: 350,
        type: 'line',
       
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'category',
        categories: [  "English", "Math", "Science", "Arabic"
        ],
        labels: {
            style: {
                colors: '#7E84A3',
                fontSize: '14px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#7E84A3',
                fontSize: '14px'
            }
        }
    },
    colors: ['#FF7F3E'],
   
};

var chartTwo = new ApexCharts(document.querySelector("#secondChart"), secondChart);
chartTwo.render();

/*=====chart-three===== */
var thirdChartConfig = {
    series: [60, 40],
    chart: {
        type: 'donut',
        height: '100%',
        width: '100%'
    },
    labels: ["Male", "Female"], 
    colors: ['#FF7F3E', '#F9CB43'], 
    legend: {
        position: 'bottom'
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: '100%',
                height: '100%'
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var thirdChart = new ApexCharts(document.querySelector("#third-chart"), thirdChartConfig);
thirdChart.render();
