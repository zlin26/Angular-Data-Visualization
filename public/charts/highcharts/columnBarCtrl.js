'use strict';

angular.module('charts')
    .controller('columnBarCtrl', function ($scope,$http) {
      init();
    	function init() {
        serverCall();
      }
    function serverCall() {
        $http.get('/api/columnBar')
          .success(function(data) {
            console.log('coming to the controller:', data);
            $scope.charts = {};
            $scope.charts = data;

            console.log('value of chart data :', $scope.charts);
            callChart();
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      }
      $(function callChart() {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
});
/*
    function callChart() {
      var state = [];
      var numcolleges = [];
      $scope.charts.forEach(function(value,key) {
        console.log('value of value :', value);
        state.push(value.state);
        numcolleges.push(value.numcolleges);
       });
       console.log('state: ', state);
       console.log('numcolleges: ', numcolleges);
       Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            series: [{
            name: 'States',
            data: numcolleges
            }],
            title: {
                text: 'States with number of colleges'
            },
            xAxis: {
              categories: state
            },
            yAxis: {
                title: {
                    text: 'No of colleges'
                }
            }
        });
    }
*/
    });
