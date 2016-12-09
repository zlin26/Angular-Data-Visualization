'use strict';

angular.module('charts')
    .config(function ($stateProvider) {
        $stateProvider
            .state('lineArea', {
                parent: 'site',
                url: '/lineArea',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'charts/highcharts/highChart1.html',
                        controller: 'lineAreaCtrl'
                    }
                },
                resolve: {
                }
            })
            .state('columnBar', {
                parent: 'site',
                url: '/columnBar',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'charts/highcharts/highChart2.html',
                        controller: 'columnBarCtrl'
                    }
                },
                resolve: {
                }
            })
            .state('scatterBubble', {
                parent: 'site',
                url: '/scatterBubble',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'charts/highcharts/highChart3.html',
                        controller: 'scatterBubbleCtrl'
                    }
                },
                resolve: {
                }
            })
            .state('Geographical', {
                parent: 'site',
                url: '/Geographical',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'charts/highcharts/highChart4.html',
                        controller: 'GeographicalCtrl'
                    }
                },
                resolve: {
                }
            })            
    });
