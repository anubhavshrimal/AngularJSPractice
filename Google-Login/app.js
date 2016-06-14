var app = angular.module("myApp",["firebase"]);

app.controller("firstCtrl", function ($scope, $firebaseArray) {

    var ref = new Firebase("https://anubhav.firebaseio.com/colleges");

    $scope.colleges = $firebaseArray(ref);
});