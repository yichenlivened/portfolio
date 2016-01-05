'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  when('/addOrder', {
    templateUrl: 'views/.html',
  }).
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
