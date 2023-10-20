Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apricots', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Timothy and Trisha\'s house'
      }
    },
    series: [{
      name: 'Timothy',
      data: [6, 1, 0, 4]
    }, {
      name: 'Trisha',
      data: [6, 5, 7, 3]
    }]
  });
