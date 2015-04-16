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

    $scope.panel = 0;
    $scope.Math = Math;

    $scope.search = function () {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + "&mode=json&units=metric&cnt=10";
        $scope.loader = true;
        $http.get(url).success(onSuccess).error(onError);
    };

    $scope.geolocate = function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            $scope.loader = true;
            $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&mode=json&units=metric&cnt=10").success(onSuccess).error(onError);
        });
    };

    $scope.expand = function(e) {
        $(e.currentTarget).addClass("row_active");
        $(e.currentTarget).siblings().removeClass("row_active");
    }

    var onSuccess = function (position) {
        $scope.panel = 1;
        $scope.loader = false;
        $scope.weather = position;
    };

    function onError(error) {
        $scope.loader = false;
        alert('Impossible de récupérer les informations !');
    };
});
