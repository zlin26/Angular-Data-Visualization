'use strict';

angular.module('charts').controller
('GeographicalCtrl', 
    function ($scope,$http)
    {
        init();
    	function init()
        {
            serverCall();
        }
        function serverCall() 
        {
            $http.get('/api/Geographical')
            .success
            (
                function(data)
                {
                //console.log('coming to the controller:', data);
                    $scope.charts = {};
                    $scope.charts = data;

                    //console.log('value of chart data :', $scope.charts);
                    console.log('Want to call callChart');
                    callChart();
                }
            )
            .error
            (
                function(data)
                {
                    console.log('Error: ' + data);
                }
            );
        }
        $(function callChart() 
        {
            // Prepare demo data
            var data = 
            [
        {
            "hc-key": "us-wa-075",
            "value": 0
        },
        {
            "hc-key": "us-wa-043",
            "value": 1
        },
        {
            "hc-key": "us-wa-069",
            "value": 2
        },
        {
            "hc-key": "us-wa-057",
            "value": 3
        },
        {
            "hc-key": "us-wa-053",
            "value": 4
        },
        {
            "hc-key": "us-wa-031",
            "value": 5
        },
        {
            "hc-key": "us-wa-067",
            "value": 6
        },
        {
            "hc-key": "us-wa-027",
            "value": 7
        },
        {
            "hc-key": "us-wa-065",
            "value": 8
        },
        {
            "hc-key": "us-wa-073",
            "value": 9
        },
        {
            "hc-key": "us-wa-047",
            "value": 10
        },
        {
            "hc-key": "us-wa-049",
            "value": 11
        },
        {
            "hc-key": "us-wa-055",
            "value": 12
        },
        {
            "hc-key": "us-wa-019",
            "value": 13
        },
        {
            "hc-key": "us-wa-021",
            "value": 14
        },
        {
            "hc-key": "us-wa-001",
            "value": 15
        },
        {
            "hc-key": "us-wa-003",
            "value": 16
        },
        {
            "hc-key": "us-wa-035",
            "value": 17
        },
        {
            "hc-key": "us-wa-045",
            "value": 18
        },
        {
            "hc-key": "us-wa-041",
            "value": 19
        },
        {
            "hc-key": "us-wa-013",
            "value": 20
        },
        {
            "hc-key": "us-wa-029",
            "value": 21
        },
        {
            "hc-key": "us-wa-011",
            "value": 22
        },
        {
            "hc-key": "us-wa-037",
            "value": 23
        },
        {
            "hc-key": "us-wa-017",
            "value": 24
        },
        {
            "hc-key": "us-wa-023",
            "value": 25
        },
        {
            "hc-key": "us-wa-015",
            "value": 26
        },
        {
            "hc-key": "us-wa-071",
            "value": 27
        },
        {
            "hc-key": "us-wa-005",
            "value": 28
        },
        {
            "hc-key": "us-wa-061",
            "value": 29
        },
        {
            "hc-key": "us-wa-007",
            "value": 30
        },
        {
            "hc-key": "us-wa-033",
            "value": 31
        },
        {
            "hc-key": "us-wa-025",
            "value": 32
        },
        {
            "hc-key": "us-wa-063",
            "value": 33
        },
        {
            "hc-key": "us-wa-051",
            "value": 34
        },
        {
            "hc-key": "us-wa-009",
            "value": 35
        },
        {
            "hc-key": "us-wa-059",
            "value": 36
        },
        {
            "hc-key": "us-wa-039",
            "value": 37
        },
        {
            "hc-key": "us-wa-077",
            "value": 38
        }
            ];

            // Initiate the chart
            $('#container').highcharts
            (
                'Map',
                {
                    title : {text : 'Highmaps basic demo'},
                    subtitle : {text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/us/us-wa-all.js">Washington</a>'},
                    mapNavigation:
                    {
                        enabled: true,
                        buttonOptions:
                        {
                            verticalAlign: 'bottom'
                        }
                    },
                    colorAxis:{min: 0},

                    series : 
                    [
                    {
                        data : data,
                        mapData: Highcharts.maps["countries/us/us-wa-all"],
                        joinBy: 'hc-key',
                        name: 'Random data',
                        states: 
                        {
                            hover: {color: '#a4edba'}
                        },
                        dataLabels:
                        {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                    ]
                }
            );
        }
);

/*
    $(function callChart() {
    Highcharts.chart('container', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Sugar and fat intake per country'
        },

        subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Daily fat intake'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Daily sugar intake'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
            ]
        }]
    });
    });
*/