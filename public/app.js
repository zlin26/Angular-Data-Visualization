'use strict';

console.log('entered app.js');

angular.module('charts', ['LocalStorageModule','ui.bootstrap', 
    'ngResource', 'ui.router', 'ngCookies', 'ngCacheBuster'])

    .run(function ($rootScope, $location, $window, $http, $state) {
      
    console.log('2');    
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
            
        });
	console.log('3'); 	
        $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
            var titleKey = 'Data Visualization ' ;

            $rootScope.previousStateName = fromState.name;
            $rootScope.previousStateParams = fromParams;

            // Set the page title key to the one configured in state or use default one
            if (toState.data.pageTitle) {
                titleKey = toState.data.pageTitle;
            }
            $window.document.title = titleKey;
        });
    console.log('4'); 
        $rootScope.back = function() {
            // If previous state is 'activate' or do not exist go to 'home'
            console.log('state:',$rootScope.previousStateName);
            console.log('stateParams:',$rootScope.previousStateParams);
            if ($rootScope.previousStateName === 'activate' || $state.get($rootScope.previousStateName) === null) {
                $state.go('home');
            } else {
                $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
            }
        };
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider,httpRequestInterceptorCacheBusterProvider) {
		
        console.log('5'); 
    	
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: 'components/navbar/navbar.html',
                    controller: 'NavbarController'
                }
            },
            resolve: {
              
            }
        });        
    });
