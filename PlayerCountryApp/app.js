/**
 * Created by anubhavshrimal on 26/5/16.
 */
var app = angular.module("playerCountry",[]);

app.controller("fisrtCtrl",function ($scope) {
    $scope.names=[
        {"name" : "Sachin", "flag" : "india.png"},
        {"name" : "Chris Gayle", "flag" : "westindies.png"},
        {"name" : "Dhoni", "flag" : "india.png"},
        {"name" : "AB Devillers", "flag" : "southafrica.gif"},
        {"name" : "Shane Watson", "flag" : "australia.png"}];
});