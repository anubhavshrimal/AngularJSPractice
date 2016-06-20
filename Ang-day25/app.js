
var app = angular.module("myApp", []);

'use strict';

app.controller("formCtrl", ["$scope", function ($scope) {

    $scope.submit = function () {
        console.log($scope.form1);
        console.log($scope.form1.username);
        console.log($scope.form1.password);
        console.log($scope.form1.email);
    }
}]);