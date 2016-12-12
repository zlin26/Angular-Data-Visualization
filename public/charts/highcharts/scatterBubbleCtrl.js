'use strict';

angular.module('charts')
    .controller('scatterBubbleCtrl', function ($scope,$http) {
      //init();
    	function init() {
        serverCall();
      }
    function serverCall() {
        $http.get('/api/scatterBubble')
          .success(function(data) {
            //console.log('coming to the controller:', data);
            $scope.charts = {};
            $scope.charts = data;

            console.log('value of chart data :', $scope.charts);
            callChart();
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      }
    $(function callChart()
        {
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
            pointFormat: '<tr><th colspan="2"><h3>{point.County}</h3></th></tr>' +
                '<tr><th>Population:</th><td>{point.Population}g</td></tr>' +
                '<tr><th>BusinessLisences:</th><td>{point.BusinessLisences}g</td></tr>' +
                '<tr><th>Crime:</th><td>{point.Crime}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.Year}'
                }
            }
        },

        series: [{
            data: [
 {
   "Population": 21623,
   "BusinessLisences": 32036,
   "Crime": 4480,
   "Year": 2011,
   "County": "asotin "
 },
 {
   "Population": 175177,
   "BusinessLisences": 77326,
   "Crime": 898,
   "Year": 2011,
   "County": "benton "
 },
 {
   "Population": 72453,
   "BusinessLisences": 83656,
   "Crime": 22589,
   "Year": 2011,
   "County": "chelan "
 },
 {
   "Population": 71404,
   "BusinessLisences": 81550,
   "Crime": 6632,
   "Year": 2011,
   "County": "clallam "
 },
 {
   "Population": 425363,
   "BusinessLisences": 51376,
   "Crime": 11192,
   "Year": 2011,
   "County": "clark "
 },
 {
   "Population": 102410,
   "BusinessLisences": 53472,
   "Crime": 220,
   "Year": 2011,
   "County": "cowlitz "
 },
 {
   "Population": 38431,
   "BusinessLisences": 53478,
   "Crime": 2027,
   "Year": 2011,
   "County": "douglas "
 },
 {
   "Population": 7551,
   "BusinessLisences": 40529,
   "Crime": 5106,
   "Year": 2011,
   "County": "ferry "
 },
 {
   "Population": 78163,
   "BusinessLisences": 83047,
   "Crime": 1503,
   "Year": 2011,
   "County": "franklin "
 },
 {
   "Population": 89120,
   "BusinessLisences": 44305,
   "Crime": 3072,
   "Year": 2011,
   "County": "grant "
 },
 {
   "Population": 72797,
   "BusinessLisences": 41670,
   "Crime": 7824,
   "Year": 2011,
   "County": "grays harbor "
 },
 {
   "Population": 78506,
   "BusinessLisences": 34597,
   "Crime": 21422,
   "Year": 2011,
   "County": "island "
 },
 {
   "Population": 29872,
   "BusinessLisences": 31403,
   "Crime": 3088,
   "Year": 2011,
   "County": "jefferson "
 },
 {
   "Population": 1931249,
   "BusinessLisences": 53934,
   "Crime": 5558,
   "Year": 2011,
   "County": "king "
 },
 {
   "Population": 251133,
   "BusinessLisences": 44241,
   "Crime": 1950,
   "Year": 2011,
   "County": "kitsap "
 },
 {
   "Population": 40915,
   "BusinessLisences": 49214,
   "Crime": 3278,
   "Year": 2011,
   "County": "kittitas "
 },
 {
   "Population": 20318,
   "BusinessLisences": 67839,
   "Crime": 5244,
   "Year": 2011,
   "County": "klickitat "
 },
 {
   "Population": 75455,
   "BusinessLisences": 67727,
   "Crime": 1210,
   "Year": 2011,
   "County": "lewis "
 },
 {
   "Population": 10570,
   "BusinessLisences": 64136,
   "Crime": 3274,
   "Year": 2011,
   "County": "lincoln "
 },
 {
   "Population": 60699,
   "BusinessLisences": 43381,
   "Crime": 2022,
   "Year": 2011,
   "County": "mason "
 },
 {
   "Population": 41120,
   "BusinessLisences": 53021,
   "Crime": 8169,
   "Year": 2011,
   "County": "okanogan "
 },
 {
   "Population": 20920,
   "BusinessLisences": 47977,
   "Crime": 17645,
   "Year": 2011,
   "County": "pacific "
 },
 {
   "Population": 13001,
   "BusinessLisences": 57832,
   "Crime": 1183,
   "Year": 2011,
   "County": "pend oreille "
 },
 {
   "Population": 795225,
   "BusinessLisences": 47594,
   "Crime": 3335,
   "Year": 2011,
   "County": "pierce "
 },
 {
   "Population": 15769,
   "BusinessLisences": 31951,
   "Crime": 623,
   "Year": 2011,
   "County": "san juan "
 },
 {
   "Population": 116901,
   "BusinessLisences": 37757,
   "Crime": 1741,
   "Year": 2011,
   "County": "skagit "
 },
 {
   "Population": 11066,
   "BusinessLisences": 47375,
   "Crime": 11225,
   "Year": 2011,
   "County": "skamania "
 },
 {
   "Population": 713335,
   "BusinessLisences": 46915,
   "Crime": 7094,
   "Year": 2011,
   "County": "snohomish "
 },
 {
   "Population": 471221,
   "BusinessLisences": 52131,
   "Crime": 14406,
   "Year": 2011,
   "County": "spokane "
 },
 {
   "Population": 43531,
   "BusinessLisences": 54018,
   "Crime": 649,
   "Year": 2011,
   "County": "stevens "
 },
 {
   "Population": 252264,
   "BusinessLisences": 36889,
   "Crime": 852,
   "Year": 2011,
   "County": "thurston "
 },
 {
   "Population": 3978,
   "BusinessLisences": 71361,
   "Crime": 470,
   "Year": 2011,
   "County": "wahkiakum "
 },
 {
   "Population": 201140,
   "BusinessLisences": 75593,
   "Crime": 22320,
   "Year": 2011,
   "County": "whatcom "
 },
 {
   "Population": 44776,
   "BusinessLisences": 66399,
   "Crime": 20329,
   "Year": 2011,
   "County": "whitman "
 },
 {
   "Population": 243231,
   "BusinessLisences": 78820,
   "Crime": 1803,
   "Year": 2011,
   "County": "yakima "
 },
 {
   "Population": 22704,
   "BusinessLisences": 70407,
   "Crime": 4882,
   "Year": 2012,
   "County": "asotin "
 },
 {
   "Population": 183936,
   "BusinessLisences": 33075,
   "Crime": 990,
   "Year": 2012,
   "County": "benton "
 },
 {
   "Population": 76076,
   "BusinessLisences": 52876,
   "Crime": 24306,
   "Year": 2012,
   "County": "chelan "
 },
 {
   "Population": 74974,
   "BusinessLisences": 48598,
   "Crime": 7356,
   "Year": 2012,
   "County": "clallam "
 },
 {
   "Population": 446631,
   "BusinessLisences": 77726,
   "Crime": 12300,
   "Year": 2012,
   "County": "clark "
 },
 {
   "Population": 107530,
   "BusinessLisences": 72109,
   "Crime": 236,
   "Year": 2012,
   "County": "cowlitz "
 },
 {
   "Population": 40353,
   "BusinessLisences": 48823,
   "Crime": 2167,
   "Year": 2012,
   "County": "douglas "
 },
 {
   "Population": 7929,
   "BusinessLisences": 76423,
   "Crime": 5701,
   "Year": 2012,
   "County": "ferry "
 },
 {
   "Population": 82071,
   "BusinessLisences": 70345,
   "Crime": 1616,
   "Year": 2012,
   "County": "franklin "
 },
 {
   "Population": 93576,
   "BusinessLisences": 72203,
   "Crime": 3561,
   "Year": 2012,
   "County": "grant "
 },
 {
   "Population": 76437,
   "BusinessLisences": 77178,
   "Crime": 8263,
   "Year": 2012,
   "County": "grays harbor "
 },
 {
   "Population": 82431,
   "BusinessLisences": 56908,
   "Crime": 23328,
   "Year": 2012,
   "County": "island "
 },
 {
   "Population": 31366,
   "BusinessLisences": 71071,
   "Crime": 3326,
   "Year": 2012,
   "County": "jefferson "
 },
 {
   "Population": 2027811,
   "BusinessLisences": 45312,
   "Crime": 6165,
   "Year": 2012,
   "County": "king "
 },
 {
   "Population": 263690,
   "BusinessLisences": 59778,
   "Crime": 2135,
   "Year": 2012,
   "County": "kitsap "
 },
 {
   "Population": 42961,
   "BusinessLisences": 68344,
   "Crime": 3727,
   "Year": 2012,
   "County": "kittitas "
 },
 {
   "Population": 21334,
   "BusinessLisences": 34346,
   "Crime": 5583,
   "Year": 2012,
   "County": "klickitat "
 },
 {
   "Population": 79228,
   "BusinessLisences": 81851,
   "Crime": 1363,
   "Year": 2012,
   "County": "lewis "
 },
 {
   "Population": 11098,
   "BusinessLisences": 80008,
   "Crime": 3529,
   "Year": 2012,
   "County": "lincoln "
 },
 {
   "Population": 63734,
   "BusinessLisences": 66699,
   "Crime": 2131,
   "Year": 2012,
   "County": "mason "
 },
 {
   "Population": 43176,
   "BusinessLisences": 61817,
   "Crime": 8943,
   "Year": 2012,
   "County": "okanogan "
 },
 {
   "Population": 21966,
   "BusinessLisences": 37490,
   "Crime": 18904,
   "Year": 2012,
   "County": "pacific "
 },
 {
   "Population": 13651,
   "BusinessLisences": 55584,
   "Crime": 1346,
   "Year": 2012,
   "County": "pend oreille "
 },
 {
   "Population": 834986,
   "BusinessLisences": 55219,
   "Crime": 3674,
   "Year": 2012,
   "County": "pierce "
 },
 {
   "Population": 16557,
   "BusinessLisences": 42101,
   "Crime": 596,
   "Year": 2012,
   "County": "san juan "
 },
 {
   "Population": 122746,
   "BusinessLisences": 64180,
   "Crime": 1965,
   "Year": 2012,
   "County": "skagit "
 },
 {
   "Population": 11619,
   "BusinessLisences": 78062,
   "Crime": 12149,
   "Year": 2012,
   "County": "skamania "
 },
 {
   "Population": 749002,
   "BusinessLisences": 82348,
   "Crime": 7783,
   "Year": 2012,
   "County": "snohomish "
 },
 {
   "Population": 494782,
   "BusinessLisences": 39336,
   "Crime": 15950,
   "Year": 2012,
   "County": "spokane "
 },
 {
   "Population": 45708,
   "BusinessLisences": 55046,
   "Crime": 762,
   "Year": 2012,
   "County": "stevens "
 },
 {
   "Population": 264877,
   "BusinessLisences": 70356,
   "Crime": 972,
   "Year": 2012,
   "County": "thurston "
 },
 {
   "Population": 4177,
   "BusinessLisences": 64660,
   "Crime": 517,
   "Year": 2012,
   "County": "wahkiakum "
 },
 {
   "Population": 211197,
   "BusinessLisences": 82796,
   "Crime": 24486,
   "Year": 2012,
   "County": "whatcom "
 },
 {
   "Population": 47015,
   "BusinessLisences": 57537,
   "Crime": 21915,
   "Year": 2012,
   "County": "whitman "
 },
 {
   "Population": 255393,
   "BusinessLisences": 80330,
   "Crime": 1990,
   "Year": 2012,
   "County": "yakima "
 },
 {
   "Population": 23839,
   "BusinessLisences": 74481,
   "Crime": 776,
   "Year": 2013,
   "County": "asotin "
 },
 {
   "Population": 193133,
   "BusinessLisences": 58309,
   "Crime": 128,
   "Year": 2013,
   "County": "benton "
 },
 {
   "Population": 79880,
   "BusinessLisences": 76793,
   "Crime": 3816,
   "Year": 2013,
   "County": "chelan "
 },
 {
   "Population": 78723,
   "BusinessLisences": 45097,
   "Crime": 1116,
   "Year": 2013,
   "County": "clallam "
 },
 {
   "Population": 468963,
   "BusinessLisences": 52130,
   "Crime": 1817,
   "Year": 2013,
   "County": "clark "
 },
 {
   "Population": 112906,
   "BusinessLisences": 60818,
   "Crime": 43,
   "Year": 2013,
   "County": "cowlitz "
 },
 {
   "Population": 42371,
   "BusinessLisences": 69063,
   "Crime": 331,
   "Year": 2013,
   "County": "douglas "
 },
 {
   "Population": 8325,
   "BusinessLisences": 57447,
   "Crime": 832,
   "Year": 2013,
   "County": "ferry "
 },
 {
   "Population": 86175,
   "BusinessLisences": 47827,
   "Crime": 233,
   "Year": 2013,
   "County": "franklin "
 },
 {
   "Population": 98255,
   "BusinessLisences": 56202,
   "Crime": 516,
   "Year": 2013,
   "County": "grant "
 },
 {
   "Population": 80259,
   "BusinessLisences": 64598,
   "Crime": 1269,
   "Year": 2013,
   "County": "grays harbor "
 },
 {
   "Population": 86553,
   "BusinessLisences": 71316,
   "Crime": 3530,
   "Year": 2013,
   "County": "island "
 },
 {
   "Population": 32934,
   "BusinessLisences": 54017,
   "Crime": 499,
   "Year": 2013,
   "County": "jefferson "
 },
 {
   "Population": 2129202,
   "BusinessLisences": 67926,
   "Crime": 962,
   "Year": 2013,
   "County": "king "
 },
 {
   "Population": 276874,
   "BusinessLisences": 66008,
   "Crime": 339,
   "Year": 2013,
   "County": "kitsap "
 },
 {
   "Population": 45109,
   "BusinessLisences": 50062,
   "Crime": 559,
   "Year": 2013,
   "County": "kittitas "
 },
 {
   "Population": 22401,
   "BusinessLisences": 65352,
   "Crime": 889,
   "Year": 2013,
   "County": "klickitat "
 },
 {
   "Population": 83189,
   "BusinessLisences": 44369,
   "Crime": 232,
   "Year": 2013,
   "County": "lewis "
 },
 {
   "Population": 11653,
   "BusinessLisences": 64697,
   "Crime": 531,
   "Year": 2013,
   "County": "lincoln "
 },
 {
   "Population": 66921,
   "BusinessLisences": 79632,
   "Crime": 318,
   "Year": 2013,
   "County": "mason "
 },
 {
   "Population": 45335,
   "BusinessLisences": 59314,
   "Crime": 1334,
   "Year": 2013,
   "County": "okanogan "
 },
 {
   "Population": 23064,
   "BusinessLisences": 64703,
   "Crime": 2829,
   "Year": 2013,
   "County": "pacific "
 },
 {
   "Population": 14334,
   "BusinessLisences": 49464,
   "Crime": 206,
   "Year": 2013,
   "County": "pend oreille "
 },
 {
   "Population": 876735,
   "BusinessLisences": 42999,
   "Crime": 532,
   "Year": 2013,
   "County": "pierce "
 },
 {
   "Population": 17385,
   "BusinessLisences": 76182,
   "Crime": 81,
   "Year": 2013,
   "County": "san juan "
 },
 {
   "Population": 128883,
   "BusinessLisences": 69147,
   "Crime": 303,
   "Year": 2013,
   "County": "skagit "
 },
 {
   "Population": 12200,
   "BusinessLisences": 83341,
   "Crime": 1892,
   "Year": 2013,
   "County": "skamania "
 },
 {
   "Population": 786452,
   "BusinessLisences": 76864,
   "Crime": 1192,
   "Year": 2013,
   "County": "snohomish "
 },
 {
   "Population": 519521,
   "BusinessLisences": 42093,
   "Crime": 2494,
   "Year": 2013,
   "County": "spokane "
 },
 {
   "Population": 47993,
   "BusinessLisences": 47072,
   "Crime": 125,
   "Year": 2013,
   "County": "stevens "
 },
 {
   "Population": 278121,
   "BusinessLisences": 70298,
   "Crime": 138,
   "Year": 2013,
   "County": "thurston "
 },
 {
   "Population": 4386,
   "BusinessLisences": 33592,
   "Crime": 64,
   "Year": 2013,
   "County": "wahkiakum "
 },
 {
   "Population": 221757,
   "BusinessLisences": 72145,
   "Crime": 3721,
   "Year": 2013,
   "County": "whatcom "
 },
 {
   "Population": 49366,
   "BusinessLisences": 41402,
   "Crime": 3351,
   "Year": 2013,
   "County": "whitman "
 },
 {
   "Population": 268163,
   "BusinessLisences": 30145,
   "Crime": 305,
   "Year": 2013,
   "County": "yakima "
 },
 {
   "Population": 25031,
   "BusinessLisences": 77414,
   "Crime": 1106,
   "Year": 2014,
   "County": "asotin "
 },
 {
   "Population": 202790,
   "BusinessLisences": 56192,
   "Crime": 225,
   "Year": 2014,
   "County": "benton "
 },
 {
   "Population": 83874,
   "BusinessLisences": 33138,
   "Crime": 5461,
   "Year": 2014,
   "County": "chelan "
 },
 {
   "Population": 82659,
   "BusinessLisences": 61333,
   "Crime": 1612,
   "Year": 2014,
   "County": "clallam "
 },
 {
   "Population": 492411,
   "BusinessLisences": 77159,
   "Crime": 2792,
   "Year": 2014,
   "County": "clark "
 },
 {
   "Population": 118551,
   "BusinessLisences": 59908,
   "Crime": 77,
   "Year": 2014,
   "County": "cowlitz "
 },
 {
   "Population": 44490,
   "BusinessLisences": 83237,
   "Crime": 499,
   "Year": 2014,
   "County": "douglas "
 },
 {
   "Population": 8741,
   "BusinessLisences": 81119,
   "Crime": 1255,
   "Year": 2014,
   "County": "ferry "
 },
 {
   "Population": 90484,
   "BusinessLisences": 53947,
   "Crime": 360,
   "Year": 2014,
   "County": "franklin "
 },
 {
   "Population": 103168,
   "BusinessLisences": 55754,
   "Crime": 774,
   "Year": 2014,
   "County": "grant "
 },
 {
   "Population": 84272,
   "BusinessLisences": 60820,
   "Crime": 1919,
   "Year": 2014,
   "County": "grays harbor "
 },
 {
   "Population": 90881,
   "BusinessLisences": 57044,
   "Crime": 5227,
   "Year": 2014,
   "County": "island "
 },
 {
   "Population": 34581,
   "BusinessLisences": 60554,
   "Crime": 751,
   "Year": 2014,
   "County": "jefferson "
 },
 {
   "Population": 2235662,
   "BusinessLisences": 51499,
   "Crime": 1423,
   "Year": 2014,
   "County": "king "
 },
 {
   "Population": 290718,
   "BusinessLisences": 32686,
   "Crime": 509,
   "Year": 2014,
   "County": "kitsap "
 },
 {
   "Population": 47364,
   "BusinessLisences": 50069,
   "Crime": 799,
   "Year": 2014,
   "County": "kittitas "
 },
 {
   "Population": 23521,
   "BusinessLisences": 45119,
   "Crime": 1283,
   "Year": 2014,
   "County": "klickitat "
 },
 {
   "Population": 87348,
   "BusinessLisences": 56664,
   "Crime": 317,
   "Year": 2014,
   "County": "lewis "
 },
 {
   "Population": 12236,
   "BusinessLisences": 31628,
   "Crime": 779,
   "Year": 2014,
   "County": "lincoln "
 },
 {
   "Population": 70267,
   "BusinessLisences": 83102,
   "Crime": 451,
   "Year": 2014,
   "County": "mason "
 },
 {
   "Population": 47602,
   "BusinessLisences": 44659,
   "Crime": 2069,
   "Year": 2014,
   "County": "okanogan "
 },
 {
   "Population": 24217,
   "BusinessLisences": 80935,
   "Crime": 4340,
   "Year": 2014,
   "County": "pacific "
 },
 {
   "Population": 15051,
   "BusinessLisences": 41148,
   "Crime": 280,
   "Year": 2014,
   "County": "pend oreille "
 },
 {
   "Population": 920572,
   "BusinessLisences": 51662,
   "Crime": 887,
   "Year": 2014,
   "County": "pierce "
 },
 {
   "Population": 18254,
   "BusinessLisences": 73889,
   "Crime": 137,
   "Year": 2014,
   "County": "san juan "
 },
 {
   "Population": 135327,
   "BusinessLisences": 70725,
   "Crime": 416,
   "Year": 2014,
   "County": "skagit "
 },
 {
   "Population": 12810,
   "BusinessLisences": 64251,
   "Crime": 2803,
   "Year": 2014,
   "County": "skamania "
 },
 {
   "Population": 825775,
   "BusinessLisences": 57874,
   "Crime": 1803,
   "Year": 2014,
   "County": "snohomish "
 },
 {
   "Population": 545497,
   "BusinessLisences": 69559,
   "Crime": 3604,
   "Year": 2014,
   "County": "spokane "
 },
 {
   "Population": 50393,
   "BusinessLisences": 75243,
   "Crime": 146,
   "Year": 2014,
   "County": "stevens "
 },
 {
   "Population": 292027,
   "BusinessLisences": 62826,
   "Crime": 198,
   "Year": 2014,
   "County": "thurston "
 },
 {
   "Population": 4605,
   "BusinessLisences": 68987,
   "Crime": 121,
   "Year": 2014,
   "County": "wahkiakum "
 },
 {
   "Population": 232845,
   "BusinessLisences": 74242,
   "Crime": 5473,
   "Year": 2014,
   "County": "whatcom "
 },
 {
   "Population": 51834,
   "BusinessLisences": 54229,
   "Crime": 4963,
   "Year": 2014,
   "County": "whitman "
 },
 {
   "Population": 281571,
   "BusinessLisences": 82771,
   "Crime": 451,
   "Year": 2014,
   "County": "yakima "
 },
 {
   "Population": 26283,
   "BusinessLisences": 64526,
   "Crime": 2437,
   "Year": 2015,
   "County": "asotin "
 },
 {
   "Population": 212930,
   "BusinessLisences": 70813,
   "Crime": 493,
   "Year": 2015,
   "County": "benton "
 },
 {
   "Population": 88068,
   "BusinessLisences": 52410,
   "Crime": 12444,
   "Year": 2015,
   "County": "chelan "
 },
 {
   "Population": 86792,
   "BusinessLisences": 43838,
   "Crime": 3817,
   "Year": 2015,
   "County": "clallam "
 },
 {
   "Population": 517032,
   "BusinessLisences": 45500,
   "Crime": 6204,
   "Year": 2015,
   "County": "clark "
 },
 {
   "Population": 124479,
   "BusinessLisences": 46619,
   "Crime": 122,
   "Year": 2015,
   "County": "cowlitz "
 },
 {
   "Population": 46714,
   "BusinessLisences": 31976,
   "Crime": 1131,
   "Year": 2015,
   "County": "douglas "
 },
 {
   "Population": 9178,
   "BusinessLisences": 79415,
   "Crime": 2705,
   "Year": 2015,
   "County": "ferry "
 },
 {
   "Population": 95008,
   "BusinessLisences": 54913,
   "Crime": 799,
   "Year": 2015,
   "County": "franklin "
 },
 {
   "Population": 108326,
   "BusinessLisences": 76572,
   "Crime": 1755,
   "Year": 2015,
   "County": "grant "
 },
 {
   "Population": 88486,
   "BusinessLisences": 34981,
   "Crime": 4253,
   "Year": 2015,
   "County": "grays harbor "
 },
 {
   "Population": 95425,
   "BusinessLisences": 36861,
   "Crime": 11929,
   "Year": 2015,
   "County": "island "
 },
 {
   "Population": 36310,
   "BusinessLisences": 52257,
   "Crime": 1729,
   "Year": 2015,
   "County": "jefferson "
 },
 {
   "Population": 2347445,
   "BusinessLisences": 36485,
   "Crime": 3118,
   "Year": 2015,
   "County": "king "
 },
 {
   "Population": 305254,
   "BusinessLisences": 51470,
   "Crime": 1123,
   "Year": 2015,
   "County": "kitsap "
 },
 {
   "Population": 49732,
   "BusinessLisences": 59538,
   "Crime": 1832,
   "Year": 2015,
   "County": "kittitas "
 },
 {
   "Population": 24697,
   "BusinessLisences": 78216,
   "Crime": 2843,
   "Year": 2015,
   "County": "klickitat "
 },
 {
   "Population": 91715,
   "BusinessLisences": 47139,
   "Crime": 676,
   "Year": 2015,
   "County": "lewis "
 },
 {
   "Population": 12848,
   "BusinessLisences": 39692,
   "Crime": 1846,
   "Year": 2015,
   "County": "lincoln "
 },
 {
   "Population": 73780,
   "BusinessLisences": 30061,
   "Crime": 1045,
   "Year": 2015,
   "County": "mason "
 },
 {
   "Population": 49982,
   "BusinessLisences": 65909,
   "Crime": 4531,
   "Year": 2015,
   "County": "okanogan "
 },
 {
   "Population": 25428,
   "BusinessLisences": 75213,
   "Crime": 9985,
   "Year": 2015,
   "County": "pacific "
 },
 {
   "Population": 15804,
   "BusinessLisences": 83304,
   "Crime": 686,
   "Year": 2015,
   "County": "pend oreille "
 },
 {
   "Population": 966601,
   "BusinessLisences": 58293,
   "Crime": 1970,
   "Year": 2015,
   "County": "pierce "
 },
 {
   "Population": 19167,
   "BusinessLisences": 35294,
   "Crime": 294,
   "Year": 2015,
   "County": "san juan "
 },
 {
   "Population": 142093,
   "BusinessLisences": 67524,
   "Crime": 1040,
   "Year": 2015,
   "County": "skagit "
 },
 {
   "Population": 13450,
   "BusinessLisences": 57936,
   "Crime": 6208,
   "Year": 2015,
   "County": "skamania "
 },
 {
   "Population": 867064,
   "BusinessLisences": 75519,
   "Crime": 3933,
   "Year": 2015,
   "County": "snohomish "
 },
 {
   "Population": 572772,
   "BusinessLisences": 42243,
   "Crime": 8038,
   "Year": 2015,
   "County": "spokane "
 },
 {
   "Population": 52913,
   "BusinessLisences": 52111,
   "Crime": 370,
   "Year": 2015,
   "County": "stevens "
 },
 {
   "Population": 306628,
   "BusinessLisences": 62487,
   "Crime": 521,
   "Year": 2015,
   "County": "thurston "
 },
 {
   "Population": 4835,
   "BusinessLisences": 75687,
   "Crime": 252,
   "Year": 2015,
   "County": "wahkiakum "
 },
 {
   "Population": 244487,
   "BusinessLisences": 63549,
   "Crime": 12657,
   "Year": 2015,
   "County": "whatcom "
 },
 {
   "Population": 54426,
   "BusinessLisences": 83648,
   "Crime": 11206,
   "Year": 2015,
   "County": "whitman "
 },
 {
   "Population": 295650,
   "BusinessLisences": 75523,
   "Crime": 1013,
   "Year": 2015,
   "County": "yakima "
 }
]
}]

});

    init();
});
});