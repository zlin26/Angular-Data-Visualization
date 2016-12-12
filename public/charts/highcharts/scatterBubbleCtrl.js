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
            text: '!!!!!!!!!!!!!!'
        },

        subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Population'
            },
            labels: {
                format: '{value}'
            }
            /*,
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
            }]*/
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'BusinessLicense'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,
            /*plotLines: [{
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
            }]*/
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Population:</th><td>{point.x}</td></tr>' +
                '<tr><th>Business License:</th><td>{point.y}</td></tr>' +
                '<tr><th>Crime:</th><td>{point.z}</td></tr>',
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
 {
   "x": 21623,
   "y": 32036,
   "z": 4480,
   "name": 2011,
   "country": "asotin "
 },
 {
   "x": 175177,
   "y": 77326,
   "z": 898,
   "name": 2011,
   "country": "benton "
 },
 {
   "x": 72453,
   "y": 83656,
   "z": 22589,
   "name": 2011,
   "country": "chelan "
 },
 {
   "x": 71404,
   "y": 81550,
   "z": 6632,
   "name": 2011,
   "country": "clallam "
 },
 {
   "x": 425363,
   "y": 51376,
   "z": 11192,
   "name": 2011,
   "country": "clark "
 },
 {
   "x": 102410,
   "y": 53472,
   "z": 220,
   "name": 2011,
   "country": "cowlitz "
 },
 {
   "x": 38431,
   "y": 53478,
   "z": 2027,
   "name": 2011,
   "country": "douglas "
 },
 {
   "x": 7551,
   "y": 40529,
   "z": 5106,
   "name": 2011,
   "country": "ferry "
 },
 {
   "x": 78163,
   "y": 83047,
   "z": 1503,
   "name": 2011,
   "country": "franklin "
 },
 {
   "x": 89120,
   "y": 44305,
   "z": 3072,
   "name": 2011,
   "country": "grant "
 },
 {
   "x": 72797,
   "y": 41670,
   "z": 7824,
   "name": 2011,
   "country": "grays harbor "
 },
 {
   "x": 78506,
   "y": 34597,
   "z": 21422,
   "name": 2011,
   "country": "island "
 },
 {
   "x": 29872,
   "y": 31403,
   "z": 3088,
   "name": 2011,
   "country": "jefferson "
 },
 {
   "x": 1931249,
   "y": 53934,
   "z": 5558,
   "name": 2011,
   "country": "king "
 },
 {
   "x": 251133,
   "y": 44241,
   "z": 1950,
   "name": 2011,
   "country": "kitsap "
 },
 {
   "x": 40915,
   "y": 49214,
   "z": 3278,
   "name": 2011,
   "country": "kittitas "
 },
 {
   "x": 20318,
   "y": 67839,
   "z": 5244,
   "name": 2011,
   "country": "klickitat "
 },
 {
   "x": 75455,
   "y": 67727,
   "z": 1210,
   "name": 2011,
   "country": "lewis "
 },
 {
   "x": 10570,
   "y": 64136,
   "z": 3274,
   "name": 2011,
   "country": "lincoln "
 },
 {
   "x": 60699,
   "y": 43381,
   "z": 2022,
   "name": 2011,
   "country": "mason "
 },
 {
   "x": 41120,
   "y": 53021,
   "z": 8169,
   "name": 2011,
   "country": "okanogan "
 },
 {
   "x": 20920,
   "y": 47977,
   "z": 17645,
   "name": 2011,
   "country": "pacific "
 },
 {
   "x": 13001,
   "y": 57832,
   "z": 1183,
   "name": 2011,
   "country": "pend oreille "
 },
 {
   "x": 795225,
   "y": 47594,
   "z": 3335,
   "name": 2011,
   "country": "pierce "
 },
 {
   "x": 15769,
   "y": 31951,
   "z": 623,
   "name": 2011,
   "country": "san juan "
 },
 {
   "x": 116901,
   "y": 37757,
   "z": 1741,
   "name": 2011,
   "country": "skagit "
 },
 {
   "x": 11066,
   "y": 47375,
   "z": 11225,
   "name": 2011,
   "country": "skamania "
 },
 {
   "x": 713335,
   "y": 46915,
   "z": 7094,
   "name": 2011,
   "country": "snohomish "
 },
 {
   "x": 471221,
   "y": 52131,
   "z": 14406,
   "name": 2011,
   "country": "spokane "
 },
 {
   "x": 43531,
   "y": 54018,
   "z": 649,
   "name": 2011,
   "country": "stevens "
 },
 {
   "x": 252264,
   "y": 36889,
   "z": 852,
   "name": 2011,
   "country": "thurston "
 },
 {
   "x": 3978,
   "y": 71361,
   "z": 470,
   "name": 2011,
   "country": "wahkiakum "
 },
 {
   "x": 201140,
   "y": 75593,
   "z": 22320,
   "name": 2011,
   "country": "whatcom "
 },
 {
   "x": 44776,
   "y": 66399,
   "z": 20329,
   "name": 2011,
   "country": "whitman "
 },
 {
   "x": 243231,
   "y": 78820,
   "z": 1803,
   "name": 2011,
   "country": "yakima "
 },
 {
   "x": 22704,
   "y": 70407,
   "z": 4882,
   "name": 2012,
   "country": "asotin "
 },
 {
   "x": 183936,
   "y": 33075,
   "z": 990,
   "name": 2012,
   "country": "benton "
 },
 {
   "x": 76076,
   "y": 52876,
   "z": 24306,
   "name": 2012,
   "country": "chelan "
 },
 {
   "x": 74974,
   "y": 48598,
   "z": 7356,
   "name": 2012,
   "country": "clallam "
 },
 {
   "x": 446631,
   "y": 77726,
   "z": 12300,
   "name": 2012,
   "country": "clark "
 },
 {
   "x": 107530,
   "y": 72109,
   "z": 236,
   "name": 2012,
   "country": "cowlitz "
 },
 {
   "x": 40353,
   "y": 48823,
   "z": 2167,
   "name": 2012,
   "country": "douglas "
 },
 {
   "x": 7929,
   "y": 76423,
   "z": 5701,
   "name": 2012,
   "country": "ferry "
 },
 {
   "x": 82071,
   "y": 70345,
   "z": 1616,
   "name": 2012,
   "country": "franklin "
 },
 {
   "x": 93576,
   "y": 72203,
   "z": 3561,
   "name": 2012,
   "country": "grant "
 },
 {
   "x": 76437,
   "y": 77178,
   "z": 8263,
   "name": 2012,
   "country": "grays harbor "
 },
 {
   "x": 82431,
   "y": 56908,
   "z": 23328,
   "name": 2012,
   "country": "island "
 },
 {
   "x": 31366,
   "y": 71071,
   "z": 3326,
   "name": 2012,
   "country": "jefferson "
 },
 {
   "x": 2027811,
   "y": 45312,
   "z": 6165,
   "name": 2012,
   "country": "king "
 },
 {
   "x": 263690,
   "y": 59778,
   "z": 2135,
   "name": 2012,
   "country": "kitsap "
 },
 {
   "x": 42961,
   "y": 68344,
   "z": 3727,
   "name": 2012,
   "country": "kittitas "
 },
 {
   "x": 21334,
   "y": 34346,
   "z": 5583,
   "name": 2012,
   "country": "klickitat "
 },
 {
   "x": 79228,
   "y": 81851,
   "z": 1363,
   "name": 2012,
   "country": "lewis "
 },
 {
   "x": 11098,
   "y": 80008,
   "z": 3529,
   "name": 2012,
   "country": "lincoln "
 },
 {
   "x": 63734,
   "y": 66699,
   "z": 2131,
   "name": 2012,
   "country": "mason "
 },
 {
   "x": 43176,
   "y": 61817,
   "z": 8943,
   "name": 2012,
   "country": "okanogan "
 },
 {
   "x": 21966,
   "y": 37490,
   "z": 18904,
   "name": 2012,
   "country": "pacific "
 },
 {
   "x": 13651,
   "y": 55584,
   "z": 1346,
   "name": 2012,
   "country": "pend oreille "
 },
 {
   "x": 834986,
   "y": 55219,
   "z": 3674,
   "name": 2012,
   "country": "pierce "
 },
 {
   "x": 16557,
   "y": 42101,
   "z": 596,
   "name": 2012,
   "country": "san juan "
 },
 {
   "x": 122746,
   "y": 64180,
   "z": 1965,
   "name": 2012,
   "country": "skagit "
 },
 {
   "x": 11619,
   "y": 78062,
   "z": 12149,
   "name": 2012,
   "country": "skamania "
 },
 {
   "x": 749002,
   "y": 82348,
   "z": 7783,
   "name": 2012,
   "country": "snohomish "
 },
 {
   "x": 494782,
   "y": 39336,
   "z": 15950,
   "name": 2012,
   "country": "spokane "
 },
 {
   "x": 45708,
   "y": 55046,
   "z": 762,
   "name": 2012,
   "country": "stevens "
 },
 {
   "x": 264877,
   "y": 70356,
   "z": 972,
   "name": 2012,
   "country": "thurston "
 },
 {
   "x": 4177,
   "y": 64660,
   "z": 517,
   "name": 2012,
   "country": "wahkiakum "
 },
 {
   "x": 211197,
   "y": 82796,
   "z": 24486,
   "name": 2012,
   "country": "whatcom "
 },
 {
   "x": 47015,
   "y": 57537,
   "z": 21915,
   "name": 2012,
   "country": "whitman "
 },
 {
   "x": 255393,
   "y": 80330,
   "z": 1990,
   "name": 2012,
   "country": "yakima "
 },
 {
   "x": 23839,
   "y": 74481,
   "z": 776,
   "name": 2013,
   "country": "asotin "
 },
 {
   "x": 193133,
   "y": 58309,
   "z": 128,
   "name": 2013,
   "country": "benton "
 },
 {
   "x": 79880,
   "y": 76793,
   "z": 3816,
   "name": 2013,
   "country": "chelan "
 },
 {
   "x": 78723,
   "y": 45097,
   "z": 1116,
   "name": 2013,
   "country": "clallam "
 },
 {
   "x": 468963,
   "y": 52130,
   "z": 1817,
   "name": 2013,
   "country": "clark "
 },
 {
   "x": 112906,
   "y": 60818,
   "z": 43,
   "name": 2013,
   "country": "cowlitz "
 },
 {
   "x": 42371,
   "y": 69063,
   "z": 331,
   "name": 2013,
   "country": "douglas "
 },
 {
   "x": 8325,
   "y": 57447,
   "z": 832,
   "name": 2013,
   "country": "ferry "
 },
 {
   "x": 86175,
   "y": 47827,
   "z": 233,
   "name": 2013,
   "country": "franklin "
 },
 {
   "x": 98255,
   "y": 56202,
   "z": 516,
   "name": 2013,
   "country": "grant "
 },
 {
   "x": 80259,
   "y": 64598,
   "z": 1269,
   "name": 2013,
   "country": "grays harbor "
 },
 {
   "x": 86553,
   "y": 71316,
   "z": 3530,
   "name": 2013,
   "country": "island "
 },
 {
   "x": 32934,
   "y": 54017,
   "z": 499,
   "name": 2013,
   "country": "jefferson "
 },
 {
   "x": 2129202,
   "y": 67926,
   "z": 962,
   "name": 2013,
   "country": "king "
 },
 {
   "x": 276874,
   "y": 66008,
   "z": 339,
   "name": 2013,
   "country": "kitsap "
 },
 {
   "x": 45109,
   "y": 50062,
   "z": 559,
   "name": 2013,
   "country": "kittitas "
 },
 {
   "x": 22401,
   "y": 65352,
   "z": 889,
   "name": 2013,
   "country": "klickitat "
 },
 {
   "x": 83189,
   "y": 44369,
   "z": 232,
   "name": 2013,
   "country": "lewis "
 },
 {
   "x": 11653,
   "y": 64697,
   "z": 531,
   "name": 2013,
   "country": "lincoln "
 },
 {
   "x": 66921,
   "y": 79632,
   "z": 318,
   "name": 2013,
   "country": "mason "
 },
 {
   "x": 45335,
   "y": 59314,
   "z": 1334,
   "name": 2013,
   "country": "okanogan "
 },
 {
   "x": 23064,
   "y": 64703,
   "z": 2829,
   "name": 2013,
   "country": "pacific "
 },
 {
   "x": 14334,
   "y": 49464,
   "z": 206,
   "name": 2013,
   "country": "pend oreille "
 },
 {
   "x": 876735,
   "y": 42999,
   "z": 532,
   "name": 2013,
   "country": "pierce "
 },
 {
   "x": 17385,
   "y": 76182,
   "z": 81,
   "name": 2013,
   "country": "san juan "
 },
 {
   "x": 128883,
   "y": 69147,
   "z": 303,
   "name": 2013,
   "country": "skagit "
 },
 {
   "x": 12200,
   "y": 83341,
   "z": 1892,
   "name": 2013,
   "country": "skamania "
 },
 {
   "x": 786452,
   "y": 76864,
   "z": 1192,
   "name": 2013,
   "country": "snohomish "
 },
 {
   "x": 519521,
   "y": 42093,
   "z": 2494,
   "name": 2013,
   "country": "spokane "
 },
 {
   "x": 47993,
   "y": 47072,
   "z": 125,
   "name": 2013,
   "country": "stevens "
 },
 {
   "x": 278121,
   "y": 70298,
   "z": 138,
   "name": 2013,
   "country": "thurston "
 },
 {
   "x": 4386,
   "y": 33592,
   "z": 64,
   "name": 2013,
   "country": "wahkiakum "
 },
 {
   "x": 221757,
   "y": 72145,
   "z": 3721,
   "name": 2013,
   "country": "whatcom "
 },
 {
   "x": 49366,
   "y": 41402,
   "z": 3351,
   "name": 2013,
   "country": "whitman "
 },
 {
   "x": 268163,
   "y": 30145,
   "z": 305,
   "name": 2013,
   "country": "yakima "
 },
 {
   "x": 25031,
   "y": 77414,
   "z": 1106,
   "name": 2014,
   "country": "asotin "
 },
 {
   "x": 202790,
   "y": 56192,
   "z": 225,
   "name": 2014,
   "country": "benton "
 },
 {
   "x": 83874,
   "y": 33138,
   "z": 5461,
   "name": 2014,
   "country": "chelan "
 },
 {
   "x": 82659,
   "y": 61333,
   "z": 1612,
   "name": 2014,
   "country": "clallam "
 },
 {
   "x": 492411,
   "y": 77159,
   "z": 2792,
   "name": 2014,
   "country": "clark "
 },
 {
   "x": 118551,
   "y": 59908,
   "z": 77,
   "name": 2014,
   "country": "cowlitz "
 },
 {
   "x": 44490,
   "y": 83237,
   "z": 499,
   "name": 2014,
   "country": "douglas "
 },
 {
   "x": 8741,
   "y": 81119,
   "z": 1255,
   "name": 2014,
   "country": "ferry "
 },
 {
   "x": 90484,
   "y": 53947,
   "z": 360,
   "name": 2014,
   "country": "franklin "
 },
 {
   "x": 103168,
   "y": 55754,
   "z": 774,
   "name": 2014,
   "country": "grant "
 },
 {
   "x": 84272,
   "y": 60820,
   "z": 1919,
   "name": 2014,
   "country": "grays harbor "
 },
 {
   "x": 90881,
   "y": 57044,
   "z": 5227,
   "name": 2014,
   "country": "island "
 },
 {
   "x": 34581,
   "y": 60554,
   "z": 751,
   "name": 2014,
   "country": "jefferson "
 },
 {
   "x": 2235662,
   "y": 51499,
   "z": 1423,
   "name": 2014,
   "country": "king "
 },
 {
   "x": 290718,
   "y": 32686,
   "z": 509,
   "name": 2014,
   "country": "kitsap "
 },
 {
   "x": 47364,
   "y": 50069,
   "z": 799,
   "name": 2014,
   "country": "kittitas "
 },
 {
   "x": 23521,
   "y": 45119,
   "z": 1283,
   "name": 2014,
   "country": "klickitat "
 },
 {
   "x": 87348,
   "y": 56664,
   "z": 317,
   "name": 2014,
   "country": "lewis "
 },
 {
   "x": 12236,
   "y": 31628,
   "z": 779,
   "name": 2014,
   "country": "lincoln "
 },
 {
   "x": 70267,
   "y": 83102,
   "z": 451,
   "name": 2014,
   "country": "mason "
 },
 {
   "x": 47602,
   "y": 44659,
   "z": 2069,
   "name": 2014,
   "country": "okanogan "
 },
 {
   "x": 24217,
   "y": 80935,
   "z": 4340,
   "name": 2014,
   "country": "pacific "
 },
 {
   "x": 15051,
   "y": 41148,
   "z": 280,
   "name": 2014,
   "country": "pend oreille "
 },
 {
   "x": 920572,
   "y": 51662,
   "z": 887,
   "name": 2014,
   "country": "pierce "
 },
 {
   "x": 18254,
   "y": 73889,
   "z": 137,
   "name": 2014,
   "country": "san juan "
 },
 {
   "x": 135327,
   "y": 70725,
   "z": 416,
   "name": 2014,
   "country": "skagit "
 },
 {
   "x": 12810,
   "y": 64251,
   "z": 2803,
   "name": 2014,
   "country": "skamania "
 },
 {
   "x": 825775,
   "y": 57874,
   "z": 1803,
   "name": 2014,
   "country": "snohomish "
 },
 {
   "x": 545497,
   "y": 69559,
   "z": 3604,
   "name": 2014,
   "country": "spokane "
 },
 {
   "x": 50393,
   "y": 75243,
   "z": 146,
   "name": 2014,
   "country": "stevens "
 },
 {
   "x": 292027,
   "y": 62826,
   "z": 198,
   "name": 2014,
   "country": "thurston "
 },
 {
   "x": 4605,
   "y": 68987,
   "z": 121,
   "name": 2014,
   "country": "wahkiakum "
 },
 {
   "x": 232845,
   "y": 74242,
   "z": 5473,
   "name": 2014,
   "country": "whatcom "
 },
 {
   "x": 51834,
   "y": 54229,
   "z": 4963,
   "name": 2014,
   "country": "whitman "
 },
 {
   "x": 281571,
   "y": 82771,
   "z": 451,
   "name": 2014,
   "country": "yakima "
 },
 {
   "x": 26283,
   "y": 64526,
   "z": 2437,
   "name": 2015,
   "country": "asotin "
 },
 {
   "x": 212930,
   "y": 70813,
   "z": 493,
   "name": 2015,
   "country": "benton "
 },
 {
   "x": 88068,
   "y": 52410,
   "z": 12444,
   "name": 2015,
   "country": "chelan "
 },
 {
   "x": 86792,
   "y": 43838,
   "z": 3817,
   "name": 2015,
   "country": "clallam "
 },
 {
   "x": 517032,
   "y": 45500,
   "z": 6204,
   "name": 2015,
   "country": "clark "
 },
 {
   "x": 124479,
   "y": 46619,
   "z": 122,
   "name": 2015,
   "country": "cowlitz "
 },
 {
   "x": 46714,
   "y": 31976,
   "z": 1131,
   "name": 2015,
   "country": "douglas "
 },
 {
   "x": 9178,
   "y": 79415,
   "z": 2705,
   "name": 2015,
   "country": "ferry "
 },
 {
   "x": 95008,
   "y": 54913,
   "z": 799,
   "name": 2015,
   "country": "franklin "
 },
 {
   "x": 108326,
   "y": 76572,
   "z": 1755,
   "name": 2015,
   "country": "grant "
 },
 {
   "x": 88486,
   "y": 34981,
   "z": 4253,
   "name": 2015,
   "country": "grays harbor "
 },
 {
   "x": 95425,
   "y": 36861,
   "z": 11929,
   "name": 2015,
   "country": "island "
 },
 {
   "x": 36310,
   "y": 52257,
   "z": 1729,
   "name": 2015,
   "country": "jefferson "
 },
 {
   "x": 2347445,
   "y": 36485,
   "z": 3118,
   "name": 2015,
   "country": "king "
 },
 {
   "x": 305254,
   "y": 51470,
   "z": 1123,
   "name": 2015,
   "country": "kitsap "
 },
 {
   "x": 49732,
   "y": 59538,
   "z": 1832,
   "name": 2015,
   "country": "kittitas "
 },
 {
   "x": 24697,
   "y": 78216,
   "z": 2843,
   "name": 2015,
   "country": "klickitat "
 },
 {
   "x": 91715,
   "y": 47139,
   "z": 676,
   "name": 2015,
   "country": "lewis "
 },
 {
   "x": 12848,
   "y": 39692,
   "z": 1846,
   "name": 2015,
   "country": "lincoln "
 },
 {
   "x": 73780,
   "y": 30061,
   "z": 1045,
   "name": 2015,
   "country": "mason "
 },
 {
   "x": 49982,
   "y": 65909,
   "z": 4531,
   "name": 2015,
   "country": "okanogan "
 },
 {
   "x": 25428,
   "y": 75213,
   "z": 9985,
   "name": 2015,
   "country": "pacific "
 },
 {
   "x": 15804,
   "y": 83304,
   "z": 686,
   "name": 2015,
   "country": "pend oreille "
 },
 {
   "x": 966601,
   "y": 58293,
   "z": 1970,
   "name": 2015,
   "country": "pierce "
 },
 {
   "x": 19167,
   "y": 35294,
   "z": 294,
   "name": 2015,
   "country": "san juan "
 },
 {
   "x": 142093,
   "y": 67524,
   "z": 1040,
   "name": 2015,
   "country": "skagit "
 },
 {
   "x": 13450,
   "y": 57936,
   "z": 6208,
   "name": 2015,
   "country": "skamania "
 },
 {
   "x": 867064,
   "y": 75519,
   "z": 3933,
   "name": 2015,
   "country": "snohomish "
 },
 {
   "x": 572772,
   "y": 42243,
   "z": 8038,
   "name": 2015,
   "country": "spokane "
 },
 {
   "x": 52913,
   "y": 52111,
   "z": 370,
   "name": 2015,
   "country": "stevens "
 },
 {
   "x": 306628,
   "y": 62487,
   "z": 521,
   "name": 2015,
   "country": "thurston "
 },
 {
   "x": 4835,
   "y": 75687,
   "z": 252,
   "name": 2015,
   "country": "wahkiakum "
 },
 {
   "x": 244487,
   "y": 63549,
   "z": 12657,
   "name": 2015,
   "country": "whatcom "
 },
 {
   "x": 54426,
   "y": 83648,
   "z": 11206,
   "name": 2015,
   "country": "whitman "
 },
 {
   "x": 295650,
   "y": 75523,
   "z": 1013,
   "name": 2015,
   "country": "yakima "
 }
]
        }]

    });
});
    init();
});