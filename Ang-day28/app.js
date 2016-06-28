/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",["ngAnimate"]);


app.controller("testCtrl",function($scope){


    $scope.names = ["abc","xyz","cdf"];

    $scope.call=function(i,n){
        console.log(i,n);
    }

    $scope.add = function(){
        $scope.names.push($scope.name);
    }


})