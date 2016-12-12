'use strict';

angular.module('charts')
    .controller('columnBarCtrl', function ($scope,$http) {
      //init();
    	function init() {
        serverCall();
      }
    function serverCall() {
        $http.get('/api/columnBar')
          .success(function(data) {
            //console.log('coming to the controller:', data);
            $scope.charts = {};
            $scope.charts = data;

            //console.log('value of chart data :', $scope.charts);
            callChart();
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      }
      function callChart() {
        var burglary = [];
        //var date = [];
        //var month =[];
        var homicide =[];
        var larceny = [];
        var sex = [];

        $scope.charts.forEach(function(value,key) 
            {
                //year.push(value.year);
                //month.push(value.month);
                //date.push(Date.UTC(value.year, value.month))
                burglary.push(value.burglary);
                homicide.push(value.homicide);
                larceny.push(value.larceny);
                sex.push(value.sexual_assault);
            }
        );
        Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series:
        [
        {
            name: 'Burglary',
            data: burglary
        },
        {
            name: "Homicide",
            data: homicide
        },
        {
            name: "Larceny",
            data: larceny
        },
        {
            name: "Sexual Assault",
            data: sex
        }
        ]
    });
};
    init();
    });
