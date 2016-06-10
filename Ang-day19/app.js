var app = angular.module("myApp",[]);

'use strict';

app.controller("apiCtrl", ["$scope", "$http", "$q", function ($scope, $http, $q) {

    var promise = $http.get("http://api.fixer.io/latest?base=USD");
    var promise2 = $http.get("http://api.fixer.io/latest?base=INR");
    $scope.amount = 0;
    var rate = 0;

    promise.then(function (obj) {
        rate = obj.data.rates.INR;
        console.log("promise 1");
    }, function () {
        console.log("error");
    });

    promise2.then(function (obj) {
        console.log("promise 2");
    }, function () {
        console.log("error");
    });

    $scope.$watch("amount",function () {
        $scope.amountInRs = parseFloat(rate) * parseFloat($scope.amount);
    });

    var superPromise = $q.all([promise, promise2]);
    
    superPromise.then(function () {
       console.log("both api resolved");
    });
}]);