Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Non-Citizens in the United States by Race, 2021',
        align: 'left'
    },
    subtitle: {
    text: '<a href="https://data.census.gov/table/ACSDT5YSPT2021.B05001?t=-01&g=010XX00US_040XX00US12&y=2021">United States Census Bureau, Table B05001</a>',
    align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<span style="font-size: 1.2em"><b>{point.name}</b></span><br>' +
                    '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                connectorColor: 'rgba(128,128,128,0.5)'
            }
        }
    },
    series: [{
        name: 'Population',
        data: [
            { name: 'White', y: 7868021 },
            { name: 'Black/African American', y: 1666885 },
            { name: 'Native American/Alaskan', y: 162614 },
            { name: 'Asian', y: 4930038 },
            {name: 'Native Hawaiian/Pacific Islander', y: 87117 },
            {name: 'Other', y: 4614490 }
        ]
    }]
});

Highcharts.chart('container2', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Non-Citizens in the United States within Total Population, 2021',
        align: 'left'
    },
subtitle: {
    text: '<a href="https://data.census.gov/table/ACSDT5YSPT2021.B05001?t=-01&g=010XX00US_040XX00US12&y=2021">United States Census Bureau, Table B05001</a>',
    align: 'left'
    },
    xAxis: {
        categories: ['White', 'Black/African American', 'Native American/Alaskan', 'Asian', 'Native Hawaiian/Pacific Islander', 'Other']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Total Population (in Mil.)'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Citizens',
        data: [216921088, 39726127, 2560047, 13852886, 528440, 13768306],
        stack: 'Total Population'
    }, {
        name: 'Non-Citizens',
        data: [7868021, 1666885, 162614, 4930038, 87117, 4614490],
        stack: 'Total Population'
    }]
});
