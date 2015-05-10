// define our application and pull in ngRoute and ngAnimate
var scotchApp = angular.module('scotchApp', ['ngAnimate', 'ngRoute']); // create the module and name it scotchApp

//routes
scotchApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
        // use the HTML5 History API,  $locationProvider
        //$locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope){
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.pageClass = 'page-home';
});
scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-about';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
});

//var demoApp = angular.module('demo', ['ngAnimate'])

scotchApp.controller('MainCtrl', function($scope) {

  $scope.items = [];

  $scope.push = function() {
    $scope.items.push(+new Date());
  };

  $scope.pop = function() {
    $scope.items.pop();
  };
});