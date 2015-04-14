'use strict';

document.addEventListener('deviceready', function () {

}, false);

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('NavCtrl', function ($scope) {
    $scope.menu = "home";
});

app.controller('WeatherCtrl', function ($scope, $http) {

    $scope.Math = Math;
    $scope.city = "Montpellier";

    $scope.search = function () {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + "&mode=json&units=metric&cnt=10";
        $scope.loader = true;
        $http.get(url).success(function (response) {
            $scope.loader = false;
            $scope.weather = response;
        }).error(function () {
            $scope.loader = false;
            alert('Impossible de récupérer les informations !');
        });
    };

    $scope.geolocate = function() {

    };
});
