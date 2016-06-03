/**
 * Created by anubhavshrimal on 26/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("firstCtrl", function ($scope, dataService) {

    $scope.user1 = dataService.data;
});

app.controller("secondCtrl", function ($scope, dataService) {

    $scope.user2 = dataService.data;
});

app.service("dataService",function () {

    this.data = {};
});