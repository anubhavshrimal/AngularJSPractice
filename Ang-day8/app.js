/**
 * Created by anubhavshrimal on 26/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("firstCtrl", function ($scope) {
    $scope.text = "dynamic text";

    $scope.nations =
            [{"name" : "India", "greet" : "Namastey"},
            {"name" : "USA", "greet" : "Hello"},
            {"name" : "French", "greet" : "Bonjour"},
            {"name" : "Spanish", "greet" : "Allo"}];

    $scope.changeText = function (country) {

        for(i = 0 ; i < $scope.nations.length ; i++){

            if($scope.nations[i]["name"] === country){

                $scope.text = $scope.nations[i]["greet"];

            }
        }
    }
    
    $scope.update = function () {
        $scope.nations.push($scope.country);
    }
});
