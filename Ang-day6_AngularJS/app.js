/**
 * Created by anubhavshrimal on 24/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("firstCtrl",function ($scope,$rootScope) {

    $scope.color="blue";
    $rootScope.color="black";
    $scope.send = function () {
        console.log($scope.color);
    }
});

app.controller("secondCtrl",function ($scope) {

    $scope.color="red";
});


