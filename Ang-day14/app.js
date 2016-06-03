/**
 * Created by anubhavshrimal on 31/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("firstCtrl",function ($scope) {
    $scope.nations =
        [{"name" : "India", "greet" : "Namastey", "con": "Asia"},
            {"name" : "USA", "greet" : "Hello", "con": "America"},
            {"name" : "French", "greet" : "Bonjour", "con": "Europe"},
            {"name" : "Spanish", "greet" : "Allo", "con": "Europe"}];
});