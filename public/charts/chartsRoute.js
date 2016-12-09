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
                        templateUrl: 'charts/highcharts/lineArea.html',
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
                        templateUrl: 'charts/highcharts/columnBar.html',
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
                        templateUrl: 'charts/highcharts/scatterBubble.html',
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
                        templateUrl: 'charts/highcharts/Geographical.html',
                        controller: 'GeographicalCtrl'
                    }
                },
                resolve: {
                }
            })            
    });
