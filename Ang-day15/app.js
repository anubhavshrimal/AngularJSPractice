/**
 * Created by anubhavshrimal on 31/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("firstCtrl",function ($scope) {

    $scope.$on("label", function (event, data) {
       console.log(data);
       console.log(event);
    });
});

app.controller("secondCtrl",function ($scope, $timeout) {
    
    $timeout(function () {
        $scope.$broadcast("label",{"val": "this is the data passed and can also be a simple string"});
        console.log("broadcasted");
    },3000);
});

app.controller("thirdCtrl",function ($scope) {

    $scope.$on("label1", function (event, data) {
        console.log("hello");
    });
});

app.controller("fourthCtrl",function ($scope, $timeout) {

    $timeout(function () {
        $scope.$emit("label1","hello");
        console.log("emitted");
    },4000);
});